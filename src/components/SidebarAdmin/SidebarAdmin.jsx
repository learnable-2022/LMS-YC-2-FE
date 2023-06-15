import styles from "./sidebarAdmin.module.css"
import { LogoSvg} from "../../assets"
import AdminSidebarList from "./AdminSidebarList"
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";
import AppContext from "../../context/Appcontext";

function SidebarAdmin() {
  const {adminToken} = useContext(AppContext)
  const [activeLink, setActiveLink] = useState("")
  const navigate = useNavigate()

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  const logout = () => {
    if(window.confirm("Do you want to log out")){
      const response = fetch("https://learnz.onrender.com/api/v1/admin/logout", {
      method : "POST",
      headers : {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${adminToken}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.success ? window.localStorage.setItem("admin-loggedIn", false) : window.localStorage.setItem("admin-loggedIn", true);
      data.success ? navigate("/admin/login") : ""
      data.success ?  window.localStorage.removeItem("admin-status") : ""
      data.success ? window.localStorage.removeItem("admin-token") : ""
    })
    .catch(err => console.log(err))
    }
    
  }
  
  return (
        <div className = {styles.container}>
            <div className= {styles.sidebarContainer}>
                <div className= {styles.logo}>
                    <img src= {LogoSvg} alt=""/>
                    <h3>Learn.z</h3>
                </div>

                <div className= {styles.links}>
                    {AdminSidebarList.map((list, index) => (
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
              <div className = {styles.maincontainer}>
                <Outlet />
              </div>
            </main>
        </div>
    )
}

export default SidebarAdmin
