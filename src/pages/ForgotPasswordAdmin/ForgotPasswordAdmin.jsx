import styles from "./forgotPasswordAdmin.module.css";
import { Logo } from "../../assets";
import Input from "../../components/Input/Input";
import  Button  from "../../components/Button/Button";


function AdminLogin() {
  return (
    <div className={styles.container}>

        <div className={styles.adminNav}>

            <div className= {styles.logo}>
                <img src= {Logo} alt=""/>
                <h3>Learn.Z</h3>

                <ul className={styles.nav}>
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

                <div className={styles.inputPage}>
                    
                    <form>
                        <h1>Reset Password</h1>
                        <label className={styles.LabelItem}>
                            Email address
                        </label>
                        <Input type= "email" placeholder= "peter@gmail.com" />

                        <Button type = "submit" value = "Send" />

                        <p> <span>Log in</span> with your credentials</p>

                    </form>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default AdminLogin
