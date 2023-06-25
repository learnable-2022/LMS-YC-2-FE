import styles from "./adminDashboardNav.module.css"
import { FiMenu } from "react-icons/fi"
import { LogoSvg , Logo} from "../../assets"
import { useContext, useState } from "react"
import AppContext from "../../context/Appcontext"

function AdminDashboardNav({navTitle}) {
    const { adminInfo, showAdminNav, setShowAdminNav } = useContext(AppContext)
   
    return (
        <nav className = {styles.container}>
            <h3 className = {styles.title}>{navTitle}</h3>
            <div className= {styles.burger} onClick = {() => setShowAdminNav(true)}>
                <FiMenu />
            </div>
            <div className= {styles.logo}>
                <img src= {LogoSvg} alt=""/>
                <p>LearnZ</p>
            </div>

            <div className= {styles.navName}>
                <p>{adminInfo.email[0].toUpperCase()}</p>
            </div>
        </nav>
    )
}

export default AdminDashboardNav
