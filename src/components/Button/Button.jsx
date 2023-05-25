import style from "./Button.module.css";


function Button({type, value, id, setButton}) {
  return (

    <div className={style.ButtonContainer}>
      <button type={type}
        id={id}
        onClick={setButton}
        >{value}</button>
    

    </div>
  )
}

export default Button
