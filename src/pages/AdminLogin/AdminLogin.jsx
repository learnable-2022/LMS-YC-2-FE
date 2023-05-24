import styles from "./adminLogin.module.css";
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
                <h1>Admin Login</h1>
                <p>Please enter your credentials below to access 
                    the Learning Management System (LMS) administration panel 
                    and unlock a world of educational possibilities.
                </p>
            </div>
            
        
            <div className={styles.inputContainer}>

                <div className={styles.inputPage}>
                    
                    <form>
                        <h1>Login</h1>
                        <label className={styles.LabelItem}>
                            Email address
                        </label>
                        <Input type= "email" placeholder= "peter@gmail.com" />

                        <br />

                        <label className={styles.LabelItem}>
                            Password
                        </label>
                        <Input type = "password" placeholder = "************" />
                        
                        <p>Forget your password?</p>

                        <Button type = "submit" value = "Log in" />


                    </form>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default AdminLogin
