import { useState } from 'react'


function Copomeio(){
    const[estado, setEstado] = useState()

    function CalculoDoCopo(){
        let numero = Number(prompt("Digite um número"))

        if(numero > 0){
            setEstado("Positivo")
        }else if(numero < 0 ){
            setEstado("Negativo")
        }else{
            setEstado("Nulo")
        }

    }

    return(
        <>
        <h2>Copo Meio Chei - 5.29</h2>
        {estado && <p>O número é {estado}</p>}
        <button onClick={CalculoDoCopo}>Descubra</button>
        </>
    )
}

export default Copomeio