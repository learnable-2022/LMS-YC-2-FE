import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import UserDashboardNav from "../../../components/UserDashboardNav/UserDashboardNav"
import AppContext from "../../../context/Appcontext"
import CourseDesc from "./CourseDesc"
import styles from "./coursePage.module.css"

function CoursePage({match}) {

    const {path, week} = useParams()
    const {studentToken, totalVideos, setTotalVideos, progress, setProgress, studentInfo, watchedVideos, setWatchedVideos} = useContext(AppContext)
    const [currentCourses, setCurrentCourses] = useState()
    const [loading, setLoading] = useState(false)
    const handleEnded = (index) => {
        if (!watchedVideos.includes(index)) {
            const updatedWatchedVideo = [...watchedVideos, index];
            setWatchedVideos(updatedWatchedVideo);
            setProgress((progress + 1));
        }
    };
    

    const updateProfile = () => {
        const updatedData = {
            watchedVideos: watchedVideos,
            progess: `${progress}`
        }

        const response = fetch(`https://learnz.onrender.com/api/v1/user/${studentInfo._id}`, {
            method : "PATCH",
            body: JSON.stringify(updatedData),
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${studentToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            // data.success ? window.localStorage.setItem("student-status", JSON.stringify(data.user[data.user.length - 1])) : "";
            data.success ? window.localStorage.setItem("student-status", JSON.stringify(data.updated[0])) : ""
            console.log(data.updated[0])
            setLoading(false)
            return data;
            
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }

    useEffect(() => {
        updateProfile()
    }, [progress, watchedVideos])

    

    const getCourses = () => {
        const response = fetch('https://learnz.onrender.com/api/v1/user/courses', {
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${studentToken}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.courses)
            data.success ? setCurrentCourses(data.courses.filter((course, index) => course.track.toLowerCase() == path.toLowerCase() && course.week == week)) : ""
            
        })

    }

    useEffect(() => {
        getCourses()
        // getTotalVideos()
       
    }, [path, week])
    return (
        <div className = {styles.container}>
            <UserDashboardNav navTitle = "Course" />

            <div className= {styles.courseHead}>
                {CourseDesc.map((course, index) => (
                    course.path.toLowerCase() == path.toLowerCase() ? (
                        <div key = {index}>
                        <div className= {styles.courseImg}>
                                <img src= {course.img} alt=""/>  
                            </div> 
                            <h2 id = {styles.courseTitle}>{course.title}</h2>

                            <div className= {styles.courseDesc}>
                                <h3>Course Description:</h3>
                                <p>{course.desc}</p>
                            </div>
                        </div>
                    ) : ""
                ))}
            </div>
            

            {currentCourses !== undefined && currentCourses !== null && currentCourses.length !== 0  ? (
                <p id = {styles.start}>Start Lesson: </p>
            ) : "" }
            { currentCourses !== undefined && currentCourses !== null && currentCourses.length !== 0 ? (
                currentCourses.map((course, index) => (
                    <div className = {styles.courseContents} key = {index}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>

                        <div className= {styles.courseVideo}>
                            <video 
                                controls 
                                onEnded = {() => handleEnded(course._id)}
                            >
                                <source src = {`${course.url}`} type = "video/mp4" /> 
                            </video>
                        </div>
                

                    </div>
                ))
                
            ): (
                <div className={styles.noCourses}>
                    <p>No Lesson yet for this week</p>
                </div>
            )}
           
           


            
        </div>
    )
}

export default CoursePage
