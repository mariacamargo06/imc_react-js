import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import {levels, calculateImc,Level} from './helpers/imc';
import { GridItem } from './components/GridItem'
import seta from './assets/leftarrow.png'

const App = () => {
  
  const [weight, setWeight] = useState(0);
  const [heigth, setHeight] = useState(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalc = () => {
    if (heigth && weight) {
      setToShow(calculateImc(heigth,weight));
      
    }
    else {
      alert("Informe a Altura e o Peso")
    }
  }

const handleBack = () =>{
  setToShow(null);
  setHeight(0);
  setWeight(0);

}

  return(
    <div className={styles.main}>
        <header>
            <div className={styles.headerContainer}>
              <img src={poweredImage} alt="" width={150} />
            </div>
        </header>
        <div className={styles.container}>
            <div className={styles.leftSide}>
              <h1>Calculo do IMC</h1>
              <p>O IMC (Índice de Massa Corporal) é reconhecido pela OMS (Organização Mundial da Saúde) como um padrão internacional que avalia se as pessoas, entre 20 e 59 anos, estão com peso ideal ou em excesso, em relação a sua altura. </p>
              <input 
                type="number"
                placeholder="Informe a altura. Ex. 1.5 (em metro)"
                value={heigth> 0 ? heigth:''}
                onChange={t => setHeight(parseFloat(t.target.value) )}
              />

              <input 
                type="number"
                placeholder="Informe o peso. Ex. 60.5 (em kilo)"
                value={weight > 0 ? weight:''}
                onChange={t => setWeight(parseFloat(t.target.value) )}
              />

              <button onClick={handleCalc}>Calcular</button>

            </div>
            
            <div className={styles.rightSide}>
              {!toShow &&
              <div className={styles.grid}>
                 {levels.map( (item) => (
                  <GridItem item={item}/>
                 ) )}
              </div>
}
{
  toShow &&
  <div className={styles.rightbig}>
  <div className={styles.rightArrow} onClick={handleBack}>
    <img src={seta} width={25}/>
  </div>
  <GridItem item={toShow}/>
</div>
}
    </div>
    </div>
    </div>
  )
}

export default App;