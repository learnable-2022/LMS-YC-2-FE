import styles from "./admincreatelesson.module.css";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";

function AdminCreateLesson() {
  return (
    <div className = {styles.lessonContainer}>
            <AdminNavbar />
    </div>

  )
}

export default AdminCreateLesson