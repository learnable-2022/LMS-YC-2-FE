import { useContext, useEffect } from 'react'
import UserDashboardNav from '../../../components/UserDashboardNav/UserDashboardNav'
import AppContext from '../../../context/Appcontext'
import styles from './studentProfile.module.css'



function StudentProfile() {
    const {studentInfo} = useContext(AppContext)

    const childDOB = new Date(studentInfo.DOB)

    useEffect(() =>{
        console.log(studentInfo)
    })
    return (
        <div className = {styles.container}>
            <UserDashboardNav navTitle = "Profile"/>
    
            <div className= {styles.body}>
                <p>Student Name : {studentInfo.child_name}</p>
                <p>Gender : {studentInfo.gender}</p>
                <p>Email : {studentInfo.email}</p>
                <p>Student DOB : {studentInfo.DOB}</p>
                <p>Parent Name : {studentInfo.parent_name}</p>
                <p>Parent Relations : {studentInfo.relationship}</p>
                <p>Path : {studentInfo.path == null || studentInfo.path == undefined || studentInfo.path == "NULL " ? "" : studentInfo.path}</p>
            </div>
            
        </div>
    )
}

export default StudentProfile
