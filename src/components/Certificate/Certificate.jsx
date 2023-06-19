import styles from "./certificate.module.css";
import { lowerFrameImg, medalGoldIcon, upperFrameImg } from '../../assets';
import { useContext } from "react";
import AppContext from "../../context/Appcontext";

function Certificate() {

    const { studentInfo } = useContext(AppContext)
  return (
    <div className={styles.container}>
        <div className = {styles.certificate}>
            <div className={styles.leftSide}>

            </div>


            <div className={styles.upperFrameImg}>
                <img src={upperFrameImg} alt="" />
            </div>

            
            <div className={styles.content}>
                <div>
                    <h1>
                        <span>CE</span>
                        <span style={{color: "#009A49"}}>RT</span>
                        <span style={{color: "#FF57E4"}}>IFI</span>
                        <span style={{color: "#F8A711"}}>CA</span>
                        <span>TE</span>
                        <span style={{color: "#009A49"}}> OF </span>
                        <span>COMP</span>
                        <span style={{color: "#009A49"}}>LETION</span>
                    </h1>
                </div>


                <div className={styles.certifyText}>
                    <p>
                        This is to certify that
                    </p>
                </div>

                <form action="">
                    <div className={styles.inputBox}>
                        <input type="text" value = {studentInfo.child_name.toUpperCase() } disabled = {true}/>
                    </div>


                    <div className={styles.completeText}>
                        <p>
                            has successfully completed the course
                        </p>
                    </div>


                    <div className={styles.courseInput}>
                        <input type="text" value = {studentInfo.course}  disabled/>
                    </div>  
                </form>
               


                <div className={styles.footerItems}>
                
                    <div >
                        <img src={medalGoldIcon} className={styles.medalIcon} alt="" />
                    </div>
                   
                </div>
            </div>


            <div className={styles.rightSide}>

            </div>


            <div className={styles.lowerFrameImg}>
                <img src={lowerFrameImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Certificate
