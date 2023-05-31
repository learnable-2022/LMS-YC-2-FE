import React from 'react';
import styles from './signup.module.css'
import {Logo, FormImg} from '../../assets';


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
              <p className= {styles.formTitle}>Parents Information</p>
              <form className = {styles.form}>
              <div>
                <label>Name</label>
                <input type="text" id="name" placeholder='Full name' required/>
              </div>
                <div>
                  <label>Email address</label>  
                  <input type="text" id="email" placeholder='Ifunanya123@gmail.com' required/>
                </div>
                <div>
                <label>Relationship</label>  
                  <input type="text" id="relationship" placeholder='Mother' required/>
                </div>
              </form>
              <div>
                <button type="submit" className= {styles.continue}>
                  Continue
                </button>
                <button className= {styles.previous}>
                  Previous
                </button>
              </div>
            </div>
          </div>  
        </div>
      </div>
    )
}

export default SignUp
