import styles from "./input.module.css";


function inputField({type, placeholder, value, setInput}) {
    return (
      <div>
    
        <input className={styles.inputItem}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={setInput}
        />   
        
      </div>
  )
}

export default inputField
