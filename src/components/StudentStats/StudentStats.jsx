import Card from "../Card/Card"
import styles from "./studentStats.module.css"

function StudentStats() {
    return (
        <div className= {styles.studentStats}>
          <Card bgColor = "#FEEDCF">
            <p>Your progress</p>

            <h2>0</h2>
          </Card>

          <Card bgColor = "#FEEDCF">
            <p>Badges Earned</p>

            <h2>0</h2>    
          </Card>

          <Card bgColor = "#FEEDCF">
            <p>Total Quiz Score</p>

            <h2>0</h2>
          </Card>
        </div>
    )
}

export default StudentStats
