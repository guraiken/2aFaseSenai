import { useState } from "react"
import "./Hohoho.css"

function Hohoho() {
    const[hoHo, setHoHo] = useState()
    const[resultado, setResultado] = useState()

    function calcularHoho(){
        let frase = "Ho"
        let juncao = ""

        for(let i = 0; i < hoHo; i++){ 
            juncao = juncao + frase
            if(i != hoHo - 1){
                juncao = juncao + " "
            }
        }

        setResultado(juncao)
        console.log(juncao)
    }
    

  return (
    <div className="hohoho">
        <h2>Papai Noel</h2>
        <label htmlFor="">Quantos Ho´s o papai noel vai falar</label>
        <input type="number" 
        value={hoHo}
        onChange={(e) => setHoHo(e.target.value)}
        />
        <button onClick={calcularHoho}>Calcular</button>
        { resultado && <p>{resultado}!</p>}
    </div>
  )
}

export default Hohoho