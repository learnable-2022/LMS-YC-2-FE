import styles from "./forgotPasswordAdmin.module.css";
import {Logo, AdminForm} from "../../assets";


function ForgotPasswordAdmin() {
  return (
    <div className={styles.container}>
        <div className={styles.adminNav}>

            <div className= {styles.logo}>
                <img src={Logo} alt="Logo Image" className= {styles.logoImage} />
            </div>

            <div className= {styles.nav}>
                <ul>
                    <li className={styles.active}>Home</li>
                    <li>Website</li>
                    <li>Blog</li>
                </ul>
            </div>
           
        </div>




        <div className={styles.main}>

            <div className={styles.textBox}>
                <h1>Forgot Password?</h1>
                <p>Enter your username or email address and we'll 
                    email you instructions on how to reset your password.
                </p>
            </div>
            
        
            <div className={styles.inputContainer}>
                <div className = {styles.formBlur}></div>
                <div className={styles.inputPage}>
                    
                    <form className = {styles.form}>
                        <h1>Reset Password</h1>

                        <div>
                            <label className={styles.LabelItem}>
                                Email address
                            </label>
                            <br />
                            <input type= "email" placeholder= "peter@gmail.com" required/>
                        </div>

                        <button type="submit">Send</button>

                        <p> <span>Log in</span> with your credentials</p>

                    </form>
                </div>
                <img src= {AdminForm} alt=""/>

            </div>

        </div>
        <div className = {styles.bgBlur}></div>
        
    </div>
  )
}

export default ForgotPasswordAdmin
