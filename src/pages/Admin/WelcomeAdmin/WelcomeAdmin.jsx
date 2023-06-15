import styles from "./welcomeAdmin.module.css"
import { Lessons, GreaterThan, Analytics, AdminWelcome } from "../../../assets"
import { NavLink } from "react-router-dom"

function WelcomeAdmin() {
    return (
        <div className = {styles.container}>
            <h2>Welcome, Admin</h2>
            <p>Here's what you can do today</p>

            <div className= {styles.adminOptions}>
                <NavLink to = "/admin/dashboard/createLesson" className= {styles.createLessons}>
                    <div className= {styles.optionIcon} >
                        <img src= {Lessons} alt=""/>
                    </div>
                    <div className= {styles.optionFlex}>
                        <p>Jump right in and create Lessons</p>
                        <img src= {GreaterThan} alt="" id = {styles.next}/> 
                    </div>
                </NavLink>

                <NavLink to = "/admin/dashboard" className= {styles.studentsAnalytics}>
                    <div className= {styles.optionIcon} >
                        <img src= {Analytics} alt=""/>
                    </div>
                    
                    <div className= {styles.optionFlex}>
                        <p>View Student statistics and activities</p>
                        <img src= {GreaterThan} alt="" id = {styles.next}/>
                    </div>
                    
                </NavLink>
            </div>

            <div className = {styles.bgBlur}></div>
            <img src= {AdminWelcome} alt=""/>
        </div>
    )
}

export default WelcomeAdmin
