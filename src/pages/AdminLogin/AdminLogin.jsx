import styles from "./adminLogin.module.css";
import {Logo, AdminForm} from "../../assets";


function AdminLogin() {
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
                <h1>Admin Login</h1>
                <p>Please enter your credentials below to access 
                    the Learning Management System (LMS) administration panel 
                    and unlock a world of educational possibilities.
                </p>
            </div>
            
            <div className={styles.inputContainer}>
                <div className = {styles.formBlur}></div>
                <div className={styles.inputPage}>
                    
                    <form className = {styles.form}>
                        <h1>Login</h1>

                        <div>
                            <label className={styles.LabelItem}>
                                Email address
                            </label>
                            <br />
                            <input type= "email" placeholder= "peter@gmail.com" required/>
                        </div>

                        <div>
                            <label className={styles.LabelItem}>
                                Email address
                            </label>
                            <br />
                            <input type= "password" placeholder= "************" required/>
                        </div>

                        <p>Forget your password?</p>

                        <button type="submit">Log In</button>

                    </form>
                </div>
                <img src= {AdminForm} alt=""/>

            </div>

        </div>
        <div className = {styles.bgBlur}></div>
        
    </div>
  )
}

export default AdminLogin
