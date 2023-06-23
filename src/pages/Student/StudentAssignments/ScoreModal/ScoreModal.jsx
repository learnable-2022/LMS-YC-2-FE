import styles from "./scoreModal.module.css"
import { QuizBadge} from "../../../../assets"
import { BsXLg } from "react-icons/bs"
import {FaTimes} from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import AppContext from "../../../../context/Appcontext"

function ScoreModal() {

    const {showScoreModal, setShowScoreModal, scorePercentage} = useContext(AppContext)
    
    return (
        <div className = {styles.container}>
            <div className = {styles.close} onClick = {() => setShowScoreModal(false)}>
                <FaTimes />
            </div>
            {/* <div className= {styles.modal}> */}
                <div className= {styles.badgeImg}>
                    <img src= {QuizBadge} alt=""/>
                </div>

                <div className= {styles.content}>
                    <p id = {styles.great}>GREAT WORK</p>
                    <p id ={styles.score}>{`Your Score: ${scorePercentage}%`}</p>
                    <p id = {styles.unlock}>You just unlocked the novice badge</p>

                    <div className= {styles.modalBtns}>
                        <NavLink className = {styles.game}>Play a Game</NavLink>
                        <NavLink to = "/student/dashboard/certification" className = {styles.cert} onClick = {() => setShowScoreModal(false)}>View Certificate</NavLink>
                    </div>
                </div>


                
            {/* </div> */}
           
        </div>
    )
}

export default ScoreModal
