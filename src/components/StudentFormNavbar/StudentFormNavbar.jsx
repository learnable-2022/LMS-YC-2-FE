import styles from "./studentFormNavbar.module.css"
import { Logo } from "../../assets"
import { Outlet } from "react-router"

function StudentFormNavbar() {
    return (
        <div className = {styles.container}>
            <nav className = {styles.nav}>
                <img src= {Logo} alt=""/>
            </nav>
            
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default StudentFormNavbar
