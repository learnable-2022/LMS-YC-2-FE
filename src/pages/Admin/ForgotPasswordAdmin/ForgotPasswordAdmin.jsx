import styles from "./forgotPasswordAdmin.module.css";
import {Loader, AdminForm} from "../../../assets";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


function ForgotPasswordAdmin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const recoverPassword = (e) => {
        e.preventDefault()
        setLoading(true)
        
        const formData = {
            email : email,
            password: password
    
        }

        const response = fetch("https://learnz.onrender.com/api/v1/admin/recover", {
            method : "PATCH",
            body : JSON.stringify(formData),
            headers : {
                "Content-Type" : "application/json",
            }
        })
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
    }

    const checkData = () => {
        if(data !== null && data !== undefined){
            if(data.success !== null && data.success !== undefined){
                if(!data.success){
                    setMessage(data.message)
                    setTimeout(() =>{
                        setMessage("")
                    }, 2000)
                }else if(data.success){
                    setMessage(data.message)
                    setTimeout(() =>{
                        setMessage("")
                        navigate("/admin/login")
                    }, 2000) 
                }
            }
        }
    }
      
    
    useEffect(() => {
      checkData()
    }, [data])
    
  return (
    <div className={styles.container}>
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
                    
                    <form className = {styles.form} onSubmit = {recoverPassword}>
                        <h1>Reset Password</h1>

                        <p className = {`${styles.dataMessage} ${data !== null && data !== undefined && data.success ? styles.success : styles.error}`} >{message}</p>
                        <div className = {styles.inputGroup}>
                            <label className={styles.LabelItem}>
                                Email address
                            </label>
                            <br />
                            <input type= "email" placeholder= "peter@gmail.com" value= {email} onChange = {(e) => setEmail(e.target.value)} required/>
                        </div>

                        <div className = {styles.inputGroup}>
                            <label className={styles.LabelItem}>
                                New Password
                            </label>
                            <br />
                            <input type= "password" placeholder= "*******" value = {password} onChange = {(e) => setPassword(e.target.value)} required/>
                        </div>


                        <button type = "submit" className = {`${loading ? styles.loadingBtn : ""} `}>
                            {loading && <img src = {Loader}/>}
                            {!loading && "Send"}
                        </button>

                        {/* <p> <span>Log in</span> with your credentials</p> */}

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
