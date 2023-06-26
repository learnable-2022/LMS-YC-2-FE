import React, { useContext, useEffect } from 'react';
import styles from './adminOverview.module.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImFilesEmpty } from "react-icons/im";
import AdminDashboardNav from '../../../components/AdminDashboardNav/AdminDashboardNav';
import AppContext from '../../../context/Appcontext';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function AdminOverview() {
  const { adminToken, adminInfo } = useContext(AppContext)
  const [users, setUsers] = useState(0)
  const [myCourses, setMyCourses] = useState(0)

  const getAllStudents = () => {
    const response = fetch("https://learnz.onrender.com/api/v1/user", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${adminToken}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        data.success ? setUsers(data.data.length) : ""
        console.log(data)
      })
  }

  const getAllCourses = () => {
    const response = fetch('https://learnz.onrender.com/api/v1/admin/courses', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${adminToken}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.courses)
        data.success ? setMyCourses(data.courses.filter((course, index) => course.admin._id == adminInfo._id).length) : ""
      })
      .catch((err) => {
        console.log(err)
      })

  };

  useEffect(() => {
    getAllStudents()
    getAllCourses()
  }, [])
  return (
    <div className={styles.mainbar}>
      <AdminDashboardNav navTitle="Admin Dashboard" />
      <div className={styles.mainbody}>
        <NavLink to="/admin/dashboard/createLesson" className={styles.mainnewlesson}>
          Create new Lesson
        </NavLink>
        <div className={styles.mainoverview}>
          <div className={styles.over}>
            Overview
          </div>
          <div className={styles.mainlesson}>
            <div className={styles.lesson1}>
              <div className={styles.totallesson}>
                <div className={styles.totlesson}>
                  Total lessons created
                </div>
                <i><BsThreeDotsVertical /></i>
              </div>
              <div className={styles.num28}>
                {myCourses}
              </div>
            </div>
            <div className={styles.lesson2}>
              <div className={styles.lessonprogress}>
                <div className={styles.lesspro}>
                  Lessons in-progress
                </div>
                <i><BsThreeDotsVertical /></i>
              </div>
              <div className={styles.num28i}>
                0
              </div>
            </div>
            <div className={styles.lesson3}>
              <div className={styles.totalnum}>
                <div className={styles.totnum}>
                  Total Number of Students
                </div>
                <i><BsThreeDotsVertical /></i>
              </div>
              <div className={styles.num400}>
                {users}
              </div>
            </div>
          </div>
          <div className={styles.lessonoverview}>
            <div className={styles.see}>
              <div>Lesson Overview</div>
              <div>See all</div>
            </div>
            <div>
              <table>
                <tr>
                  <th>Lessons</th>
                  <th>Number of Students</th>
                  <th>Instructor</th>
                  <th>Completion Date</th>
                  <th>Option</th>
                </tr>
              </table>
            </div>
            <div className={styles.empty}>
              <i className={styles.empty1}><ImFilesEmpty /></i>
              <h5 className={styles.emptytxt}>No data yet</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOverview