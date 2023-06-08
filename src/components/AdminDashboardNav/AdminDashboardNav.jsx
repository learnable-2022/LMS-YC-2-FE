import styles from "./adminDashboardNav.module.css"

function AdminDashboardNav({navTitle}) {
    return (
        <nav className = {styles.container}>
            <h3>{navTitle}</h3>
        </nav>
    )
}

export default AdminDashboardNav
