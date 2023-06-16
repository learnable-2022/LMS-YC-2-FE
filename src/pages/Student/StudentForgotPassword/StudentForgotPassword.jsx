import styles from "./studentForgotPassword.module.css"
import {Logo, FormImg, Eyeslash, FormProfileIcon, Loader} from '../../../assets';
import { NavLink, useNavigate } from 'react-router-dom';
import AppContext from '../../../context/Appcontext';
import { useEffect, useState } from "react";

function StudentForgotPassword() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState()
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const recoverPassword = (e) => {
        e.preventDefault();
        setLoading(true)

        const data = {
            email: email,
            password : password
        }

        const response = fetch("https://learnz.onrender.com/api/v1/user/recover", {
            method : "PATCH",
            body : JSON.stringify(data),
            headers : {
                "Content-Type" : "application/json",
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
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
                        navigate("/login/student")
                    }, 2000) 
                }
            }
        }
      }
      
    
    useEffect(() => {
      checkData()
    }, [data])
    return (
        <div className= {styles.container}>
            <div className= {styles.formArea}>
                <div className= {styles.imageArea}>
                <img src={FormImg} alt="Log in Image"/>
                </div>
                <div className= {styles.formContainer}>
                <h2>Forgot Password</h2>
                <form className = {styles.form} onSubmit = {recoverPassword}>
                    <p className = {`${styles.dataMessage} ${data !== null && data !== undefined && data.success ? styles.success : styles.error}`} >{message}</p>
                    <div className = {styles.inputGroup}>
                    <input type="email" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder='Email/Username' required/>
                    <img src= {FormProfileIcon} alt=""/>
                    </div>
                    <div className = {`${styles.inputGroup} ${styles.password}`} >
                    <input type= {passwordVisibility ? "text" : "password"} value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder='New Password' required/>
                    <img src= {Eyeslash} alt="" onClick = {(e) => setPasswordVisibility(!passwordVisibility)} id = {styles.passwordVisible}/>
                    </div>
                    <button type = "submit" >
                    {loading && <img src = {Loader}/>}
                    {!loading && "Recover Password"}
                    </button>
                </form>
                    <p className= {styles.signUp}>Don't have an account? <NavLink to = "/signup">Sign up</NavLink> </p>
                </div>
            </div>  
        </div>
    )
}

export default StudentForgotPassword
