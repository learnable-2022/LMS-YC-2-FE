import React, { useContext, useEffect, useState } from 'react';
import styles from './studentLogin.module.css'
import {Logo, FormImg, Eyeslash, FormProfileIcon, Loader} from '../../../assets';
import { NavLink, useNavigate } from 'react-router-dom';
import AppContext from '../../../context/Appcontext';

function StudentLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState()
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState()
  const [message, setMessage] = useState()
  // const [btnDisabled, setBtnDisabled] = useState(true)

  const navigate = useNavigate()

  const  {setStudentLoggedIn, studentInfo, studentData, setStudentInfo, setStudentToken} = useContext(AppContext)

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true)
    const loginData = {
      email : email,
      password: password
    }

    const response = fetch("https://learnz.onrender.com/api/v1/user/login", {
      method : "POST",
      body : JSON.stringify(loginData),
      headers : {
        "Content-Type" : "application/json",
      }
    })
    .then(response => response.json()) 
    .then (data => {
      let track;
      data.success ? track = data.user.track : ""
      data.success ?  window.localStorage.setItem("student-status", JSON.stringify(data.user)) : ""
      data.success ? window.localStorage.setItem("student-token", JSON.stringify(data.token)) : ""
      setData(data)
      setLoading(false)
      data.success ? track.trim() == "NULL" ? navigate("/student/dashboard/lessons") : navigate("/student/dashboard") : ""
      data.success ? window.localStorage.setItem("loggedIn", true) : window.localStorage.setItem("loggedIn", false);
      data.success ? setStudentInfo(JSON.parse(window.localStorage.getItem("student-status"))) : ""
      data.success ? setStudentToken(JSON.parse(window.localStorage.getItem("student-token"))) : ""
      data.success ? setStudentLoggedIn(JSON.parse(window.localStorage.getItem("loggedIn"))) : ""
      // console.log(data)
    })
    .catch((err) => {
      setLoginError(err)
      setLoading(false)
      console.log(err)
    })

  }

  const checkData = () => {
    if(data !== null && data !== undefined){
        if(data.success !== null && data.success !== undefined){
            if(!data.success){
                setMessage(data.message)
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

  const forgotPassword = () => {

  }

  return (
    <div className= {styles.container}>
      <div className= {styles.formArea}>
        <div className= {styles.imageArea}>
          <img src={FormImg} alt="Log in Image"/>
        </div>
        <div className= {styles.formContainer}>
          <h2>Welcome</h2>
          <h4>Please enter your information below to resume your beautiful learning experience.</h4>
          <form className = {styles.form} onSubmit = {signIn}>
            <p className = {styles.dataMessage}>{message}</p>
            <div className = {styles.inputGroup}>
              <input type="email" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder='Email/Username' required/>
              <img src= {FormProfileIcon} alt=""/>
            </div>
            <div className = {`${styles.inputGroup} ${styles.password}`} >
              <input type= {passwordVisibility ? "text" : "password"} value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder='Password' required/>
              <img src= {Eyeslash} alt="" onClick = {(e) => setPasswordVisibility(!passwordVisibility)} id = {styles.passwordVisible}/>
            </div>
            <NavLink to = "forgotPassword" className = {styles.forgot}>Forgot Password?</NavLink>
            <button type = "submit" >
              {loading && <img src = {Loader}/>}
              {!loading && "Sign in"}
            </button>
          </form>
            <p className= {styles.signUp}>Don't have an account? <NavLink to = "/signup">Sign up</NavLink> </p>
          </div>
      </div>  
    </div>
  );
}

export default StudentLogin;

