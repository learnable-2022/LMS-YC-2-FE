import {CalendarIcon} from "../../assets"
import styles from "./lessonsApply.module.css"
import { NavLink, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Courses from "../StudentLessons/Courses";
import AppContext from "../../context/Appcontext";
import UserDashboardNav from "../../components/UserDashboardNav/UserDashboardNav";

function LessonsApply() {

    const {studentInfo, studentData} = useContext(AppContext)
    const [enrollCourse, setEnrollCourse] = useState({})
    const [loading, setLoading] = useState(false)

    const { courseName } = useParams()

    useEffect(() => {
        Courses.filter((course, id) => {
            if(course.courseName == courseName){
                setEnrollCourse(course)
            }
        })
        // console.log(courseName)
    }, [])


    const updatePath = (e) => {
        e.preventDefault()
        setLoading(true)

        const updatedData = {
            path: enrollCourse.path,
            course: enrollCourse.course,
            register: true
        }
       
        // const path = enrollCourse.path

        fetch(`https://learnz.onrender.com/api/v1/user/${studentInfo._id}`, {
            method : "PATCH",
            body: JSON.stringify(updatedData),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            data.success ? window.localStorage.setItem("student-status", JSON.stringify(data.user[data.user.length - 1])) : "";
            console.log(data)
            setLoading(false)
            return data;
            
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })

    }

    const getUsers = () => {
        const response = fetch("https://learnz.onrender.com/api/v1/user/64810669bc4275487a26583d3", {
            method : "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    useEffect(() => {
        getUsers()
    }, [])

    // console.log(JSON.parse(window.localStorage.getItem("student-status")))
    // console.log(JSON.parse(window.localStorage.getItem("student-status2")).user[0])
    
    return (
        <div className = {styles.container}>
            <UserDashboardNav navTitle = "Lessons" />

            <div className= {styles.main}>
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
                    <button type = "button" onClick = {updatePath}>
                        {loading && "Registering...."}
                        {!loading && "Apply Now"}
                    </button>
                    <p>***Note: You will only qualify for a certificate after making payment for the certificate and completing all 4 weeks of the internship</p>
                </div>

            </div>
           
        </div>
    )
}

export default LessonsApply
