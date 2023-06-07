import styles from "./card.module.css"

function Card({children, bgColor}) {
    return (
        <div className = {styles.cardContainer} style = {{backgroundColor : bgColor}}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    bgColor: "white"
}
export default Card
