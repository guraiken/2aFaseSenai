import { useState } from 'react'

function Copomeiocheio2(){
    const[estado, setEstado] = useState()
    
    function calculoRenal(){
        let numero = Number(prompt("Digite um número que será avaliado pelo comitê do copo meio cheio"))

        if(numero % 2 == 0 && numero > 0){
            setEstado("Positivo e Par")
        }else if(numero < 0 ){
            setEstado("Negativo")
        }else if (numero === 0){
            setEstado("Nulo")
        }else if (numero > 0){
            setEstado("Positivo")
        }
        
    }

    return(
        <>
        <h2>Copo meio cheio DOIS! - 5.30</h2>
        {estado && <p>O número é {estado}</p>}
        <button onClick={calculoRenal}>Calcule AGORA</button>
        </>
    )
}

export default Copomeiocheio2