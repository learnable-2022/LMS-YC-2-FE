import styles from "./studentDashboard.module.css";
import {
  Logo,
  ProfileImg,
  Dashboard,
  Quiz,
  Resources,
  Assignments,
  Messages,
  Timetable,
  Settings,
  FAQ,
  Support,
} from "../../assets";
import { useState } from "react";
import StudentSidebar from "../../components/StudentSideBar/StudentSidebar";

function StudentDashboard() {
  return (
    <div className={styles.container}>
      <div className="dashboard">
        <div className={styles.searchBg}>
          <p>STUDENT DASHY</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptatem ad quaerat impedit assumenda tempora inventore nostrum fugit expedita sapiente officiis hic ipsam alias, commodi necessitatibus animi accusantium repudiandae quasi?</p>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
