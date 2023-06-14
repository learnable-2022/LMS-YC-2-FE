import styles from "./studentSidebar.module.css";
import {LogoSvg} from "../../assets";
import { useState, useContext} from "react";
import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import AppContext from "../../context/Appcontext"
import StudentSidebarList from "./StudentSidebarList";
import { FaTimes} from "react-icons/fa"
import { MdLogout } from "react-icons/md";

function StudentSidebar() {
  // const [links, setLinks] = useState()
  const { setStudentInfo, setStudentToken, showNav, setShowNav, studentToken, setStudentLoggedIn} = useContext(AppContext)

  const [activeLink, setActiveLink] = useState("")
  const navigate = useNavigate()

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  const logout = () => {
    if(window.confirm("Do you want to log out")){
      const response = fetch("https://learnz.onrender.com/api/v1/user/logout", {
      method : "POST",
      headers : {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${studentToken}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.success ? window.localStorage.setItem("loggedIn", false) : window.localStorage.setItem("loggedIn", true);
      data.success ? navigate("/login/student") : ""
      data.success ?  window.localStorage.removeItem("student-status") : ""
      data.success ? window.localStorage.removeItem("student-token") : ""
      // data.success ? setStudentInfo(JSON.parse(window.localStorage.getItem("student-status"))) : ""
      // data.success ? setStudentToken(JSON.parse(window.localStorage.getItem("student-token"))) : ""
      // data.success ? setStudentLoggedIn(JSON.parse(window.localStorage.getItem("loggedIn"))) : ""
    })
    .catch(err => console.log(err))
    }
    
  }
  return (
    <div className={styles.container}>
      <div className= {`${styles.sidebarContainer} ${showNav ? styles.active : ""}`}>
        <div className= {styles.logo}>
          <div className= {styles.close} onClick = {() => setShowNav(false)}>
            <FaTimes />
          </div>
            <img src= {LogoSvg} alt=""/>
            <h3>Learn.z</h3>
        </div>

        <div className= {styles.links}>
            {StudentSidebarList.map((list, index) => (
              <NavLink to = {`${list.link}`} className = {`${styles.link} ${activeLink === list.name ? styles.active : ""}`} key = {index} onClick = {() => handleLinkClick(list.name)} >  
                  {list.logo}  
                  <p>{list.name}</p>
              </NavLink>
            ))}
        </div>

        <div className={styles.logout} onClick = {logout}>
          <MdLogout />
          <p>Logout</p>
        </div>
      </div>
      <main>
        <div className= {styles.mainContainer}>
          {showNav && <div className={styles.overlay}></div>}
          <Outlet />
        </div>
        
      </main>
    </div>
  );
}

export default StudentSidebar;
