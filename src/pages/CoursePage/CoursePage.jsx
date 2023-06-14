import UserDashboardNav from "../../components/UserDashboardNav/UserDashboardNav"
import styles from "./coursePage.module.css"

function CoursePage() {
    return (
        <div className = {styles.container}>
            <UserDashboardNav navTitle = "Course" />


            <div className= {styles.courseContents}>
                <h2>Introducing user experience design</h2> 
                <p>User experience (UX) designers focus on the experience that users have while using products like websites, apps, and physical objects. 
                UX designers make those everyday interactions useful, enjoyable, and accessible. In the first part of this course, you'll be introduced to the world of UX and the factors that contribute to great user experience design. 
                You'll understand the job of a UX designer and teams that UX designers often work withUser experience (UX) designers focus on the experience that users have while using products like websites, apps, and physical objects. 
                UX designers make those everyday interactions useful, enjoyable, and accessible. In the first part of this course, you'll be introduced to the world of UX and the factors that contribute to great user xperience design. 
                You'll understand the job of a UX designer and teams that UX designers often work with
                </p>

                <p>Start the course</p>

                <div className= {styles.courseVideo}>
                    <video width= "500" height = "200" controls >
                        <source src = "" type = "video/*" /> 
                    </video>
                </div>
               

            </div>
           
           


            
        </div>
    )
}

export default CoursePage
