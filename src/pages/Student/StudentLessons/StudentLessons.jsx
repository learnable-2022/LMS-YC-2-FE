import StudentStats from "../../../components/StudentStats/StudentStats";
import UserDashboardNav from "../../../components/UserDashboardNav/UserDashboardNav";
import Courses from "./Courses";
import styles from "./studentLessons.module.css"
import Card from "../../../components/Card/Card"
import  {useState, useEffect, useContext}from "react"
import { NavLink, useParams } from "react-router-dom";
import AppContext from "../../../context/Appcontext";


function StudentLessons() {

    const { courseIndex, setCourseIndex} = useContext(AppContext)
    let [path, setPath] = useState("")
    

    return(
        <div className = {styles.container}>
           <UserDashboardNav navTitle = "Lessons"/> 

           <div className= {styles.body}>
            <div className={styles.studentStats}>
                    <StudentStats />
                </div>

                <div className= {styles.studentCoursesContainer}>
                    <h2>Choose a course to learn</h2>


                    <div className= {styles.studentCourses}>
                        {Courses.map((course, index) => (
                            <Card bgColor = "white" key = {index}>
                                <div className= {styles.courseImg}>
                                    <img src= {course.img} alt=""/>
                                </div>
                                <h3>{course.title}</h3>
                                <p>{course.desc}</p>

                                <NavLink to = {`enroll/${course.courseName}`} onClick = {() => setCourseIndex(index)}>Select Course</NavLink>
                            </Card>
                        ))}  
                    </div>
                    
                </div>
           </div>
        
            
           
        </div>
    )
}

export default StudentLessons
