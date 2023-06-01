import styles from "./studentSidebar.module.css";
import {
  LogoSvg,
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
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function StudentSidebar() {
  // const [links, setLinks] = useState()
  const activeLink = (e) => {
    if (
      e.target.classList.contains(styles.link) ||
      e.target.parentElement.classList.contains(styles.link)
    ) {
      let links;
      e.target.classList.contains(styles.link)
        ? (links = Array.from(e.target.parentElement.children))
        : (links = Array.from(e.target.parentElement.parentElement.children));

      links.forEach((li) => {
        if (li.classList.contains(styles.link)) {
          li.classList.remove(styles.active);
          if (
            e.target.classList.contains(styles.link) ||
            e.target.parentElement.classList.contains(styles.link)
          ) {
            e.target.classList.contains(styles.link)
              ? e.target.classList.add(styles.active)
              : e.target.parentElement.classList.add(styles.active);
            li.classList.remove(styles.active);
          } else {
            e.target.classList.remove(styles.active);
          }
        }
      });
    }
  };
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardNav}>
        <div className={styles.logo}>
          <img src={LogoSvg} alt="" />
          <h3>Learn.Z</h3>
        </div>

        <div className={styles.lowerContents}>
          <div className={styles.info}>
            <img src={ProfileImg} alt="" />
            <p id={styles.name}>Emily Johnson</p>
            <p id={styles.level}> Level 2</p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <p>Badges</p>
              <p id={styles.statNo}>5</p>
            </div>
            <div className={styles.stat}>
              <p>Position</p>
              <p id={styles.statNo}>2nd</p>
            </div>
            <div className={styles.stat}>
              <p>Friends</p>
              <p id={styles.statNo}>23</p>
            </div>
          </div>

          <div className={styles.menu}>
            <ul className={styles.links} onClick={activeLink}>
              <li className={styles.link}>
                <div className={`${styles.linkImg} ${styles.firstImg}`}>
                  <img src={Dashboard} alt="" />
                </div>

                <NavLink to="/student/dashboard">Dashboard</NavLink>
              </li>
              <li className={styles.link}>
                <div className={styles.linkImg}>
                  <img src={Quiz} alt="" />
                </div>
                <NavLink to="studentQuiz">Quiz</NavLink>
              </li>
              <li className={styles.link}>
                <div className={styles.linkImg}>
                  <img src={Resources} alt="" />
                </div>
                <p>Resources</p>
              </li>
              <li className={styles.link}>
                <div className={styles.linkImg}>
                  <img src={Assignments} alt="" />
                </div>
                <p>Assignments</p>
              </li>
              <li className={styles.link}>
                <div className={styles.linkImg}>
                  <img src={Messages} alt="" />
                </div>
                <NavLink to="studentMessage">Message</NavLink>
              </li>
              <li className={styles.link}>
                <div className={styles.linkImg}>
                  <img src={Timetable} alt="" />
                </div>
                <p>TimeTable</p>
              </li>
              <li className={styles.link}>
                <div className={styles.linkImg}>
                  <img src={Settings} alt="" />
                </div>
                <p>Settings</p>
              </li>
              <p id={styles.haveQuestion}>Have a question</p>
              <li className={styles.link}>
                <div className={styles.linkImg}>
                  <img src={FAQ} alt="" />
                </div>
                <p>FAQ</p>
              </li>
              <li className={styles.link}>
                <div className={styles.linkImg}>
                  <img src={Support} alt="" />
                </div>
                <p>Support</p>
              </li>
              <li className={styles.link}></li>
            </ul>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default StudentSidebar;
