import { useState } from "react"
import "./Bondinho.css"


function Bondinho() {
    const[inputAlunos, setInputAlunos] = useState()
    const[inputMonitores, setInputMonitores] = useState()
    const[mensagem, setMensagem] = useState()

    function podeSubir(){
        let total = Number(inputAlunos) + Number(inputMonitores)
        if(total <50){
            setMensagem("É possível")
        }else{
            setMensagem("Não é possével")
        }
    }

  return (
    <div className="bondinho-container">
        <h2>O Bondinho</h2>
        <label htmlFor="">Alunos</label>
        <input type="number" 
        value={inputAlunos}
        onChange={(e) => setInputAlunos(e.target.value)}
        />
        <label htmlFor="">Monitores</label>
        <input type="number" 
        value={inputMonitores}
        onChange={(e) => setInputMonitores(e.target.value)}
        />
        <button onClick={podeSubir}>Calcular</button>
        { mensagem && <p>{mensagem} subir com apenas uma viagem.</p>}
    </div>
  )
}

export default Bondinho