import { useContext, useEffect } from 'react'
import AppContext from '../../context/Appcontext'
import styles from './studentProfile.module.css'



function StudentProfile() {
    const {studentInfo} = useContext(AppContext)

    const childDOB = new Date(studentInfo.user[0].DOB)

    useEffect(() =>{
        console.log(studentInfo)
    })
    return (
        <div>
            <h2>Student Profile</h2>

            <p>Student Name : {studentInfo.user[0].child_name}</p>
            <p>Gender : {studentInfo.user[0].child_name}</p>
            <p>Email : {studentInfo.user[0].child_name}</p>
            <p>Student DOB : {childDOB.getFullYear()}</p>
            <p>Parent Name : {studentInfo.user[0].parent_name}</p>
            <p>Parent Relations : {studentInfo.user[0].relationship}</p>
            <p>Student Name : {studentInfo.user[0].child_name}</p>
            <p>Student Name : {studentInfo.user[0].child_name}</p>
            <p>Student Name : {studentInfo.user[0].child_name}</p>
            <p>Student Name : {studentInfo.user[0].child_name}</p>
            <p>Student Name : {studentInfo.user[0].child_name}</p>
        </div>
    )
}

export default StudentProfile
