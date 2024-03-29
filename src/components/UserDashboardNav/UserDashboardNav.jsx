import styles from "./userDashboardNav.module.css"
import { Search, SearchIcon } from "../../assets"
import { FiMenu } from "react-icons/fi"
import { LogoSvg , Logo} from "../../assets"
import { useContext, useState,useEffect } from "react"
import AppContext from "../../context/Appcontext"
import { NavLink } from "react-router-dom"

function UserDashboardNav({navTitle}) {
    const {studentInfo, setShowNav, setShowCourseNav} = useContext(AppContext)
    const [fullName, setFullName] = useState(studentInfo.child_name)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    
    const getFirstName = () => {
        if(fullName !== undefined && fullName !== null){
        const words = fullName.split(" ")

        if(words.length >= 2){
            setFirstName(words.shift())

            setLastName(words.join()) 
        }else{
            setFirstName(fullName)
            setLastName("")
        }
        }
    }
    

    useEffect(() => {
        getFirstName()
    })

    const showNav = () => {
        if(location.pathname.includes("/student/dashboard")){
            setShowNav(true)
        }else if(location.pathname.includes("/student/course")){
            setShowCourseNav(true)
        }
    }

    return (
        <nav className = {styles.container}>
            <h3 className = {styles.title}>{navTitle}</h3>
            <div className= {styles.burger} onClick = {showNav}>
                <FiMenu />
            </div>
            <div className= {styles.logo}>
                <img src= {LogoSvg} alt=""/>
                <p>Learnz</p>
            </div>
            
            <NavLink to = "/student/dashboard/profile" className = {styles.navName}>
                <p className = {styles.nameLogo}>{studentInfo.child_name[0].toUpperCase()}</p>
                <p>{`${firstName && (firstName[0].toUpperCase() + firstName.slice(1))}  ${lastName && (lastName[0].toUpperCase() + ".")} `}</p>
            </NavLink>
        </nav>
    )
}

export default UserDashboardNav
