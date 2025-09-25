import { useState } from "react"
import "./Gasolina.css"

function Gasolina() {
    const[tipo, setTipo] = useState()
    const[alcool, setAlcool] = useState(0)
    const[gasolina, setGasolina] = useState(0)
    const[diesel, setDiesel] = useState(0)

    function abastecer(){
        let alcoolContagem
        let gasolinaContagem
        let dieselContagem

        if(tipo == "Alcool"){
            alcoolContagem = alcool + 1
            setAlcool(Number(alcoolContagem))
        }else if(tipo == "Gasolina"){
            gasolinaContagem = gasolina + 1 
            setGasolina(Number(gasolinaContagem))
        }else if(tipo == "Diesel"){
            dieselContagem = diesel + 1
            setDiesel(Number(dieselContagem))
            console.log(dieselContagem)
        }

    }

  return (
    <div>
        <h2>Posto de Combustível</h2>
        <select name="" id="" onClick={(e) => setTipo(e.target.value)}>
            <option value="Alcool">Alcool</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Diesel">Diesel</option>
        </select>
        <button onClick={abastecer}>Calcular</button>
        { gasolina || alcool || diesel && 
        <div>
            <h2>MUITO OBRIGADO!!</h2>
            <ol>
                <li>Alcool: {alcool}</li>
                <li>Gasolina: {gasolina}</li>
                <li>Diesel: {diesel}</li>
            </ol>
        </div>
        }
    </div>
  )
}

export default Gasolina