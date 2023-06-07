import styles from "./emptyStatePage.module.css";
import { ExtraResourceImg, PenIcon, TripleDotsIcon } from '../../assets';





function EmptyStatePage() {
  return (

    <div className={styles.container}>

        <div className={styles.box}>
            <div className={styles.sidebar}>

            </div>


            <div className={styles.navigation}>

            </div>
        

        


            <div className={styles.mainSection}>
                <div className={styles.mainSectionLeft}>
                    <div className={styles.lesson}>
                        <h3>Lesson Path <img src={PenIcon} alt="" /> </h3>
                        <p>What lesson week is it for the student.</p>

                        <div className={styles.rectangle}>
                        <p>Add text <img src={PenIcon} alt="" /> </p>
                        </div>
                    </div>

                
                    <div className={styles.lesson}>
                        <h3>Lesson week</h3>
                        <p>What lesson week is it for the student.</p>

                        <div className={styles.rectangle}>
                        <p>Add text <img src={PenIcon} alt="" /> </p>
                        </div>
                    </div>

                
                    <div className={styles.lesson}>
                        <h3>Course title</h3>
                        <p>Add a description of your course. Keep it clear and interesting for your learners.</p>

                        <div className={styles.rectangle}>
                        <p>Add text <img src={PenIcon} alt="" /> </p>
                        </div>
                    </div>


                    <div className={styles.lesson}>
                        <h3>Lesson video</h3>

                        <div className={styles.rectanglebox}>
                            <div className={styles.profilePic}>
                                
                            </div>

                            <div className={styles.text}>
                                <p>It's easy — drag-and-drop files here. Or click the Add button to upload a video.</p>
                            </div>

                            <div className={styles.button}>
                                <button className={styles.save}>Add lesson video</button>
                            </div>

                        </div>
                    </div>


                    <div className={styles.lesson}>
                        <h3>Course description</h3>
                        <p>Add a description of your course. Keep it clear and interesting for your learners.</p>

                        <div className={styles.rectangle}>
                        <p>Add text <img src={PenIcon} alt="" /> </p>
                        </div>
                    </div>


                    <div className={styles.lesson}>
                        <h3>Extra resources</h3>

                        <div className={styles.rectangleImg}>
                            <div className={styles.resourceRectangle}>
                                <img src={ExtraResourceImg} alt="" />
                                <p>Add text or drag to upload video</p>
                            </div>
                        </div>
                    </div>



                    <div className={styles.uploadButton}>
                        <button>Upload lesson</button>
                    </div>


                </div>






                <div className={styles.mainSectionRight}>
                    <div className={styles.boxModel}>
                        <div className={styles.boxList}>
                            <p>Lesson</p>
                            <img src={TripleDotsIcon} alt="" />
                        </div>
                        <h3>0</h3>
                    </div>
            
                    <div className={styles.boxModel}>
                        <div className={styles.boxList}>
                            <p>Students and progress</p>
                            <img src={TripleDotsIcon} alt="" />
                        </div>
                        <h3>0</h3>
                    </div>

                    <div className={styles.boxModel}>
                        <div className={styles.boxList}>
                            <p>Resources</p>
                            <img src={TripleDotsIcon} alt="" />
                        </div>
                        <h3>0</h3>
                    </div>

                    <div className={styles.boxReport}>
                        <div className={styles.boxList}>
                            <p>Report</p>
                            <img src={TripleDotsIcon} alt="" />
                        </div>
                    </div>
                </div>




            </div>
        </div>





    </div>
  )
}

export default EmptyStatePage
