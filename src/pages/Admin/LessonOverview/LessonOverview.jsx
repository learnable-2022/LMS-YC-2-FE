import React, { useContext, useEffect, useState } from 'react';
import styles from './lessonOverview.module.css';
import AdminDashboardNav from '../../../components/AdminDashboardNav/AdminDashboardNav';
import { NavLink, useLocation } from 'react-router-dom';
import AppContext from '../../../context/Appcontext';
import { CourseLoader } from "../../../assets"
import ThumbnailGenerator from './VideoThumbnail';
import {AiFillDelete} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"

function LessonOverview() {
  const [allCourses, setAllCourses] = useState()
  const [myCourses, setMyCourses] = useState()
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const {adminToken, adminInfo } = useContext(AppContext)
  const [courses, setCourses] = useState(allCourses)
  const [selectedCourses, setSelectedCourses] = ("")
  
  // console.log(location)

  const getAllCourses = () => {
    setLoading(true)
    const response = fetch('https://learnz.onrender.com/api/v1/admin/courses', {
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${adminToken}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.courses)
      setLoading(false)
      // data.success ? setAllCourses(data.courses.filter((course, index) => course.track.toLowerCase() == path.toLowerCase() && course.week == week)) : ""
      data.success? setAllCourses(data.courses) : ""
      data.success ? setMyCourses(data.courses.filter((course, index) => course.admin._id == adminInfo._id )) : ""
    })
    .catch((err) => {
      setLoading(false)
      console.log(err)
    })

  };
  const courseDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this course")){
      const response = fetch(`https://learnz.onrender.com/api/v1/admin/courses/${id}`, {
      method: "DELETE",  
      headers : {
        "Authorization" : `Bearer ${adminToken}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.success){
        window.alert(data.message)
      }
    })
    }
    
  }
  useEffect(() => {
    getAllCourses()
   }, [courseDelete])
   useEffect(() => {
     setCourses(allCourses)
   }, [allCourses])

   const handleAllCourses = () => {
    setCourses(allCourses);
  };

  const handleMyCourses = () => {
    setCourses(myCourses);
  };

  


  console.log(allCourses, myCourses)
  
  return (
    <div className = {styles.mainbar}>
      <AdminDashboardNav navTitle = "Lessons" />
      <div className= {styles.mainbody}>
        <NavLink to = "/admin/dashboard/createLesson" className= {styles.mainnewlesson}>
          Create new Lesson
        </NavLink>

        <div className= {styles.allCourses}>
          <div className= {styles.courseSelect}>
            <button onClick = {handleAllCourses} className = {`${courses == allCourses ? styles.active : ""}`}>All Lessons</button>
            <button onClick = {handleMyCourses} className = {`${courses == myCourses ? styles.active : ""}`}>My Lessons</button>
          </div>
          
          {loading ? (
            <div className = {styles.coursesLoading}>
              <img src= {CourseLoader} alt=""/>
            </div>
          ): (
            <div className = {styles.coursesCont}>
              {courses !== null && courses !== undefined ? courses.map((course, index)  => (
                <div className ={styles.course} key ={index}>
                  <div className= {styles.thumbNailImg}>
                    <ThumbnailGenerator videoUrl = {course.url} />
                  </div>
                  <div className= {styles.courseInfo}>
                    <p id= {styles.courseTitle}>{course.title}</p>
                    <div className={styles.icons}>
                      <div className= {styles.admin}>
                        <BsFillPersonFill />
                        <p>{course.admin.email}</p>
                      </div>
                      {course.admin._id == adminInfo._id ? (
                        <div className= {styles.deleteCourse} onClick = {() => courseDelete(course._id)}>
                          <AiFillDelete />
                        </div> ) : ""}
                    </div>
                    
                  </div>
                  
                </div>
                )) : (
                  <div>No course</div>
                )}
            </div>
            
          )}
        </div>
        
      </div>
    </div>
  )
}

export default LessonOverview
