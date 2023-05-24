import React from 'react';
import './parentLogin.module.css'
import loginImage from '../../assets/images/cuate.png';


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
    <div className="main-container">
      <div className="image-area">
        <img src={loginImage} alt="Log in Image"  className='login-image' />
      </div>
      <div className="form-area">
        <div className="form-container">
          <h2>Welcome</h2>
          <h4>Please enter your information below to resume your beautiful learning experience.</h4>
          <form onSubmit={handleLogin}>
            <div>
              <input type="text" id="email" placeholder='Email/Username' required/>
            </div>
            <div>
              <input type="password" id="password" placeholder='Password' required/>
            </div>
            <button type="submit">Sign In</button>
          </form>
          <div className="line"></div>
          <h3>OR</h3>
          <div>
            <button onClick={handleGoogleLogin} className="google-btn">
              Sign In with Google
            </button>
            <button onClick={handleFacebookLogin} className="facebook-btn">
              Sign In with Facebook
            </button>
          </div>
          <p className="sign-up">Don’t have an account? <a>Sign up</a> </p>
        </div>
      </div>  
    </div>
  );
}

export default ParentLogin;

