import  React, {useContext, useEffect, useState } from 'react';
import styles from './studentsignup.module.css'
import {Eyeslash, FormImg, ArrowRight, Loader} from '../../assets';
import { NavLink, useNavigate } from 'react-router-dom';
import AppContext from "../../context/Appcontext"


function StudentSignUp() {
  const { studentData, setStudentSignedUp, studentStatus, setStudentStatus} = useContext(AppContext)

  const [parentName, setParentName] = useState("")
  const [childName, setChildName] = useState("")
  const [email, setEmail] = useState("")
  const [relationship, setRelationship] = useState("")
  const [parentNameError, setParentNameError] = useState("")
  const [gender, setGender] = useState("")
  const [childDOB, setChildDOB] = useState("")
  const [childClass, setChildClass] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [childNameError, setChildNameError] = useState("")
  const [dobError, setDobError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^$*])[a-zA-Z0-9!@#$%^&*]{8,}$/
  const [age, setAge] = useState()
  const [data, setData] = useState()
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [signupError, setSignUpError] = useState()
  const [message, setMessage] = useState()

  
  //functions
  const checkParentName = (e) => {
    if(parentName !== "" && parentName.trim().length < 8 ){
      setParentNameError("Name must be greater than 7 characters")
    }else {
      setParentNameError(null)
    }
  }
  const checkChildName = () => {
    if(childName !== "" && childName.trim().length < 8 ){
      setChildNameError("Name must be greater than 7 characters")
    }else {
      setChildNameError(null)
    }
  }
  const checkAge = () => {
    if (childDOB) {
      const today = new Date();
      const dob = new Date(childDOB);
      const ageDiff = today.getTime() - dob.getTime();
      const ageDate = new Date(ageDiff);
      const years = ageDate.getUTCFullYear() - 1970;
      setAge(years);
  
      if (years < 6 || years > 13) {
        setDobError("Child must be within 6 to 13 years");
      } else {
        setDobError("");
      }
    }
  };
  const checkPassword = (e) => {
    if(passwordRegex.test(password)){
      setPasswordError("")
    }else if(!passwordRegex.test(password) && password !== ""){
      setPasswordError("Password must be a minimum of 8 characters and include at least 1 letter, 1 special character and 1 number")
    }else if(password === ""){
      setPasswordError("")
    }    
  }
  const checkConfirmPassword = (e) => {
    if((password === "" || confirmPassword !== "") && confirmPassword !== password  ) {
      setConfirmPasswordError("Password does not match")
    }else if(password !== "" && confirmPassword !== "" && confirmPassword === password){
      setConfirmPasswordError("")
    }else if((password === "" && confirmPassword === "") ) {
      setConfirmPasswordError("")
    }
  } 
  
  const updateBtnDisabled = () => {
    if (
      parentName === "" ||
      childName === "" ||
      email === "" ||
      relationship === "" ||
      gender === "" ||
      childDOB === "" ||
      password === "" ||
      confirmPassword === "" ||
      parentName.trim().length < 8 ||
      age < 6 ||
      age > 13 ||
      (!passwordRegex.test(password) && password !== "") ||
      ((password === "" || confirmPassword !== "") && confirmPassword !== password)
    ) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  };
  
 // -------------------------------------------------------------------------USE EFFECTS--------------------------------------------------
  useEffect(() => {
    checkParentName()
  }, [parentName])

  useEffect(updateBtnDisabled, [
    parentName,
    childName,
    email,
    relationship,
    gender,
    childDOB,
    password,
    confirmPassword,
    age,
  ]);

  
  useEffect(() => {
    checkChildName()
  }, [childName])

  useEffect(() => {
    checkPassword()
  }, [password])
  useEffect(() => {
    checkConfirmPassword();
  }, [confirmPassword, password]) 

  useEffect(() => {
    checkAge()
  }, [childDOB])

  const signUpUser = (e) => {
    e.preventDefault();
    setLoading(true)

    studentData.parent_name = parentName
    studentData.child_name = childName;
    studentData.email = email
    studentData.relationship = relationship;
    studentData.DOB = childDOB;
    studentData.password = password;
    studentData.gender = gender
    studentData.child_class = childClass

    const response = fetch("https://learnz.onrender.com/api/v1/user/register", {
      method : "POST",
      body : JSON.stringify(studentData),
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : "Basic c2FtdWVsOmNoaWR1YmVt",
      }
    })
    .then(response => response.json())
    .then (data => {
      setLoading(false)
      setData(data)
      data.success == true ? setStudentSignedUp(true) : ""
      data.success == true ? navigate("/login/student") : ""
    })
    .catch(err => {
      setSignUpError(err)
      setLoading(false)
    })

  }

  const checkData = () => {
    if(data !== null && data !== undefined){
        if(data.success !== null && data.success !== undefined){
            if(!data.success){
                setMessage(data?.message)
                setTimeout(() =>{
                    setMessage("")
                }, 2000)
            }else{
                setMessage("")
            }
        }
    }
  }

  useEffect(() => {
    checkData()
  }, [data])

    return (
      <div className= {styles.container}>
        <div className= {styles.imageArea}>
          <img src={FormImg} alt="Log in Image" />
        </div>
        <div className= {styles.formContainer}>
          <h2>Sign up</h2>
          <h4>Please enter the information below to give your child an edge.</h4>
         
          <form className = {styles.form} onSubmit = {signUpUser}>
            <p className = {styles.dataMessage}>{message}</p>
            <div className= {styles.usersName}>
              <div className = {styles.inputGroup}>
                <label>Guardian's Name</label>
                <input type = "text" value = {parentName} placeholder= "Guardian's name" onChange = {(e) => setParentName(e.target.value)} required/>
                <p className = {styles.error}>{parentNameError}</p>
              </div> 

              <div className = {styles.inputGroup}>
                <label>Child's Name</label>
                <input type="text" placeholder="Child's name" value = {childName} onChange={(e) => setChildName(e.target.value)} required/>
                <p className = {styles.error}>{childNameError}</p>
              </div>
            </div>
            
            <div className = {styles.inputGroup}>
              <label>Email address(Parent or Child)</label>  
              <input type = "email" value =  {email} placeholder='Ifunanya123@gmail.com' onChange = {(e) => setEmail(e.target.value)} required/>
            </div>

            <div className = {styles.inputGroup}>
              <label>Relationship</label>
              <select value = {relationship} onChange = {(e) => setRelationship(e.target.value)} required>
                <option value ="" disabled selected>Choose a Guardian Relationship</option>
                <option value = "Father">Father</option> 
                <option value = "Mother">Mother</option> 
                <option value = "Sibling">Sibling</option>
                <option value = "Guardian">Guardian</option>
              </select>  
            </div>
            
            <div className = {styles.inputGroup}>
              <label>Gender</label>
              <select value = {gender} onChange = {(e) => setGender(e.target.value)} required>
                <option value ="" selected disabled>Select Gender</option>
                <option value = "Male">Male</option> 
                <option value = "Female">Female</option> 
              </select>  
            </div>

            <div className = {styles.inputGroup}>
              <label>Date of birth(Child)</label>  
              <input type="date" placeholder='12 April 2012' value = {childDOB} onChange = {(e) => setChildDOB(e.target.value)} required />
              <p className = {styles.error}>{dobError}</p>
            </div>

            <div className = {styles.inputGroup}>
            <label>Class</label>  
              <input type="text" placeholder='Grade 6' value = {childClass} onChange = {(e) => setChildClass(e.target.value)} required/>
            </div>

            <div className= {styles.passwordGroup}>
              <div className = {styles.inputGroup}>
                <div className= {styles.inputGroupPassword}>
                  <label>Password</label>  
                  <input type= {passwordVisibility ? "text" : "password"} placeholder='Password' value = {password} onChange = {(e) => setPassword(e.target.value)} required/>
                  <img src= {Eyeslash} alt="" onClick = {(e) => setPasswordVisibility(!passwordVisibility)} id = {styles.passwordVisible}/>
                </div>
                <p className = {styles.error}>{passwordError}</p>
              </div>

              <div className = {styles.inputGroup}>
                <div className= {styles.inputGroupPassword}>
                  <label>Password</label>  
                  <input type= {confirmPasswordVisibility ? "text" : "password"} placeholder='Confirm Password' value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} required/>
                  <img src= {Eyeslash} alt="" onClick = {(e) => setConfirmPasswordVisibility(!confirmPasswordVisibility)} id = {styles.passwordVisible}/>
                </div>
                <p className = {styles.error}>{confirmPasswordError}</p>
              </div>
            </div>
            <button type = "submit" className = {`${styles.done} ${btnDisabled ? styles.disabled : "" }`} disabled = {btnDisabled}>
              {loading && <img src = {Loader}/>}
              {!loading && "Done"}
            </button>
          </form>
          <NavLink to = "/signup" className= {styles.previous}>
            Previous
          </NavLink>
        </div>
      </div>
       
  )
}

export default StudentSignUp
