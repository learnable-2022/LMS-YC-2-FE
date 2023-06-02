import styles from "./adminLogin.module.css";
import {AdminForm} from "../../assets";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import { NavLink } from "react-router-dom";


function AdminLogin() {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.textBox}>
                <h1>Admin Login</h1>
                <p>Please enter your credentials below to access 
                    the Learning Management System (LMS) administration panel 
                    and unlock a world of educational possibilities.
                </p>
            </div>
            
            <div className={styles.inputContainer}>
                <div className = {styles.formBlur}></div>
                <form className = {styles.form}>
                    <h1>Login</h1>

                    <div className = {styles.inputGroup}>
                        <label className={styles.LabelItem}>
                            Company Email Address
                        </label>
                        <br />
                        <input type= "email" placeholder= "peter@gmail.com" required/>
                    </div>

                    <div className = {styles.inputGroup}>
                        <label className={styles.LabelItem}>
                            Password
                        </label>
                        <br />
                        <input type= "password" placeholder= "************" required/>
                    </div>

                    <div className = {styles.formExtras}>
                        <p><span className = {styles.dont}>Don't have an account?</span> <NavLink to = "signup">Sign up</NavLink> </p>
                        <p>Forgot password?</p>
                    </div>

                    

                    <button type="submit">Log In</button>

                </form>
                
                <img src= {AdminForm} alt=""/>

            </div>

        </div>
        <div className = {styles.bgBlur}></div>
        
    </div>
  )
}

export default AdminLogin
