import React, { useState } from 'react';
import styles from './loginOptions.module.css'
import {Logo, FormImg, ProfileIcon, ArrowRight} from '../../assets';
import { NavLink } from 'react-router-dom';


function LoginOptions() {

  const [pathLink, setPathLink] = useState("none")

  const goToStudent = () => {
    setPathLink("student")
  }

  const goToTutor = () => {
    setPathLink("tutor")
  }

  return (
    <div className= {styles.loginOptionsContainer}>
      <div className= {styles.imageArea}>
        <img src={FormImg} alt="Log in Image"  className= {styles.loginImage} />
      </div>
      <div className= {styles.formContainer}>
        <h2>Login</h2>
        <h4>Please enter the information below to give your child an edge.</h4>
        <p className= {styles.formTitle}>Please select an appropriate category</p>
        <div className = {styles.options}>
          <button to = "/signup/student" className= {`${styles.loginOption} ${pathLink == "student" ? styles.active : ""}`} onClick = {goToStudent}>
            <img src= {ProfileIcon} alt=""/>
            <p> Login as a student</p>
          </button>
          <button to = "/signup" type="submit" className= {`${styles.loginOption} ${pathLink == "tutor" ? styles.active : ""}`} onClick = {goToTutor}>
            <img src= {ProfileIcon} alt=""/>
            <p> Login as a tutor</p>
          </button>
          <NavLink to = {pathLink == "none" ? "/login" : pathLink == "student" ? "/login/student" : "/admin/login" } className= {`${styles.continue} ${pathLink == "none" ? styles.disabled : ""}`}>
            <p>Continue</p>
            <img src= {ArrowRight} alt=""/>
          </NavLink>
        </div>
        <p className= {styles.login}>Already have an account? <NavLink to = "/signup">Sign up</NavLink> </p>
      </div>
        
    </div>
    
  )
}

export default LoginOptions
