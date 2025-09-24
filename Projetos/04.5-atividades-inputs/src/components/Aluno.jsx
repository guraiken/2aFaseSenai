import { useState } from "react"
import "./Aluno.css"

function Aluno() {
    const [inputNotaA, setInputNotaA] = useState()
    const [inputNotaB, setInputNotaB] = useState()
    const [media, setMedia] = useState()
    const [mensagem, setMensagem] = useState()

    function calcularMedia() {
        let calculoMedia = (Number(inputNotaA) + Number(inputNotaB)) / 2
        setMedia(calculoMedia)
        
        if(calculoMedia >= 7 && calculoMedia <= 10){
            setMensagem("Aprovado")
        }else if(calculoMedia >= 4 && calculoMedia < 7){
            setMensagem("Em Recuperação")
        }else if(calculoMedia < 4 && calculoMedia >= 0){
            setMensagem("Reprovado")
        }
    }

  return (
    <div className="aluno-container">
        <h2>Aprovado ou Reprovado</h2>
        <label htmlFor="">Nota A</label>
        <input type="number" 
        value={inputNotaA}
        onChange={(e) => setInputNotaA(e.target.value)}
        />
        <label htmlFor="">Nota B</label>
        <input type="number" 
        value={inputNotaB}
        onChange={(e) => setInputNotaB(e.target.value)}
        />
        <button onClick={calcularMedia}>Calcular Média</button>
        {media && <p>A sua média é {media} e você está {mensagem}!</p>}
    </div>
  )
}

export default Aluno