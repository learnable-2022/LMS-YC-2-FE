import React from 'react';
import styles from './adminOverview.module.css';
import {  BsThreeDotsVertical } from "react-icons/bs";
import { ImFilesEmpty } from "react-icons/im";
import AdminDashboardNav from '../../../components/AdminDashboardNav/AdminDashboardNav';

function AdminOverview() {
  return (
    <div className = {styles.mainbar}>
      <AdminDashboardNav navTitle = "Admin Dashboard" />
      <div className= {styles.mainbody}>
        <div className= {styles.mainnewlesson}>
          Create new Lesson
        </div>
        <div className= {styles.mainoverview}>
          <div className= {styles.over}>
          Overview
          </div>
          <div className= {styles.mainlesson}>
            <div className= {styles.lesson1}>
              <div className= {styles.totallesson}>
              <div className= {styles.totlesson}>
              Total lessons created
              </div>
              <i><BsThreeDotsVertical/></i>
              </div>
              <div className= {styles.num28}>
                0
              </div>
            </div>
            <div className= {styles.lesson2}>
              <div className= {styles.lessonprogress}>
              <div className= {styles.lesspro}>
              Lessons in-progress
              </div>
              <i><BsThreeDotsVertical/></i>
              </div>
              <div className= {styles.num28i}>
                0
              </div>
            </div>
            <div className= {styles.lesson3}>
              <div className= {styles.totalnum}>
              <div className= {styles.totnum}>
              Total Number of Students
              </div>
              <i><BsThreeDotsVertical/></i>
              </div>
              <div className= {styles.num400}>
                0
              </div>
            </div>
          </div>
          <div className= {styles.lessonoverview}>
            <div className= {styles.see}>
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
              <i className={styles.empty1}><ImFilesEmpty/></i>
              <h5 className={styles.emptytxt}>No data yet</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOverview