import { useState } from 'react'

function Moedas() {
    const[real, setReal] = useState()
    const[dolar, setDolar] = useState()

    function converterReal(valor){
        setReal(valor)
        setDolar(valor * 5.43)
    }

    function converterDolar(valor){
        setReal(valor/5.43)
        setDolar(valor)
    }


  return (
    <div>
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
    </div>
  )
}

export default Moedas