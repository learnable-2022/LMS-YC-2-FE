import styles from "./button.module.css";


function Button({type, value, id, setButton}) {
  return (

    <div className={styles.ButtonContainer}>
      <button type={type}
        id={id}
        className={styles.Button}
        onClick={setButton}
        >{value}</button>
    </div>
  )
}

export default Button
