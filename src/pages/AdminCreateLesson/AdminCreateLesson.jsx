import styles from "./admincreatelesson.module.css";
import { PlaceholderBW, pencil } from "../../assets/"



function AdminCreateLesson() {
  return (
    <div className = {styles.lessonContainer}>
      <section className= {styles.mainBody}>
        <button className= {styles.backBtn}>Back</button>
        <section className={styles.descriptionContainer}>
          <img src={PlaceholderBW} alt="Placeholder Image" className= {styles.placeholderImage}/>
          <div className={styles.courseDescription}>
            <p className={styles.descriptionTitle}>Home</p>
            <p className={styles.description}>
              Add a description of your course. Keep it clear and interesting for your learners.
            </p>
          </div>
        </section>  
        <section className={styles.addLessonArea}>
        <div className={styles.pencilFrame}>
        <img src={pencil} alt="pencil Image" className= {styles.pencilImage}/>
        </div>
        <p className={styles.addTitle}>Add Lessons Content to your lessons</p>
        <p className={styles.addInstruction}>It's easy — drag-and-drop files here. Or click the Add button to start building your lessons.</p>
        <button className={styles.addLessonBtn}>Add Lesson</button>
        </section>
      </section>
      <section className={styles.sideBody}>
        <div className={styles.addLessonCards}>
          <p className={styles.cardTitle}>Lesson</p>
          <p className={styles.cardNumber}>0</p>
        </div>
        <div className={styles.addLessonCards}>
        <p className={styles.cardTitle}>Students and Progress</p>
          <p className={styles.cardNumber}>0</p>
        </div>
        <div className={styles.addLessonCards}>
        <p className={styles.cardTitle}>Resources</p>
          <p className={styles.cardNumber}>0</p>
        </div>
        <div className={styles.addLessonCards}>
        <p className={styles.cardTitle}>Report</p>
        </div>
      </section>
    </div>

  )
}

export default AdminCreateLesson