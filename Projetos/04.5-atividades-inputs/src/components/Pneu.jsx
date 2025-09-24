import { useState } from "react"
import "./Pneu.css"

function Pneu() {
    const[pressaoInput, setPressaoInput] = useState()
    const[pressaoLidaInput, setPressaoLidaInput] = useState()
    const[resultado, setResultado] = useState()

    function calcular(){
        setResultado(pressaoInput - pressaoLidaInput)
    }

  return (
    <div className="pneu-container">
        <h2>Calibrar Pneu</h2>
        <label htmlFor="">Pressão Desejada</label>
        <input type="number" 
        value={pressaoInput}
        onChange={(e) => setPressaoInput(e.target.value)}
        />
        <label htmlFor="">Pressão Lida</label>
        <input type="text" 
        value={pressaoLidaInput}
        onChange={(e) => setPressaoLidaInput(e.target.value)}
        />
        <button onClick={calcular}>Calcular Pressão Restante</button>
        { resultado &&
            <p>A pressão restante necessária para {pressaoInput} é {resultado}</p>
        }
    </div>
  )
}

export default Pneu