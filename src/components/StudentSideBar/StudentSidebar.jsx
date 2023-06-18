import styles from "./studentSidebar.module.css";
import {LogoSvg} from "../../assets";
import { useState, useContext, useEffect} from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import AppContext from "../../context/Appcontext"
import StudentSidebarList from "./StudentSidebarList";
import { FaTimes} from "react-icons/fa"
import { MdLogout } from "react-icons/md";

function StudentSidebar() {
  const {showNav, setShowNav, studentToken} = useContext(AppContext)

  const [activeLink, setActiveLink] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  // const onLoadLink = () => {
  //   if(window.)
  // }
  const handleLinkClick = (link) => {
    setActiveLink(link)
    setShowNav(false)
  }

  useEffect(() => {
    // setActiveLink(location.pathname)
    StudentSidebarList.forEach((link,index) => {
      if(location.pathname.includes(link.name.toLowerCase())){
        setActiveLink(link.name)
        return;
      }else if(location.pathname === "/student/dashboard"){
        setActiveLink("Home")
      }
    })
    // console.log(location, activeLink)
  }, [location.pathname])

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
