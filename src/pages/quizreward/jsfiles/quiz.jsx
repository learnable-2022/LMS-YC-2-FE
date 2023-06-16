import React from 'react';
import styles from '../styles/quiz.module.css';
import Pic from '../img/quiz.png';
import { BsXLg } from "react-icons/bs";

function Quiz() {
  return (
    <div className={styles.quizreward}>
      <div className={styles.reward}>
        <img src={Pic} alt=""/>
        <button className={styles.rewardicon} type="exit"><i><BsXLg/></i></button>
        <h5 className={styles.rewardl1}>GREAT WORK</h5>
        <h2  className={styles.rewardl2}>Your score: 80%</h2>
        <p className={styles.rewardl3}>Level 1 completed</p>
        <p className={styles.rewardl4}>You just unlocked the novice badge!</p>
        <div className={styles.rewardbtn}>
            <button className={styles.rewardbtn1}>Play a game</button>
            <button className={styles.rewardbtn2}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Quiz
