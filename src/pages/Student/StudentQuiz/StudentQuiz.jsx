import React from "react";
import Quiz from "./studentQuiz.module.css";
const StudentQuiz = () => {
  return (
    <div className={Quiz.cont}>
      <div className={Quiz.long}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={Quiz.wrap}>
        <div className={Quiz.sec1}>
          <h1>UI/UX Design</h1>
          <p>Mr. Drew Teachston</p>
          <div className={Quiz.video}>
            <iframe
              src="https://www.youtube.com/embed/vrU6YJle6Q4"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default StudentQuiz;
