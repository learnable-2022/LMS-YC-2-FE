import styles from "./certificate.module.css";
import { Logo, lowerFrameImg, medalGoldIcon, upperFrameImg } from '../../assets';





function Certificate() {
  return (
    <div>
        <div className={styles.container}>
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


                <div className={styles.inputBox}>
                    <input type="text"/>
                </div>


                <div className={styles.completeText}>
                    <p>
                        has successfully completed the course
                    </p>
                </div>


                <div className={styles.courseInput}>
                    <input type="text" placeholder="COURSE NAME HERE" />
                </div>


                <div className={styles.footerItems}>
                    <div>
                        <input type="text" />
                        <p>Date</p>
                    </div>

                    <div >
                        <img src={medalGoldIcon} className={styles.medalIcon} alt="" />
                    </div>

                    <div>
                        <img src={Logo} alt="" className={styles.logoIcon} />
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
