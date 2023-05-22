import styles from "./studentDashboard.module.css"
import { Logo, ProfileImg } from "../../assets"

function StudentDashboard() {
    return (
        <div className = {styles.container}>
            <div className= {styles.dashboardNav}>
                <div className= {styles.logo}>
                    <img src= {Logo} alt=""/>
                    <h3>Learn.Z</h3>
                </div>
                
                <div className= {styles.lowerContents}>
                    <div className= {styles.info}>
                        <img src= {ProfileImg} alt=""/>
                        <p>Emily Johnson</p>
                    </div>
                </div>
               
                
            </div>
        </div>
    )
}

export default StudentDashboard
