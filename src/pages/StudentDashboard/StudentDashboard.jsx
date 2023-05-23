import styles from "./studentDashboard.module.css"
import { Logo, ProfileImg, Dashboard, Quiz, Resources, Assignments, Messages, Timetable, 
    Settings, FAQ, Support } from "../../assets"
import { useState } from "react";
import StudentSidebar from "../../components/StudentSideBar/StudentSidebar";

function StudentDashboard() {
    
    return (
        <div className = {styles.container}>
            <div className="dashboard">
                <div className= {styles.searchBg}>
                    
                </div>
            </div>
            
        </div>
    )
}

export default StudentDashboard
