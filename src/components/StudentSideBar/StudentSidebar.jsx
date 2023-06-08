import styles from "./studentSidebar.module.css";
import {LogoSvg} from "../../assets";
import { useState, useContext} from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import AppContext from "../../context/Appcontext"
import StudentSidebarList from "./StudentSidebarList";
import { FaTimes} from "react-icons/fa"
import { MdLogout } from "react-icons/md";

function StudentSidebar() {
  // const [links, setLinks] = useState()
  const { studentData, showNav, setShowNav} = useContext(AppContext)

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

  const logout = () => {
    if(window.confirm("Do you want to log out")){
      const response = fetch("/api/user/logout", {
      method : "POST",
      credentials : "include",
      headers : {
        "Content-Type": "application/json"
      }
    })
    .then(res => console.log(res))
    .then(data => console.log(data))
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
              <NavLink to = {`${list.link}`}  key = {index}>
                <div className= {styles.link} onClick ={activeLink}>
                  {list.logo}  
                  <p>{list.name}</p>
                </div>
                  
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
          <Outlet />
        </div>
        
      </main>
    </div>
  );
}

export default StudentSidebar;
