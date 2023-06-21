import { useContext } from "react"
import AppContext from "../../context/Appcontext"
import styles from "./modal.module.css"

function Modal({children}) {
    const {setShowModal} = useContext(AppContext)
    return (
        <div className = {styles.modalContainer}>
            <p onClick = {() => setShowModal(false)} className= {styles.modalClose}>X</p>
           {children} 
        </div>
    )
}

export default Modal
