import StudentStats from "../../../components/StudentStats/StudentStats";
import UserDashboardNav from "../../../components/UserDashboardNav/UserDashboardNav";
import Courses from "./Courses";
import styles from "./studentLessons.module.css"
import Card from "../../../components/Card/Card"
import  {useState, useEffect, useContext}from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AppContext from "../../../context/Appcontext";
import LessonsApply from "../LessonsApply/LessonsApply";
import {CalendarIcon} from "../../../assets"


function StudentLessons() {

    const { courseIndex, setCourseIndex, studentInfo} = useContext(AppContext)
    let [path, setPath] = useState("")

    const [studentCourse, setStudentCourse] = useState(Courses.filter((course, index) => studentInfo.track.toLowerCase() == course.path.toLowerCase()))

    return(
        <div className = {styles.container}>
           <UserDashboardNav navTitle = "Lessons"/>

            {studentInfo.track.trim() == "NULL" ? (
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

                                    <NavLink to = {course.btnText == "Coming Soon" ? "/student/dashboard/lessons" : `enroll/${course.courseName}`} onClick = {() => setCourseIndex(index)} disabled = {course.btnText === "Coming Soon" ? true : false}>
                                        {course.btnText}
                                    </NavLink>
                                </Card>
                            ))}  
                        </div>
                    </div>   
                
                </div>
            ) : (
                <div className= {styles.main}>
                    <h2>{studentCourse[0].path}</h2>
                    <p>{studentCourse[0].desc}</p>

                    <div className= {styles.courseDuration}>
                        <img src= {CalendarIcon} alt=""/>
                        <p>Duration: <span id= {styles.duration}>4 weeks</span></p>
                    </div>
                    <div className= {styles.courseStart}>
                        <img src= {CalendarIcon} alt=""/>
                        <p>Start date: <span id= {styles.start}>26 June, 2023</span></p>
                    </div>
                    <div className= {styles.tuition}>
                        <p>Tuition: <span id= {styles.fee}>N5000</span> <span id= {styles.free}>Now Free</span></p>
                    </div>
                
                    <div className= {styles.stepsContainer}>
                        <h2>How the Learning path works</h2>
                        <div className= {styles.courseSteps}>
                            <div className= {styles.step}>
                                <p>Step One:</p>
                                <p>Registration</p>
                            </div>
                            <div className= {styles.step}>
                                <p>Step Two:</p>
                                <p>Select a Course</p>
                            </div>
                            <div className= {styles.step}>
                                <p>Step Three:</p>
                                <p>Begin your learning path</p>
                            </div>
                            <div className= {styles.step}>
                                <p>Step Four:</p>
                                <p>Complete all Lessons and tasks </p>
                            </div>
                        </div>
                    </div>
                
                <div className= {styles.apply}>
                    <NavLink to = {`/student/course/${studentCourse[0].path}/${studentCourse[0].week}`} type = "button">Continue Learning</NavLink>
                    <p>***Note: You will only qualify for a certificate after making payment for the certificate and completing all 4 weeks of the internship</p>
                </div>

            </div>
                // </div>    


            )}

           
           
        
            
           
        </div>
    )
}

export default StudentLessons
