import { useContext } from "react"
import AppContext from "../../context/Appcontext"
import Card from "../Card/Card"
import styles from "./studentStats.module.css"

function StudentStats() {
  const {progress, totalVideos, scorePerentage} = useContext(AppContext)
  const progressPercentage = (progress / totalVideos) * 100
    return (
      <div className= {styles.studentStatsContainer}>
        <div className= {styles.studentStats}>
          <Card bgColor = "#FEEDCF">
            <p>Your progress</p>

            <h2>{isNaN(progressPercentage) ? 0 + "%" : progressPercentage.toFixed(0) + "%"}</h2>
          </Card>

          <Card bgColor = "#FEEDCF">
            <p>Badges Earned</p>

            <h2>0</h2>    
          </Card>

          <Card bgColor = "#FEEDCF">
            <p>Total Quiz Score</p>

            <h2>{scorePerentage ? scorePerentage : 0 + "%"}</h2>
          </Card>
        </div>
      </div>
        
    )
}

export default StudentStats
