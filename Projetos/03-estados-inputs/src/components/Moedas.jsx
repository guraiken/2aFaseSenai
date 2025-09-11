import { useState } from 'react'
import "./Moedas.css"

function Moedas() {
    const[real, setReal] = useState()
    const[dolar, setDolar] = useState()
    const[euro, setEuro] = useState()

    function converterReal(valor){
        setReal(valor)
        setEuro((valor/6.33).toFixed(2))
        setDolar((valor/5.39).toFixed(2))
    }

    function converterDolar(valor){
        setDolar(valor)
        setReal((valor/5.39).toFixed(2))
        setEuro(valor*0.85)
    }
    function converterEuro(valor){
        setEuro(valor)
        setReal((valor/6.33).toFixed(2))
        setDolar(valor*1.17)
    }


  return (
    <div className='moedas-container'>
        <h2>Moedas</h2>
        <label htmlFor="">Real</label>
        <input type="number" 
            value={real}
            onChange={(e) => converterReal(e.target.value)}
        /> 

        <label htmlFor="">Dolar</label>
        <input type="number" 
            value={dolar}
            onChange={(e) => converterDolar(e.target.value)}
        />    
        <label htmlFor="">Euro</label>
        <input type="number" 
            value={euro}
            onChange={(e) => converterEuro(e.target.value)}
        />    
    </div>
  )
}

export default Moedas