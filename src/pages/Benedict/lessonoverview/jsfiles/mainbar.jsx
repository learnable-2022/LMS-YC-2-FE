import React from 'react';
import styles from '../styles/mainbar.module.css';
import { BsSearch, BsPersonFill } from "react-icons/bs";
import { MdTimer, MdPlayLesson, } from "react-icons/md";
import Pic from '../img/kid1.jfif';
import Pic1 from '../img/kid2.png';
import Pic2 from '../img/kid3.png';
import Pic3 from '../img/kid4.png';
import Pic4 from '../img/kid5.png';
import Pic5 from '../img/kid6.png'
function Mainbar() {
  return (
    <div className = {styles.mainbar}>
      <div className = {styles.mainheader}>
        <div className={styles.mainheadercnt}>
          <div className= {styles.admind}>
          Lessons
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
          Lesson overview
          </div>
          <div className= {styles.mainlesson}>
            <div className= {styles.lesson1}>
              <div className= {styles.totallesson}>
              <img src={Pic} alt=""/>
              <div className= {styles.totlesson}>
                Principles of Design
              </div>
              </div>
              <div className= {styles.num28}>
              <div className={styles.stevnum28}>
                  <i>< BsPersonFill/></i>
                  <span>Steven</span>
                </div>
                <div className= {styles.num2812}>
                  <i><MdPlayLesson/></i>
                  <span>12+ Lessons</span>
                </div>
                <div className={styles.num283}>
                  <i><MdTimer/></i>
                  <span>3 hours</span>
                </div>
              </div>
            </div>
            <div className= {styles.lesson2}>
              <div className= {styles.lessonprogress}>
              <img src={Pic1} alt=""/>
              <div className= {styles.lesspro}>
              Frontend Basics
              </div>
              </div>
              <div className= {styles.num28i}>
                <div className={styles.stevnum28i}>
                  <i>< BsPersonFill/></i>
                  <span>Steven</span>
                </div>
                <div className= {styles.num28i12}>
                  <i><MdPlayLesson/></i>
                  <span>12+ Lessons</span>
                </div>
                <div className={styles.num28i3}>
                  <i><MdTimer/></i>
                  <span>3 hours</span>
                </div>
              </div>
            </div>
            <div className= {styles.lesson3}>
              <div className= {styles.totalnum}>
              <img src={Pic2} alt=""/>
              <div className= {styles.totnum}>
              What is Programming
              </div>
              </div>
              <div className= {styles.num400}>
              <div className={styles.stevnum400}>
                  <i>< BsPersonFill/></i>
                  <span>Steven</span>
                </div>
                <div className= {styles.num40012}>
                  <i><MdPlayLesson/></i>
                  <span>12+ Lessons</span>
                </div>
                <div className={styles.num4003}>
                  <i><MdTimer/></i>
                  <span>3 hours</span>
                </div>
              </div>
            </div>
          </div>
          <div className= {styles.mainlesson1}>
            <div className= {styles.lesson4}>
            <div className= {styles.lessoncom}>
            <img src={Pic3} alt=""/>
              <div className= {styles.lessoncompleted}>
                Basic Coding Tips
              </div>
            </div>
            <div className= {styles.num28green}>
            <div className={styles.stevnum28green}>
                  <i>< BsPersonFill/></i>
                  <span>Steven</span>
                </div>
                <div className= {styles.num28green12}>
                  <i><MdPlayLesson/></i>
                  <span>12+ Lessons</span>
                </div>
                <div className={styles.num28green3}>
                  <i><MdTimer/></i>
                  <span>3 hours</span>
                </div>
            </div>
            </div>
            <div className= {styles.lesson6}>
            <div className= {styles.lessoncom1}>
            <img src={Pic4} alt=""/>
              <div className= {styles.lessoncompleted1}>
                Let's Play a Game...
              </div>
            </div>
            <div className= {styles.num28green1}>
            <div className={styles.stevnum28green1}>
                  <i>< BsPersonFill/></i>
                  <span>Steven</span>
                </div>
                <div className= {styles.num28green112}>
                  <i><MdPlayLesson/></i>
                  <span>12+ Lessons</span>
                </div>
                <div className={styles.num28green13}>
                  <i><MdTimer/></i>
                  <span>3 hours</span>
                </div>
            </div>
            </div>
            <div className= {styles.lesson5}>
              <div className= {styles.not}>
              <img src={Pic5} alt=""/>
                <div className= {styles.not2}>Player 1 vs Player 2</div>
              </div>
              <div className= {styles.num8}>
              <div className={styles.stevnum8}>
                  <i>< BsPersonFill/></i>
                  <span>Steven</span>
                </div>
                <div className= {styles.num812}>
                  <i><MdPlayLesson/></i>
                  <span>12+ Lessons</span>
                </div>
                <div className={styles.num83}>
                  <i><MdTimer/></i>
                  <span>3 hours</span>
                </div>
              </div>
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

export default Mainbar