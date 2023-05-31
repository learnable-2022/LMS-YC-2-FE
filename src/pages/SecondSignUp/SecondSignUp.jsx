import React from 'react';
import styles from './secondsignup.module.css'
import {Logo, FormImg} from '../../assets';
import { NavLink } from 'react-router-dom';


function SignUp() {
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
              <form className = {styles.form}>
              <div>
                <label>Child's name</label>
                <input type="text" id="name" placeholder='Full name' required/>
              </div>
                <div>
                  <label>Date of birth</label>  
                  <input type="date" id="email" placeholder='12 April 2012' required/>
                </div>
                <div>
                <label>Class</label>  
                  <input type="text" id="relationship" placeholder='Grade 6' required/>
                </div>
                <div>
                  <label>Password</label>  
                  <input type="password" id="password" placeholder='Password' required/>
              </div>
              <p className= {styles.passwordInfo}>Password must contain at least 6 letters, an uppercase and a special character</p>
              </form>
              <div>
                <NavLink to = "/student/dashboard" className= {styles.done}>
                  <p>Done</p>
                </NavLink>
              </div>
            </div>
          </div>  
        </div>
      </div>
    )
}

export default SignUp
