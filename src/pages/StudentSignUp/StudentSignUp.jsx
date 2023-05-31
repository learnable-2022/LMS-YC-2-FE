import  React, {useContext, useState } from 'react';
import styles from './studentsignup.module.css'
import {Logo, FormImg, ArrowRight} from '../../assets';
import { NavLink, useNavigate } from 'react-router-dom';
import AppContext from "../../context/Appcontext"


function StudentSignUp() {
  const [parentName, setParentName] = useState("")
  const [parentEmail, setParentEmail] = useState("")
  const [parentRelationship, setParentRelationship] = useState("")
  const { studentData} = useContext(AppContext)
  const navigate = useNavigate() 
  const submitParentInfo = (e) => {
    e.preventDefault();

    studentData.parentName = parentName
    studentData.parentEmail = parentEmail
    studentData.parentRelationship = parentRelationship;

    console.log(studentData)
    navigate("/signup/student_2")

  }
    return (
        <div className= {styles.mainBody}>
        <div className= {styles.mainContainer}>
          <div className= {styles.imageArea}>
            <img src={Logo} alt="Logo Image" className= {styles.logoImage} />
            <img src={FormImg} alt="Log in Image"  className= {styles.loginImage} />
          </div>
          <div className= {styles.formArea}>
            <div className= {styles.formContainer}>
              <h2 className = {styles.h2}>Sign up</h2>
              <h4 className = {styles.h4}>Please enter the information below to give your child an edge.</h4>
              <p className= {styles.formTitle}>Parents Information</p>
              <form className = {styles.form} onSubmit = {submitParentInfo}>
                <div>
                  <label>Name</label>
                  <input type = "text" value = {parentName} id="name" placeholder='Full name'  onChange = {(e) => setParentName(e.target.value)} required/>
                </div>
                <div>
                  <label>Email address</label>  
                  <input value = "email" value =  {parentEmail} id="email" placeholder='Ifunanya123@gmail.com' onChange = {(e) => setParentEmail(e.target.value)} required/>
                </div>
                <div>
                  <label>Relationship</label>  
                  <input type = "text"  value = {parentRelationship} id="relationship" placeholder='Mother'  onChange = {(e) => setParentRelationship(e.target.value)} required/>
                </div>
                <button type = "submit" className= {styles.continue} >
                  <p>Continue</p>
                  <img src= {ArrowRight} alt=""/>
                </button>
                
              </form>
              
            <div>
                
            <NavLink to = "/signup" className= {styles.previous}>
              Previous
            </NavLink>
              </div>
            </div>
          </div>  
        </div>
      </div>
    )
}

export default StudentSignUp
