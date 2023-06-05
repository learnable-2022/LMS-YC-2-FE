import styles from "./studentDashboard.module.css";
import {
  WelcomeGirl,
  DashboardEllipse,
  AlarmIcon,
  BooksIcon,
  FileIcon,
  MedalIcon,
  PersonIcon,
  View
} from "../../assets";
import { useContext, useEffect, useState } from "react";
import StudentSidebar from "../../components/StudentSideBar/StudentSidebar";
import UserDashboardNav from "../../components/UserDashboardNav/UserDashboardNav";
import Card from "../../components/Card/Card";
import AppContext from "../../context/Appcontext";
import StudentStats from "../../components/StudentStats/StudentStats";

function StudentDashboard() {
  const { studentData, studentStatus} = useContext(AppContext)
  const studentInfo = JSON.parse(window.localStorage.getItem("student-status"))

  const getUser = () => {
    const response = fetch("https://learnz.onrender.com/api/v1/user/" + studentInfo.user[0].id, {
      method : "GET",
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : "Basic c2FtdWVsOmNoaWR1YmVt",
      }
    })
    .then(response => response.json())
    .then (data => {
      window.localStorage.setItem("getStudent", JSON.stringify(data))
      data.succes ? setStudentSignedUp(true) : ""
      data.success == true ? navigate("/login") : ""
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    console.log(studentInfo)
    // console.log(JSON.parse(window.localStorage.getItem("student-status")))
    getUser()
    
  })

  return (
    <div className={styles.container}>
      <UserDashboardNav />
      <div className={styles.dashboard}>
        <div className={styles.majorDashboardPart}>
          <div className={styles.welcomeUserContainer}>
            <div className={styles.welcomeUser}>
              <div className={styles.welcomeUserContents}>
                <h2>{`Welcome ${studentInfo.user[0].child_name}`}</h2>
                <p>
                  You have all the resources you need for learning right here
                  with you! Make sure to always do your assignments and read
                  your courses. have fun!
                </p>
              </div>
              <img src={WelcomeGirl} alt="" />
            </div>
            <img src={DashboardEllipse} alt="" />
          </div>

          <div className= {styles.topStudents}>
            <Card bgColor = "white">
              <h3>Top Students</h3>
            </Card>
          </div> 
          
        </div>

        <StudentStats />

        {/* ------------------------------------------------------ACTIVITY----------------------------------------------------------- */}
        <div className= {styles.activity}>
          <h2>Activity</h2>

          <div className= {styles.activityCards}>
            <Card bgColor = "white">
              <h3>This week's schedule</h3>

              <img src= {View} alt=""/>
            </Card>

            <Card bgColor = "white">
              <h3>Quizzes</h3>

              <img src= {View} alt=""/>
            </Card>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default StudentDashboard;
