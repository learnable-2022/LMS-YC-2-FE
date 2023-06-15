import styles from "./studentAssignments.module.css"
import UserDashboardNav from "../../../components/UserDashboardNav/UserDashboardNav";
import { WelcomeGirl, DashboardEllipse, View} from "../../../assets"
import Card from "../../../components/Card/Card"

function StudentAssignments() {
    return (
        <div>
            <UserDashboardNav  navTitle = "Assignments"/>
            <div className = {styles.assignmentCont}>
                <div className={styles.heroPart}>
                    <div className={styles.welcomeUserContainer}>
                        <div className={styles.welcomeUser}>
                            <div className={styles.welcomeUserContents}>
                                <h2>{`Welcome`}</h2>
                                <p>
                                You have all the resources you need for learning right here
                                with you! Make sure to always do your assignments and read
                                your courses. have fun!
                                </p>
                            </div>
                            <img src={WelcomeGirl} alt="" />
                        </div>
                        <img src={DashboardEllipse} alt="" />
                    </div>

                    <div className= {styles.topStudents}>
                        <Card bgColor = "white">
                            <h3>Top Students</h3>
                        </Card>
                    </div> 
          
                </div>
            </div>

            <div className= {styles.assignmentsContent}>
                <img src= {View} alt=""/>
                <p>No assignments yet. Complete Course and get assignments to course</p>
            </div>

        </div>
    )
}

export default StudentAssignments
