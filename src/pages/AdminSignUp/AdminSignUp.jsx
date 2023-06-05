import { NavLink, useNavigate } from "react-router-dom"
import styles from "./adminSignUp.module.css"
import {AdminForm, Loader} from "../../assets";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/Appcontext";

function AdminSignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [signUpError, setSignUpError] = useState("")
    const navigate = useNavigate()
    const {adminData} = useContext(AppContext)
    const [message, setMessage] = useState()

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

    const adminSignUp = (e) => {
        e.preventDefault();
        setLoading(true)
        
        adminData.email = email;
        adminData.password = password

        const response = fetch("https://learnz.onrender.com/api/v1/admin/register", {
            method : "POST",
            body : JSON.stringify(adminData),
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : "Basic c2FtdWVsOmNoaWR1YmVt",
            }
            })
            .then(response => response.json())
            .then (data => {
                setLoading(false)
                setData(data)
                data.success == true ? navigate("/admin/login") : ""
            })
            .catch(err => {
                setSignUpError(err)
                setLoading(false)
            })

    }

    const checkData = () => {
        if(data !== null && data !== undefined){
            if(data.success !== null && data.success !== undefined){
                if(!data.success){
                    setMessage(data?.message)
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
        console.log(data)
        checkData()
    }, [data])
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
                    <form className = {styles.form} onSubmit = {adminSignUp} >
                        <h1>Sign Up</h1>
                        <p className = {styles.dataMessage}>{message}</p>

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
                            <p><span className = {styles.dont}>Have an account?</span> <NavLink to = "/admin/login">Sign in</NavLink> </p>
                            <p>Forgot password?</p>
                        </div>

                        

                        <button type = "submit" className = {`${styles.signUpBtn} ${btnDisabled ? styles.disabled : "" }`} disabled = {btnDisabled}>
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

export default AdminSignUp
