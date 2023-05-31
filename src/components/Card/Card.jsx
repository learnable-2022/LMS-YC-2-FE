import styles from "./card.module.css"

function Card({children}) {
    return (
        <div className = {styles.cardContainer}>
            {children}
        </div>
    )
}

export default Card
