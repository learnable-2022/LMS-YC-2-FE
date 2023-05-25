import React from 'react';
import styles from './signupoptions.module.css'
import {Logo, FormImg} from '../../assets';


function SignUpOptions() {
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
              <button type="submit" className= {styles.signupoptionone}>
                  Sign up as a student
                </button>
                <button type="submit" className= {styles.signupoptiontwo}>
                  Sign up as a tutor
                </button>
                <button type="submit" className= {styles.done}>
                  done
                </button>
              </div>
            <p className= {styles.login}>Already have an account? <a>Log in</a> </p>
            </div>
          </div>  
        </div>
      </div>
    )
}

export default SignUpOptions
