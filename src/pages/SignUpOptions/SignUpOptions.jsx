import React, { useState } from 'react';
import styles from './signupoptions.module.css'
import {Logo, FormImg, ProfileIcon, ArrowRight} from '../../assets';
import { NavLink } from 'react-router-dom';


function SignUpOptions() {

  const [pathLink, setPathLink] = useState("none")

  const goToStudent = () => {
    setPathLink("student")
  }

  const goToTutor = () => {
    setPathLink("tutor")
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
            <p className= {styles.formTitle}>Please select an appropriate category</p>
            <div>
            <button to = "/signup/student" className= {`${styles.signupOption} ${pathLink == "student" ? styles.active : ""}`} onClick = {goToStudent}>
              <img src= {ProfileIcon} alt=""/>
              <p> Sign up as a student</p>
            </button>
            <button to = "/signup" type="submit" className= {`${styles.signupOption} ${pathLink == "tutor" ? styles.active : ""}`} onClick = {goToTutor}>
              <img src= {ProfileIcon} alt=""/>
              <p> Sign up as a tutor</p>
            </button>
            <NavLink to = {pathLink == "none" ? "/signup" : pathLink == "student" ? "/signup/student" : "/signup" } className= {`${styles.continue} ${pathLink == "none" ? styles.disabled : ""}`}>
              <p>Continue</p>
              <img src= {ArrowRight} alt=""/>
            </NavLink>
            </div>
          <p className= {styles.login}>Already have an account? <NavLink to = "/login">Log in</NavLink> </p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default SignUpOptions
