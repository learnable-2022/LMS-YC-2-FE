import  React, {useContext, useEffect, useState } from 'react';
import styles from './studentsignup.module.css'
import {Logo, FormImg, ArrowRight} from '../../assets';
import { NavLink, useNavigate } from 'react-router-dom';
import AppContext from "../../context/Appcontext"


function StudentSignUp() {
  const { studentData} = useContext(AppContext)

  const [parentName, setParentName] = useState("")
  const [parentEmail, setParentEmail] = useState("")
  const [parentRelationship, setParentRelationship] = useState("")
  const [parentNameError, setParentNameError] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const navigate = useNavigate() 

  const checkParentName = (e) => {
    // setParentName(e.target.value)
    if(parentName !== "" && parentName.trim().length < 8 ){
      setParentNameError("Name must be greater than 7 characters")
      setBtnDisabled(true)
    }else {
      setParentNameError(null)
      setBtnDisabled(false)
    }

  }
  const submitParentInfo = (e) => {
    e.preventDefault();

    studentData.parent_name = parentName
    studentData.email = parentEmail
    studentData.relationship = parentRelationship;

    console.log(studentData)
    navigate("/signup/student_2")

  }

  useEffect(() => {
    checkParentName()
  }, [parentName])
    return (
      <div className= {styles.container}>
        <div className= {styles.imageArea}>
          <img src={FormImg} alt="Log in Image" />
        </div>
        <div className= {styles.formContainer}>
          <h2>Sign up</h2>
          <h4>Please enter the information below to give your child an edge.</h4>
          <p className= {styles.formTitle}>Parents Information</p>
          <form className = {styles.form} onSubmit = {submitParentInfo}>
            <div className = {styles.inputGroup}>
              <label>Name</label>
              <input type = "text" value = {parentName} id="name" placeholder='Full name'  onChange = {(e) => setParentName(e.target.value)} required/>
              <p className = {styles.error}>{parentNameError}</p>
            </div>
            <div className = {styles.inputGroup}>
              <label>Email address</label>  
              <input value = "email" value =  {parentEmail} id="email" placeholder='Ifunanya123@gmail.com' onChange = {(e) => setParentEmail(e.target.value)} required/>
            </div>
            <div className = {styles.inputGroup}>
              <label>Relationship</label>  
              <input type = "text"  value = {parentRelationship} id="relationship" placeholder='Mother'  onChange = {(e) => setParentRelationship(e.target.value)} required/>
            </div>
            <button type = "submit" className= {styles.continue} disabled = {btnDisabled}>
              <p>Continue</p>
              <img src= {ArrowRight} alt=""/>
            </button>
          </form>
          <NavLink to = "/signup" className= {styles.previous}>
          Previous
          </NavLink>
        </div>
      </div>
       
    )
}

export default StudentSignUp
