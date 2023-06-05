import styles from "./admincreatelesson.module.css";
import { PlaceholderBW, pencil } from "../../assets/"



function AdminCreateLesson() {
  return (
    <div className = {styles.lessonContainer}>
      <section className= {styles.mainBody}>
        <button className= {styles.backBtn}>Back</button>
        <section className={styles.courseDescription}>
          <div className={styles.placeholderArea}>
            <img src={PlaceholderBW} alt="Placeholder Image" className= {styles.placeholderImage}/>
          </div>
        </section>
      </section>
      <div className={styles.vertivalRule}></div>
      <section className={styles.sideBody}>

      </section>
    </div>

  )
}

export default AdminCreateLesson