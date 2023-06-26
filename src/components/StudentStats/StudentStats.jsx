import { useContext, useEffect, useState } from "react"
import AppContext from "../../context/Appcontext"
import Card from "../Card/Card"
import styles from "./studentStats.module.css"
import quizQuestions from "../../pages/Student/StudentAssignments/Quiz"

function StudentStats() {
  const { progress, totalVideos, studentInfo } = useContext(AppContext)
  const progressPercentage = (progress / totalVideos) * 100
  const [quizPercentage, setQuizPercentage] = useState(0)

  const getQuizPercentage = () => {
    if (studentInfo.quizTaken) {
      quizQuestions.map((quiz, index) => {
        setQuizPercentage((studentInfo.quiz / quiz.questions.length) * 100)
      })
    }
  }

  useEffect(() => {
    getQuizPercentage()
  }, [studentInfo.quizTaken])

  return (
    <div className={styles.studentStatsContainer}>
      <div className={styles.studentStats}>
        <Card bgColor="#FEEDCF">
          <p>Your progress</p>

          <h2>{isNaN(progressPercentage) ? 0 + "%" : progressPercentage.toFixed(0) + "%"}</h2>
        </Card>

        <Card bgColor="#FEEDCF">
          <p>Badges Earned</p>

          <h2>0</h2>
        </Card>

        <Card bgColor="#FEEDCF">
          <p>Total Quiz Score</p>

          <h2>{quizPercentage ? quizPercentage + "%" : 0 + "%"}</h2>
        </Card>
      </div>
    </div>

  )
}

export default StudentStats
