import { useState } from 'react'

function Notaaluno() {
    const[conceito, setConceito] = useState()

    function calcularMédiaNota(){
        let nota1 = Number(prompt("Digite nota 1"))
        let nota2 = Number(prompt("Digite nota 2"))
        let media = (nota1 + nota2) / 2

        if(media >= 9 && media <= 10){
            setConceito("A")
        }else if(media <= 9 && media >= 7.5){
            setConceito("B")
        }else if(media >= 6 && media <= 7.5){
            setConceito("C")
        }else if(media >= 4 && media <= 6){
            setConceito("D")
        }else if(media >= 0 && media <= 4){
            setConceito("E")
        }else{
            alert("Digite um número")
        }
    }

  return (
    <div>
        <h2>Média Nota - 5.24</h2>
        {conceito && <p>Sua nota é {conceito}</p>}
        <button onClick={calcularMédiaNota}>Calcular média</button>
    </div>
  )
}

export default Notaaluno