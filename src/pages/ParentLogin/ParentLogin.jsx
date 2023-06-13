import React, { useState } from "react";
import styles from "./parentLogin.module.css";
import { Logo, FormImg, Eyeslash, FormProfileIcon } from "../../assets";
import { NavLink } from "react-router-dom";

function ParentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    const response = fetch("https://learnz.onrender.com/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic c2FtdWVsOmNoaWR1YmVt",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    console.log(data);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <img src={Logo} alt="" />
      </nav>
      <div className={styles.formArea}>
        <div className={styles.imageArea}>
          <img src={FormImg} alt="Log in Image" />
        </div>
        <div className={styles.formContainer}>
          <h2>Welcome</h2>
          <h4>
            Please enter your information below to resume your beautiful
            learning experience.
          </h4>
          <form className={styles.form} onSubmit={signIn}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email/Username"
                required
              />
              <img src={FormProfileIcon} alt="" />
            </div>
            <div className={styles.inputGroup}>
              <input
                type={passwordVisibility ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <img
                src={Eyeslash}
                alt=""
                onClick={(e) => setPasswordVisibility(!passwordVisibility)}
                id={styles.passwordVisible}
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
          <div className={styles.line}></div>
          <h3 className={styles.h3}>OR</h3>
          <div>
            <button className={styles.googleBtn}>Sign In with Google</button>
            <button className={styles.facebookBtn}>
              Sign In with Facebook
            </button>
          </div>
          <p className={styles.signUp}>
            Don't have an account? <NavLink to="/signup">Sign up</NavLink>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ParentLogin;
