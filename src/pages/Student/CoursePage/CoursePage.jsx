import { useContext, useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router"
import UserDashboardNav from "../../../components/UserDashboardNav/UserDashboardNav"
import AppContext from "../../../context/Appcontext"
import CourseDesc from "./CourseDesc"
import styles from "./coursePage.module.css"
import { CourseLoader } from "../../../assets"
import { NavLink, useNavigate, useParams } from "react-router-dom"

function CoursePage({match}) {

    const {path, week} = useParams()
    const {studentToken, totalVideos, setTotalVideos, progress, setProgress, studentInfo, watchedVideos, setWatchedVideos} = useContext(AppContext)
    const [currentCourses, setCurrentCourses] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleEnded = (index) => {
        if ((watchedVideos !== null && watchedVideos !== undefined) && !watchedVideos.includes(`${index}${studentInfo._id}`)) {
            const updatedWatchedVideo = [...watchedVideos, `${index}${studentInfo._id}`];
            const updatedProgress = Number(progress) + 1
            setWatchedVideos(updatedWatchedVideo);
            setProgress(updatedProgress);
        }
    };

    const checkPath = () => {
        if(path.toLowerCase() !== studentInfo.track.toLowerCase()){
            navigate("*")
        }
    }

    useEffect(() => {
        checkPath()
    }, [path])
    

    const updateProfile = () => {
        const updatedData = {
            watchedVideos: watchedVideos,
            progress: progress.toString()
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
            window.localStorage.setItem("student-status", JSON.stringify(data.updated.filter((student, id) => student._id == studentInfo._id)[0]))
            // setLoading(false)
            return data;
            
        })
        .catch((err) => {
            console.log(err)
            // setLoading(false)
        })
    }

    useEffect(() => {
        updateProfile()
    }, [progress, watchedVideos])

    console.log(watchedVideos, progress, totalVideos)

    const getCourses = () => {
        setLoading(true)
        const response = fetch('https://learnz.onrender.com/api/v1/user/courses', {
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${studentToken}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.courses)
            setLoading(false)
            data.success ? setCurrentCourses(data.courses.filter((course, index) => course.track.toLowerCase() == path.toLowerCase() && course.week == week)) : ""
            
        })
        .catch((err) => {
            setLoading(false)
        })

    }

    useEffect(() => {
        getCourses()
        // getTotalVideos()
       
    }, [path, week])
    return (
        <div className = {styles.container}>
            <UserDashboardNav navTitle = "Course" />
            <div>

            </div>

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
            

            {!loading && currentCourses !== undefined && currentCourses !== null && currentCourses.length !== 0  ? (
                <p id = {styles.start}>Start Lesson: </p>
            ) : "" }
            
            {!loading ? currentCourses !== undefined && currentCourses !== null && currentCourses.length !== 0 ? (
                <div className = {styles.lessons}>
                    {currentCourses.map((course, index) => (
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
                    ))}

                    { week == 4 ? <NavLink to = "/student/dashboard/quiz" className = {styles.takeQuiz}>Take Quiz</NavLink> : ""}
                </div>
                
                
            ): (
                <div className={styles.noCourses}>
                    <div>
                        <p>No Lesson yet for this week</p>
                        { week == 4 ? <NavLink to = "/student/dashboard/quiz" className = {styles.takeQuiz}>Take Quiz</NavLink> : ""}
                    </div>
                    
                </div>
            ) : (
                <div className= {styles.courseLoader}>
                    <img src= {CourseLoader} alt=""/>
                </div>
            )}
           
           
            {/* {!loading && week == 4 ? (
                <NavLink to = "/student/dashboard/quiz" className = {styles.takeQuiz}>Take Quiz</NavLink>
            ) : ""} */}
        </div>
    )
}

export default CoursePage
