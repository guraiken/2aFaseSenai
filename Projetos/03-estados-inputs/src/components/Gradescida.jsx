import { useState } from 'react'
import "./Gradescida.css"

function Gradescida() {
    const[inputValorMetro, setInputValorMetro] = useState()
    const[inputAltura, setInputAltura] = useState()
    const[inputLargura, setInputLargura] = useState()
    const[inputComprimento, setInputComprimento] = useState()
    const[resultado, setResultado] = useState()

    function calcularMetro(){
        setResultado((Number(inputLargura) + Number(inputComprimento)) * 2 * (inputAltura * inputValorMetro))
    }

  return (
    <div className='gradescida-container'>

    <h2>Calculadora - Grades cida</h2>
    <label htmlFor="">Preço Base (m²)</label>
    <input type="number" value={inputValorMetro}
    onChange={(e) => setInputValorMetro(e.target.value)}
    />
    <label htmlFor="">Altura</label>
    <input type="number" value={inputAltura}
    onChange={(e) => setInputAltura(e.target.value)}
    />
    <label htmlFor="">Largura</label>
    <input type="number" value={inputLargura}
    onChange={(e) => setInputLargura(e.target.value)}
    />
    <label htmlFor="">Comprimento</label>
    <input type="number" value={inputComprimento}
    onChange={(e) => setInputComprimento(e.target.value)}
    />
    <button onClick={calcularMetro}>Calcular</button>
    {resultado && <p>O valor das grades será R$ {resultado}</p>
    }
    </div>
  )
}

export default Gradescida