import styles from "./addAnswers.module.css";
import { BackIcon, ImageIcon, ScreenshotImg, DeleteIcon } from '../../assets';

function AddAnswers() {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.sidebar}>
                
            </div>


            <div className={styles.navigation}>
                <div className={styles.navbar}>
                    <div className={styles.leftside}>
                        <p>Create new lesson</p>
                    </div>
                    

                    <div className={styles.rightside}>
                        <div className={styles.input}>
                            <input type="text" placeholder="Search" />
                        </div>
                        

                        <div className={styles.profile}>
                            <div className={styles.profileIcon}>
                                <h1>S</h1>
                            </div>

                            <div className={styles.profileName}>
                                <p>Steven O.</p>
                                <p><span>Administrator</span></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.back}>
                    <div className={styles.backIcon}>
                        <img src={BackIcon} alt="" />
                    </div>

                    <div className={styles.backName}>
                        <p>Back</p>
                    </div>
                </div>
                
            </div>
        </div>




        <div className={styles.mainSection}>
            <div className={styles.dashedBox}>
                <div className={styles.uploadImg}>
                    <img src={ImageIcon} alt="" />
                    <p>Drag and drop or click here to select file</p>
                </div>
            </div>

            <div className={styles.lessonTitle}>
                <p>Lesson Title</p>
                <div className={styles.titleBox}>
                    <p>Introduction to Product Design</p>
                </div>
            </div>

            <div className={styles.lessonContent}>
                <p>Lesson content Nr.1</p>
                <div className={styles.lessonImage}>
                    <img src={ScreenshotImg} alt="" />
                </div>
            </div>




            <div className={styles.answersSection}>
                <div className={styles.Answers}>
                    <div>
                        <p>Answer 1</p>
                    </div>

                    <div className={styles.deleteAnswer}>
                        <div>
                            <img src={DeleteIcon} alt="" />
                        </div>

                        <div>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>


                <div className={styles.correctAnswer}>
                    <div className={styles.circleAnswer}>

                    </div>

                    <div>
                        <p>Correct</p>
                    </div>
                </div>
            </div>



            <div className={styles.answersSection}>
                <div className={styles.Answers}>
                    <div>
                        <p>Answer 2</p>
                    </div>

                    <div className={styles.deleteAnswer}>
                        <div>
                            <img src={DeleteIcon} alt="" />
                        </div>

                        <div>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>


                <div className={styles.correctAnswer}>
                    <div className={styles.circleAnswer}>

                    </div>

                    <div>
                        <p>Correct</p>
                    </div>
                </div>
            </div>



            <div className={styles.addAnswers}>
                <div className={styles.addIcon}>+</div>
                <div>
                    <p>Add Answer</p>
                </div>
            </div>


        
            <div  className={styles.footerButton}>
                <button>Save and view</button>
            </div>
            

        </div>

 
    </div>
  )
}

export default AddAnswers
