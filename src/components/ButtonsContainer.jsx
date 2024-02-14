import styles from './ButtonsContainer.module.css'

function ButtonsContainer({onButtonClick}) {
  const buttonNames = ['C',1,2,'+', 3,4,'-',5,6,'*',7,8,'/','=',9,0,'.']
  return ( 
    <div className={styles.ButtonContainer}>
      {buttonNames.map((index) => (
       <button key={index} className={styles.singleButton} onClick={()=>{onButtonClick(index)}} > {index} </button>  
       ))}

      </div>
   );
   
}

export default ButtonsContainer;