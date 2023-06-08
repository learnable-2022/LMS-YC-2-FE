import React from 'react';
import styles from '../styles/mainbar.module.css';
import { BsSearch, BsChevronLeft, BsPlusLg, BsThreeDotsVertical, BsFillDisplayFill } from "react-icons/bs";
import { FaPen, FaEye, FaCheckCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pic from '../img/Place1.png';
function Mainbar() {
  return (
    <div className = {styles.mainbar}>
      <div className = {styles.mainheader}>
        <div className={styles.mainheadercnt}>
          <div className= {styles.admind}>
          Create New Lesson
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
        <div className={styles.back}>
          <div className={styles.back1}>
          <i><BsChevronLeft/></i>
          </div>
          <div className={styles.back2}>
          Back
          </div>
        </div>
        <div className={styles.letter1}>
          <div className={styles.letter1a}>
          <img src={Pic} alt=""/>
          </div>
          <div className={styles.letter1b}>
           <div className={styles.letter1bi}>
           What is Product Design
           <i><FaPen/></i>
           </div>
           <div className={styles.letter1bii}>
            This is a module on reactivity, please read through the lessons and answer the quiz
            <i><FaPen/></i>
           </div>
          </div>
          
        </div>
        <div className={styles.letter2}>
          <div className={styles.letter2a}>
            Add
          </div > 
          <div className={styles.letter2b}>
            Rearrange
          </div>
          <div className={styles.letter2c}>
            Gamification
          </div>
        </div>
        <div className={styles.letter3}>
          Lessons
        </div>
        <div className={styles.letter4}>
          <tr className={styles.row1}>
              <div className={styles.row1a}>
                Lesson1
                <div>
                  What is product design?
                </div>
              </div>
              <div className={styles.row1b}>
                <div className={styles.row1b1}>
                  <div className={styles.row1b1a}>
                  <i><FaPen/></i>
                  </div>
                  <div className={styles.row1b1b}>
                  Edit
                  </div>
                </div>
                <div className={styles.row1b2}>
                  <div className={styles.row1b2a}>
                  <i><FaEye/></i>
                  </div>
                  <div className={styles.row1b2b}>
                  View
                  </div>
                </div>
                <div className={styles.row1b3}>
                  <div className={styles.row1b3a}>
                  <i><RiDeleteBin6Line/></i>
                  </div>
                  <div className={styles.row1b3b}>
                  Delete
                  </div>
                </div>
              </div>
          </tr>
          <tr className={styles.row2}>
            <div className={styles.row2a}>
              <i><FaCheckCircle/></i>
            </div>
            <div className={styles.row2b}>
              <div className={styles.row2b1}>
                <div className={styles.row2b1a}>
                  <i><BsFillDisplayFill/></i>
                </div>
                <div className={styles.row2b1b}>
                  01 - Welcome!
                </div>
              </div>
              <div className={styles.row2b2}>
                {'{3:36}'}
              </div>
            </div>
          </tr>
          <tr className={styles.row3}>
            <div className={styles.row3a}>
              <i><FaCheckCircle/></i>
            </div>
            <div className={styles.row3b}>
              <div className={styles.row3b1}>
                <div className={styles.row3b1a}>
                  <i><BsFillDisplayFill/></i>
                </div>
                <div className={styles.row3b1b}>
                  01 - Welcome!
                </div>
              </div>
              <div className={styles.row3b2}>
                {'{3:36}'}
              </div>
            </div>
          </tr>
          <tr className={styles.row4}>
            <div className={styles.row4a}>
              <i><FaCheckCircle/></i>
            </div>
            <div className={styles.row4b}>
              <div className={styles.row4b1}>
                <div className={styles.row4b1a}>
                  <i><BsFillDisplayFill/></i>
                </div>
                <div className={styles.row4b1b}>
                  01 - Welcome!
                </div>
              </div>
              <div className={styles.row4b2}>
                {'{3:36}'}
              </div>
            </div>
          </tr>
        </div>
        <div className={styles.save}>
          <div className={styles.save1}>
            <i><BsPlusLg/></i>
          </div>
          <div className={styles.save2}>
            Add Lesson
          </div>
        </div>
        <div className={styles.set}>
          Set Questions
        </div>
        <div className={styles.set1}>
          Save and continue later
        </div>
        <div className={styles.set2}>
          Publish
        </div>
        </div>
       <div className={styles.phone}>
        <div className={styles.phone1}>
          <div className={styles.phone1a}>
          <div>
            Lesson
          </div>
          <div>
            <i><BsThreeDotsVertical/></i>
          </div>
          </div>
          <div className={styles.phone1b}>
            0
          </div>
        </div>
        <div className={styles.phone2}>
        <div className={styles.phone2a}>
          <div>
            Students
          </div>
          <div>
            <i><BsThreeDotsVertical/></i>
          </div>
          </div>
          <div className={styles.phone2b}>
            0
          </div>
        </div>
        <div className={styles.phone3}>
        <div className={styles.phone3a}>
          <div>
            Files
          </div>
          <div>
            <i><BsThreeDotsVertical/></i>
          </div>
          </div>
          <div className={styles.phone3b}>
            0
          </div>
        </div>
        <div className={styles.phone4}>
        <div className={styles.phone4a}>
            Reports
          </div>
          <div className={styles.phone4b}>
            <i><BsThreeDotsVertical/></i>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Mainbar