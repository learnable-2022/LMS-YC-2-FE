import React from 'react';
import styles from './adminOverview.module.css';
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";

function AdminOverview() {
  return (
    <div className = {styles.mainbar}>
      <div className = {styles.mainheader}>
        <div className={styles.mainheadercnt}>
          <div className= {styles.admind}>
          Admin Dashboard
          </div>
          <div className= {styles.search}>
        <input type="text" placeholder='Search'/>
        <i><BsSearch/></i>
        </div>
        <div className= {styles.S}>
          <div className= {styles.sbox}>
          <input type="text" placeholder='S'/>
          </div>
          <div className={styles.stev}>
            <span className={styles.steph}>Stephen O.</span> <br/>
            <span className={styles.adminis}>Administrator</span>
          </div>
        </div>
        </div>
      </div>
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
                28
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
                28
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
                400
              </div>
            </div>
          </div>
          <div className= {styles.mainlesson1}>
            <div className= {styles.lesson4}>
            <div className= {styles.lessoncom}>
              <div className= {styles.lessoncompleted}>
                Lessons Completed
              </div>
              <i><BsThreeDotsVertical/></i>
            </div>
            <div className= {styles.num28green}>
              28
            </div>
            </div>
            <div className= {styles.lesson5}>
              <div className= {styles.not}>
                <div className= {styles.not2}>Not Started</div>
                <i><BsThreeDotsVertical/></i>
              </div>
              <div className= {styles.num8}>
                8
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
                <tr>
                  <td>Product Design</td>
                  <td>19</td>
                  <td>Miss Favour</td>
                  <td>-----</td>
                  <td className= {styles.tb1}>
                    <div className= {styles.tb1s1}>
                      <i><BiPencil/></i>
                      Edit
                    </div>
                    <div className= {styles.tb1s2}>
                      <i><IoStatsChart/></i>
                      Report
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Frontend</td>
                  <td>11</td>
                  <td>Mr Yuki</td>
                  <td>-----</td>
                  <td className= {styles.tb2}>
                    <span className= {styles.tb2s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className= {styles.tb2s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Data Analysis</td>
                  <td>45</td>
                  <td>Mr Steven</td>
                  <td>-----</td>
                  <td className= {styles.tb3}>
                    <span className= {styles.tb3s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className= {styles.tb3s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Computer Application</td>
                  <td>4</td>
                  <td>Mr Josh</td>
                  <td>-----</td>
                  <td className= {styles.tb4}>
                    <span className= {styles.tb4s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className= {styles.tb4s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Systems Hardware</td>
                  <td>2</td>
                  <td>Miss Anna</td>
                  <td>-----</td>
                  <td className= {styles.tb5}>
                    <span className={styles.tb5s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb5s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Logic</td>
                  <td>2</td>
                  <td>Mrs Buhari</td>
                  <td>-----</td>
                  <td className= {styles.tb6}>
                    <span className= {styles.tb6s1}>
                    <i><BiPencil/></i>
                      Edit
                    </span>
                    <span className={styles.tb6s2}>
                    <i><IoStatsChart/></i>
                      Report
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.page}>
            <div className={styles.page1}>
              1
            </div>
            <div className={styles.page2}>
              2
            </div>
            <div className={styles.page3}>
              3
            </div>
            <div className={styles.page4}>4</div>
            <div className={styles.page5}>
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOverview