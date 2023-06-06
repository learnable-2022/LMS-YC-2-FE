import styles from "./createlessontwo.module.css";
import { imageVector } from "../../assets/"


function CreateLessonTwo() {
  return (
    <div className = {styles.lessonContainer}>
        <button className= {styles.backBtn}>Back</button>
        <section className={styles.addLessonArea}>
        <img src={imageVector} alt="Image Vector" className= {styles.imageVector}/>
        <p className={styles.addInstruction}>Drag and drop or click here to select file</p>
        </section>
        <div className={styles.lessonTitle}>Lesson Title</div>
        <section className={styles.placeholderContainer}>
          <p className={styles.titlePlaceHolder}>Introduction to Product Design</p>
        </section>
        <section className={styles.inputArea}>
        <div className={styles.inputAreaTitle}>Lesson content Nr. 1</div>
        <input type="text" className={styles.inputBox} />
        </section>
    </div>
  )
}

export default CreateLessonTwo