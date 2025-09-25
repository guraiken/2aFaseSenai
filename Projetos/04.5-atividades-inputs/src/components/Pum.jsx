import { useState } from "react"
import "./Pum.css"

function Pum() {
    const[inputQtd, setInputQtd] = useState()
    const[texto, setTexto] = useState([])

    function calcular(){
        let juncao
        let frase = []

        // let pums = 0
        
        // let i = 1
        // while(pums < inputQtd){
        //     if(i%4 != 0){
        //         console.log(i)
        //     }else{
        //         console.log("Pum");
        //         pums++                
        //     }
        //     i++
        // }
        // O RAFA FEZ, NAO TOCAR

        for(let i = 1; i < inputQtd * 4; i = i + 4){
            juncao = `${i} ${i + 1} ${i + 2} PUM`
            
            frase.push(juncao)
        }
        setTexto(frase)
    }

  return (
    <div className="pum-container">
        <h2>PUM!</h2>
        <label htmlFor="">Quantas vezes?</label>
        <input type="number" 
        value={inputQtd}
        onChange={(e) => setInputQtd(e.target.value)}
        />
        <button onClick={calcular}>Formar</button>
        {texto.map(frase => (
            <p>{frase}</p>
        ))}
    </div>
  )
}

export default Pum