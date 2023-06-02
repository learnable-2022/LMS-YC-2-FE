import { NavLink } from "react-router-dom"
import styles from "./adminSignUp.module.css"
import {AdminForm} from "../../assets";
import { useState } from "react";

function AdminSignUp() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const adminSignUp = (e) => {
        e.preventDefault();
        

    }
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.textBox}>
                    <h1>Admin Signup</h1>
                    <p>Please enter your credentials below to access 
                        the Learning Management System (LMS) administration panel 
                        and unlock a world of educational possibilities.
                    </p>
                </div>
                
                <div className={styles.inputContainer}>
                    <div className = {styles.formBlur}></div>
                    <form className = {styles.form} onSubmit = {AdminSignUp} >
                        <h1>Sign Up</h1>

                        <div className = {styles.inputGroup}>
                            <label className={styles.LabelItem}>
                                Company Email Address
                            </label>
                            <br />
                            <input type= "email" placeholder= "peter@gmail.com" value= {email} onChange = {(e) => setEmail(e.target.value)} required/>
                        </div>

                        <div className = {styles.inputGroup}>
                            <label className={styles.LabelItem}>
                                Password
                            </label>
                            <br />
                            <input type= "password" placeholder= "************"  value = {password} onChange = {(e) => setPassword(e.target.value)} required/>
                        </div>

                        <div className = {styles.formExtras}>
                            <p><span className = {styles.dont}>Have an account?</span> <NavLink to = "/admin">Sign in</NavLink> </p>
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

export default AdminSignUp
