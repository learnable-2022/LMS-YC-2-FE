import React, { useEffect, useState, useContext } from 'react';
import styles from './secondsignup.module.css'
import {Logo, FormImg} from '../../assets';
import { NavLink, useNavigate } from 'react-router-dom';
import AppContext from "../../context/Appcontext"



function SignUp() {
  const { studentData} = useContext(AppContext)

  const [childName, setChildName] = useState("")
  const [childDOB, setChildDOB] = useState("")
  const [childClass, setChildClass] = useState("")
  const [password, setPassword] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [childNameError, setChildNameError] = useState("")
  const [dobError, setDobError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^$*])[a-zA-Z0-9!@#$%^&*]{8,}$/
  const [age, setAge] = useState()
  const navigate = useNavigate() 
  const [data, setData] = useState()


  const checkChildName = () => {
    if(childName == ""){
      setChildNameError(null)
    }else if(childName !== "" && childName.trim().length < 8 ){
      setChildNameError("Name must be greater than 7 characters")
    }else {
      setChildNameError(null)
    }
  }

  const checkAge = () => {
    let dob = new Date(childDOB)
    let monthDiff = Date.now() - dob.getTime()
    let ageDate = new Date(monthDiff)
    let year = ageDate.getUTCFullYear()
    setAge(Math.abs(year-1970))

    if(age < 6 || age > 13){
      setDobError("Child must be within 6 to 13 years")
    }else{
      setDobError(null)
    }
  }
  const checkBtnDisabled = () => {
    if(childName == "" || password === "" || (childName !== "" && childName.trim().length < 8) || (!passwordRegex.test(password) && password !== "") || age < 6 || age > 13){
      setBtnDisabled(true)
    }else{
      setBtnDisabled(false)
    }
  }
  const checkPassword = (e) => {
    if(passwordRegex.test(password)){
      setPasswordError("")
    }else if(!passwordRegex.test(password) && password !== ""){
      setPasswordError("Password must be a minimum of 8 characters and include at least 1 letter, 1 special character and 1 number")
    }else if(password === ""){
      setPasswordError("")
    }    
  } 

  useEffect(() => {
    checkChildName()
  }, [childName])

  useEffect(() => {
    checkPassword()
  }, [password])

  useEffect(() => {
    checkBtnDisabled()
  }, [childName, password])

  useEffect(() => {
    checkAge()
  }, [childDOB])

  const signUpUser = (e) => {
    e.preventDefault();

    studentData.child_name = childName
    studentData.child_class = childClass
    studentData.DOB = childDOB
    studentData.password = password

      const response = fetch("https://learnz.onrender.com/api/v1/user/register", {
        method : "POST",
        body : JSON.stringify(studentData),
        headers : {
          "Content-Type" : "application/json",
          "Authorization" : "Basic c2FtdWVsOmNoaWR1YmVt",
        }
      })
      .then(response => response.json())
      .then (data => (
        data.success == true ? navigate("/student/dashboard") : "",
        setData(data)
      ))
      
    if (data !== null && data !== undefined) {
      if (data.success !== null && data.success !== undefined) {
        if (data.success === true) {
          studentData.Id = data.user[0]._id
          console.log(studentData.Id)
        } else if (data.success === false) {
          console.log("remain on the home page");
        }
      }
    }

  
  } 

      return (
        <div className= {styles.mainBody}>
        <div className= {styles.mainContainer}>
          <div className= {styles.imageArea}>
            <img src={Logo} alt="Logo Image" className= {styles.logoImage} />
            <img src={FormImg} alt="Log in Image"  className= {styles.loginImage} />
          </div>
          <div className= {styles.formArea}>
            <div className= {styles.formContainer}>
              <h2 className = {styles.h2}>Sign up</h2>
              <h4 className = {styles.h4}>Please enter the information below to give your child an edge.</h4>
              <p className= {styles.formTitle}>Account Information</p>
              <form className = {styles.form} onSubmit = {signUpUser}>
                <div className = {styles.inputGroup}>
                  <label>Child's name</label>
                  <input type="text" placeholder='Full name' required value = {childName} onChange={(e) => setChildName(e.target.value)} />
                  <p className = {styles.error}>{childNameError}</p>
                </div>
                <div className = {styles.inputGroup}>
                  <label>Date of birth</label>  
                  <input type="date" placeholder='12 April 2012' value = {childDOB} onChange = {(e) => setChildDOB(e.target.value)} required />
                  <p className = {styles.error}>{dobError}</p>
                </div>
                <div className = {styles.inputGroup}>
                <label>Class</label>  
                  <input type="text" placeholder='Grade 6' value = {childClass} onChange = {(e) => setChildClass(e.target.value)} required/>
                </div>
                <div className = {styles.inputGroup}>
                  <label>Password</label>  
                  <input type="password" placeholder='Password' value = {password} onChange = {(e) => setPassword(e.target.value)} required/>
                  <p className = {styles.error}>{passwordError}</p>
                </div>
                
                <button type = "submit" className = {`${styles.done} ${btnDisabled ? styles.disabled : "" }`} disabled = {btnDisabled}>Done</button>
              </form>
              
            </div>
          </div>  
        </div>
      </div>
    )
}

export default SignUp
