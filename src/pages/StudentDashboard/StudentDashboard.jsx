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
  const { studentInfo} = useContext(AppContext)
  const [fullName, setFullName] = useState(studentInfo.child_name)
  const [firstName, setFirstName] = useState("")
 
   const getFirstName = () => {
    if(fullName !== undefined && fullName !== null){
      const words = fullName.split(" ")

    if(words.length >= 2){
      setFirstName(words.shift())

      const lastName = words.join()
    }else{
      setFirstName(fullName)
    }

    }
      

  }
  console.log(document.cookie)

  useEffect(() => {
    getFirstName()
    // console.log(document.cookie)
  }, [])

  

 

  return (
    <div className={styles.container}>
      <UserDashboardNav navTitle = "Home"/>
      <div className={styles.dashboard}>
        <div className={styles.majorDashboardPart}>
          <div className={styles.welcomeUserContainer}>
            <div className={styles.welcomeUser}>
              <div className={styles.welcomeUserContents}>
                <h2>{`Welcome ${firstName}`}</h2>
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
