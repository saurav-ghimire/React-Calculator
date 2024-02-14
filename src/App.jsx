import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import styles from './app.module.css'

function App() {
  
  let [ClickedVal, SetClickedVal] = useState("");

  let onButtonClick = (value) => {
    if(value === 'C'){
      SetClickedVal("")
    }else if(value === '='){
      const result = eval(ClickedVal);
      SetClickedVal(result)
    }else{
      const newValue = ClickedVal + value;
      SetClickedVal(newValue);
    }
  }
  return (
    <div className="container">
    <div id="calculator" className={styles.calculator}>
      <Display displayValue={ClickedVal} />
      <ButtonsContainer onButtonClick={onButtonClick}  />      
    </div>
    </div>
  )
}

export default App
