import styles from "./adminNavbar.module.css"
import { Logo } from "../../assets"
import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"

function AdminNavbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.adminNavbar}>
                <div className={styles.logo}>
                    <img src={Logo} alt="" />
                </div>

                <div className={styles.navLinks}>
                    <ul>
                        <NavLink to="/" className={styles.active}>Home</NavLink>
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
