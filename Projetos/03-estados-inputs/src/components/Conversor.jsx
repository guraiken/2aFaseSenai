import { useState } from 'react'
import "./Conversor.css"

function Conversor() {
    const[medidaEntrada, setMedidaEntrada] = useState("Celsius")
    const[medidaSaida, setMedidaSaida] = useState("Celsius")
    const[valor, setValor] = useState()
    const[resultado, setResultado] = useState()
    const[inicial, setInicial] = useState()

    function converter(valor){
        setInicial(medidaSaida.charAt(0)) 

        if(medidaEntrada == "Celsius" && medidaSaida == "Kelvin"){
            setResultado((Number(valor) + Number(273.15)).toFixed(2))
        }else if (medidaEntrada == "Celsius" && medidaSaida == "Fahrenheit"){
            setResultado(Number(valor * 1.8) + 32)
        }else if(medidaEntrada == "Kelvin" && medidaSaida == "Celsius"){
            setResultado((valor - 273.15).toFixed(2))
        }else if(medidaEntrada == "Kelvin" && medidaSaida == "Fahrenheit"){
            setResultado((Number(valor - 273.15) * 9/5 + 32).toFixed(2))
        }else if(medidaEntrada == "Fahrenheit" && medidaSaida == "Celsius"){
            setResultado(Number(valor - 32) / 1.8)
        }else if(medidaEntrada == "Fahrenheit" && medidaSaida == "Kelvin"){
            setResultado(Number(valor - 32) * 5/9 + 273,15)
        }
    }

  return (
    <div className='conversor-container'>
        <h2>Conversor de Temperatura</h2>
        <select name="temperatura" id="" onChange={(e) => setMedidaEntrada(e.target.value)}>
            <option value="Celsius">Celsius</option>
            <option value="Kelvin">Kelvin</option>
            <option value="Fahrenheit">Fahrenheit</option>
        </select>
        <label htmlFor="">Valor</label>
        <input type="number" value={valor}
        onChange={(e) => converter(e.target.value)
        }
        />
        <select name="temperatura" id="" onChange={(e) => setMedidaSaida(e.target.value)}>
        <option value="Celsius">Celsius</option>
        <option value="Kelvin">Kelvin</option>
        <option value="Fahrenheit">Fahrenheit</option>
        </select>
        {resultado && <div>
            <h3>O valor em {medidaSaida} é {resultado} {inicial}°</h3>
        </div>
        }    
    </div>
  )
}

export default Conversor