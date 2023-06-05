import {CalendarIcon} from "../../assets"
import styles from "./lessonsApply.module.css"
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Courses from "../StudentLessons/Courses";

function LessonsApply() {

    const [enrollCourse, setEnrollCourse] = useState({})

    const { courseName } = useParams()

    useEffect(() => {
        Courses.filter((course, id) => {
            if(course.courseName == courseName){
                setEnrollCourse(course)
            }

            // console.log(enrollCourse)
        })
        // console.log(courseName)
    }, [])

    console.log(enrollCourse)
    return (
        <div className = {styles.container}>
            <h2>{enrollCourse.title}</h2>
            <p>{enrollCourse.desc}</p>

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
                <button>Apply Now</button>
                <p>***Note: You will only qualify for a certificate after making payment for the certificate and completing all 4 weeks of the internship</p>
            </div>

        </div>
    )
}

export default LessonsApply
