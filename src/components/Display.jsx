import styles from './Display.module.css'

function Display({displayValue}) {
  
  return ( 
    <input
    type="text"
    id="display"
    className={styles.display}
    value={displayValue}
    readOnly />
   );
}

export default Display;