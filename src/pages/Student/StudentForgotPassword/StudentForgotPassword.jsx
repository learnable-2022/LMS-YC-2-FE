import styles from "./studentForgotPassword.module.css"
import {Logo, FormImg, Eyeslash, FormProfileIcon, Loader} from '../../../assets';
import { NavLink, useNavigate } from 'react-router-dom';
import AppContext from '../../../context/Appcontext';
import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

function StudentForgotPassword() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [data, setData] = useState()
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(false)
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^$*])[a-zA-Z0-9!@#$%^&*]{8,}$/
    const navigate = useNavigate()

    const checkPassword = (e) => {
        if(passwordRegex.test(password)){
          setPasswordError("")
        }else if(!passwordRegex.test(password) && password !== ""){
          setPasswordError("Password must be a minimum of 8 characters and include at least 1 letter, 1 special character and 1 number")
        }else if(password === ""){
          setPasswordError("")
        }    
      }
      const checkConfirmPassword = (e) => {
        if((password === "" || confirmPassword !== "") && confirmPassword !== password  ) {
          setConfirmPasswordError("Password does not match")
        }else if(password !== "" && confirmPassword !== "" && confirmPassword === password){
          setConfirmPasswordError("")
        }else if((password === "" && confirmPassword === "") ) {
          setConfirmPasswordError("")
        }
      } 

      const updateBtnDisabled = () => {
        if (
          email === "" ||
          password === "" ||
          confirmPassword === "" ||
          (!passwordRegex.test(password) && password !== "") ||
          ((password === "" || confirmPassword !== "") && confirmPassword !== password)
        ) {
          setBtnDisabled(true);
        } else {
          setBtnDisabled(false);
        }
      };

      useEffect(() => {
          checkPassword()
      }, [password])

      useEffect(() => {
          checkConfirmPassword()
      }, [password, confirmPassword])

      useEffect(() => {
          updateBtnDisabled()
      }, [email, password, confirmPassword])

    const recoverPassword = (e) => {
        e.preventDefault();
        setLoading(true)

        const formData = {
            email: email,
            password : password
        }

        const response = fetch("https://learnz.onrender.com/api/v1/user/recover", {
            method : "PATCH",
            body : JSON.stringify(formData),
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

                    <div className = {styles.inputGroup}>
                        <div className= {styles.inputGroupPassword}>
                            <input type= {passwordVisibility ? "text" : "password"} name = "password" placeholder='New Password' value = {password} onChange = {(e) => setPassword(e.target.value)} required/>
                            <img src= {Eyeslash} alt="" onClick = {(e) => setPasswordVisibility(!passwordVisibility)} id = {styles.passwordVisible}/>
                        </div>
                        <p className = {styles.error}>{passwordError}</p>
                    </div>

                    <div className = {styles.inputGroup}>
                        <div className= {styles.inputGroupPassword}>
                            <input type= {confirmPasswordVisibility ? "text" : "password"} name = "confirm password" placeholder='Confirm New Password' value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} required/>
                            <img src= {Eyeslash} alt="" onClick = {(e) => setConfirmPasswordVisibility(!confirmPasswordVisibility)} id = {styles.passwordVisible}/>
                        </div>
                        <p className = {styles.error}>{confirmPasswordError}</p>
                    </div>
                    <button type = "submit" className = {`${styles.done} ${btnDisabled ? styles.disabled : "" }`} disabled = {btnDisabled}>
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
