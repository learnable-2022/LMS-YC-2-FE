import React from 'react';
import styles from './parentLogin.module.css'
import loginImage from '../../assets/images/cuate.png';
import logoImage from '../../assets/images/signInLogo.png';

function ParentLogin() {
//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Login logic here
//   };

//   const handleGoogleLogin = () => {
//     // Google login logic here
//   };

//   const handleFacebookLogin = () => {
//     // Facebook login logic here
//   };

  return (
    <div className= {styles.mainBody}>
      {/* <img src={logoImage} alt="Logo Image" lassName= {styles.logoImage} /> */}
      <div className= {styles.mainContainer}>
        <div className= {styles.imageArea}>
        <img src={logoImage} alt="Logo Image" lassName= {styles.logoImage} />
          <img src={loginImage} alt="Log in Image"  className= {styles.loginImage} />
        </div>
        <div className= {styles.formArea}>
          <div className= {styles.formContainer}>
            <h2>Welcome</h2>
            <h4>Please enter your information below to resume your beautiful learning experience.</h4>
            <form>
              <div>
                <input type="text" id="email" placeholder='Email/Username' required/>
              </div>
              <div>
                <input type="password" id="password" placeholder='Password' required/>
              </div>
              <button type="submit">Sign In</button>
            </form>
            <div className= {styles.line}></div>
            <h3>OR</h3>
            <div>
              <button className= {styles.googleBtn}>
                Sign In with Google
              </button>
              <button className= {styles.facebookBtn}>
                Sign In with Facebook
              </button>
            </div>
            <p className= {styles.signUp}>Don't have an account? <a>Sign up</a> </p>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default ParentLogin;

