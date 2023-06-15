import styles from "./adminLogin.module.css";
import {AdminForm, Loader} from "../../../assets"
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import AppContext from "../../../context/Appcontext";


function AdminLogin() {
    const [loading, setLoading] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const {setAdminInfo, setAdminToken, setAdminLoggedIn} = useContext(AppContext)

    const checkBtnDisabled = () => {
        if(email == "" || password == ""){
            setBtnDisabled(true)
        }else{
            setBtnDisabled(false)
        }
    }

    useEffect(() => {
        checkBtnDisabled()
    }, [email, password])

    const adminLogin = (e) => {
        e.preventDefault()
        setLoading(true)

        const loginData = {
            email : email,
            password: password
        }
    
        const response = fetch("https://learnz.onrender.com/api/v1/admin/login", {
            method : "POST",
            body : JSON.stringify(loginData),
            headers : {
                "Content-Type" : "application/json",
            }
        })
        .then(response => response.json())
        .then (data => {
            setLoading(false)
            setData(data)
            data.success ? navigate("/admin/welcome") : ""
            data.success ?  window.localStorage.setItem("admin-status", JSON.stringify(data.user)) : ""
            data.success ? window.localStorage.setItem("admin-token", JSON.stringify(data.token)) : ""
            data.success ? window.localStorage.setItem("admin-loggedIn", true) : window.localStorage.setItem("admin-loggedIn", false);
            data.success ? setAdminInfo(JSON.parse(window.localStorage.getItem("admin-status"))) : ""
            data.success ? setAdminToken(JSON.parse(window.localStorage.getItem("admin-token"))) : ""
            data.success ? setAdminLoggedIn(JSON.parse(window.localStorage.getItem("admin-loggedIn"))) : ""
            // console.log(data.user)
        })
        .catch((err) => {
        console.log(err)
        setLoading(false)
        })
      
    }

    const checkData = () => {
        if(data !== null && data !== undefined){
            if(data.success !== null && data.success !== undefined){
                if(!data.success){
                    setMessage("Invalid Credentials")
                    setTimeout(() =>{
                        setMessage("")
                    }, 2000)
                }else{
                    setMessage("")
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
                <h1>Admin Login</h1>
                <p>Please enter your credentials below to access 
                    the Learning Management System (LMS) administration panel 
                    and unlock a world of educational possibilities.
                </p>
            </div>
            
            <div className={styles.inputContainer}>
                <div className = {styles.formBlur}></div>
                <form className = {styles.form} onSubmit = {adminLogin}>
                    <h1>Login</h1>

                    <p className = {styles.dataMessage}>{message}</p>

                    <div className = {styles.inputGroup}>
                        <label className={styles.LabelItem}>
                            Company Email Address
                        </label>
                        <br />
                        <input type= "email" placeholder= "peter@gmail.com" value= {email} onChange = {(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className = {styles.inputGroup}>
                        <label className={styles.LabelItem}>
                            Password
                        </label>
                        <br />
                        <input type= "password" placeholder= "************"  value = {password} onChange = {(e) => setPassword(e.target.value)} required/>
                    </div>

                    <div className = {styles.formExtras}>
                        <p><span className = {styles.dont}>Don't have an account?</span> <NavLink to = "/admin/signup">Sign up</NavLink> </p>
                        <p>Forgot password?</p>
                    </div>

                    

                     <button type = "submit" className = {`${styles.loginBtn} ${btnDisabled ? styles.disabled : "" }`} disabled = {btnDisabled}>
                        {loading && <img src = {Loader}/>}
                        {!loading && "Login"}
                    </button>

                </form>
                
                <img src= {AdminForm} alt=""/>

            </div>

        </div>
        <div className = {styles.bgBlur}></div>
        
    </div>
  )
}

export default AdminLogin
