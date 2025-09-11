import { useState } from 'react'
import "./CalculadoraImc.css"

function CalculadoraImc() {
  const[inputAltura, setInputAltura] = useState()
  const[inputPeso, setInputPeso] = useState()
  const[resultado, setResultado] = useState()

  function calcularPeso(){
    setResultado(Number(inputPeso / (inputAltura * inputAltura)).toFixed(2))
  }

  return (
    <div className='calculadora-container'>
      <h2>Calculadora de Carne IMC</h2>
      <label htmlFor="">Altura</label>
      <input type="text" 
        value={inputAltura}
        onChange={(e) => setInputAltura(e.target.value)}
      />
      <label htmlFor="">Peso (Kg's)</label>
      <input type="text" 
        value={inputPeso}
        onChange={(e) => setInputPeso(e.target.value)}
      />
      <button onClick={calcularPeso}>Calcule a Carne!</button>
      { resultado &&
        <p>O seu IMC é {resultado}</p>
      }
    </div>
  )
}

export default CalculadoraImc