import styles from "./adminNavbar.module.css"
import {Logo} from "../../assets"
import { Outlet } from "react-router"

function AdminNavbar() {
    return (
        <div className = {styles.container}>
            <nav className = {styles.adminNavbar}>
            <div className= {styles.logo}>
                <img src= {Logo} alt=""/>
            </div>

            <div className= {styles.navLinks}>
                <ul>
                    <li className={styles.active}>Home</li>
                    <li>Website</li>
                    <li>Blog</li>
                </ul>
            </div>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
        
    )
}

export default AdminNavbar
