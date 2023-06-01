import styles from "./studentDashboard.module.css"
import { WelcomeGirl,DashboardEllipse, AlarmIcon, BooksIcon, FileIcon, MedalIcon, PersonIcon  } from "../../assets"
import { useState } from "react";
import StudentSidebar from "../../components/StudentSideBar/StudentSidebar";
import UserDashboardNav from "../../components/UserDashboardNav/UserDashboardNav";
import Card from "../../components/Card/Card";

function StudentDashboard() {
    
    return (
        <div className = {styles.container}>
            <UserDashboardNav />
            <div className= {styles.dashboard}>
                <div className= {styles.majorDashboardPart}>
                    <div className= {styles.welcomeUserContainer}>
                        <div className= {styles.welcomeUser}>
                            <div className= {styles.welcomeUserContents}>
                                <h2>Welcome Emily</h2>
                                <p>You have all the resources you need for learning right here with you! Make sure to always do your assignments and read your courses. have fun!</p>
                            </div>
                            <img src= {WelcomeGirl} alt=""/>
                        </div>
                        <img src= {DashboardEllipse} alt=""/>
                    </div>
                    <div className= {styles.reports}>
                        <div className= {styles.report}>
                            <img src={AlarmIcon} alt="" style = {{background: "linear-gradient(135deg, #FEB692 0%, #EA5455 100%)"}} id = {styles.reportImg}/>
                            <div className={styles.reportText}>
                                <h4>85%</h4>
                                <p>Quiz</p>
                            </div>
                        </div>
                        <div className= {styles.report}>
                            <img src={FileIcon} alt="" style = {{background: "linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)"}} id = {styles.reportImg}/>
                            <div className={styles.reportText}>
                                <h4>85%</h4>
                                <p>Tasks & Exams</p>
                            </div>
                        </div>
                        <div className= {styles.report}>
                            <img src={PersonIcon} alt="" style = {{background: "linear-gradient(135deg, #52E5E7 0%, #130CB7 100%)"}} id = {styles.reportImg} />
                            <div className={styles.reportText}>
                                <h4>85%</h4>
                                <p>Attendance</p>
                            </div>
                        </div>
                        <div className= {styles.report}>
                            <img src={BooksIcon} alt="" style = {{background: "linear-gradient(180deg, #9E00FF 0%, rgba(69, 0, 112, 0.87) 100%)"}} id = {styles.reportImg}/>
                            <div className={styles.reportText}>
                                <h4>85%</h4>
                                <p>Courses</p>
                            </div>
                        </div>
                        <div className= {styles.report}>
                            <img src={MedalIcon} alt="" style = {{background: "linear-gradient(180deg, #888300 0%, rgba(255, 247, 64, 0.86) 100%)"}} id = {styles.reportImg}/>
                            <div className={styles.reportText}>
                                <h4>85%</h4>
                                <p>Badges Earned</p>
                            </div>
                        </div>
                    </div>

                    <div className= {styles.assignmentCourses} >
                        <div className= {styles.assignmentsOverview}>
                            <Card>
                                <div className= {styles.assignmentTitle} >
                                    <h4>Assignment</h4>
                                    <p>40% Done</p>
                                </div>
                                <div className={styles.assignmentsStat}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Course</th>
                                                <th>Progress</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className = {styles.course}>
                                                    <input type="checkbox" name="" id=""/>
                                                    Webflow
                                                </td>
                                                <td>100%</td>
                                                <td > <div className = {styles.status}> Completed</div> </td>
                                            </tr>
                                            <tr>
                                                <td className = {styles.course}>
                                                    <input type="checkbox" name="" id=""/>
                                                    Webflow
                                                </td>
                                                <td>100%</td>
                                                <td > <div className = {styles.status}> Completed</div> </td>
                                            </tr>
                                            <tr>
                                                <td className = {styles.course}>
                                                    <input type="checkbox" name="" id=""/>
                                                    Webflow
                                                </td>
                                                <td>100%</td>
                                                <td > <div className = {styles.status}> Completed</div> </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </Card>
                        </div>

                        <div className= {styles.coursesOverview}>
                            <Card>
                                <div className= {styles.courseTitle} >
                                    <h4>Assignment</h4>
                                    <p>40% Done</p>
                                </div>
                                <div className = {styles.coursesStats}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Course</th>
                                                <th>Progress</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className = {styles.course}>
                                                    <input type="checkbox" name="" id=""/>
                                                    Webflow
                                                </td>
                                                <td>100%</td>
                                                <td > <div className = {styles.status}> Completed</div> </td>
                                            </tr>
                                            <tr>
                                                <td className = {styles.course}>
                                                    <input type="checkbox" name="" id=""/>
                                                    Webflow
                                                </td>
                                                <td>100%</td>
                                                <td > <div className = {styles.status}> Completed</div> </td>
                                            </tr>
                                            <tr>
                                                <td className = {styles.course}>
                                                    <input type="checkbox" name="" id=""/>
                                                    Webflow
                                                </td>
                                                <td>100%</td>
                                                <td > <div className = {styles.status}> Completed</div> </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* ----------------------------------------------------------------------------RESOURCES CONTAINER------------------------------------ */}
                    <div className="resourcesOverview">
                        <Card>
                            
                        </Card>
                    </div>
                   
                </div>
            </div>
            
        </div>
    )
}

export default StudentDashboard
