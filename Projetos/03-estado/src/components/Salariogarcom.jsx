import { useState } from "react"

function Salariogarcom(){
    const[mensagem, setMensagem] = useState()


    function calculoSalario(){
        let salario = Number(prompt("Digite seu salário"))
        let emprestimo = Number(prompt("Digite valor do emprestimo"))
        let prestacoes = Number(prompt("Digite o numero de prestações"))
        let valorPrestacao = emprestimo / prestacoes 
        console.log(valorPrestacao)

        if(salario <= 0 || emprestimo <= 0 || prestacoes <= 0){
            setMensagem("Digite um número positivo ou maior que zero")
        }else if(valorPrestacao > salario * 0.3){
            setMensagem("O empréstimo não pode ser oferecido, pois excede o limite de 30%")
        }else{
            setMensagem("O empréstimo pode ser concedido!")
        }
    }

    return(
        <>
        <h2>Empréstimo - 5.31</h2>
        {mensagem && <p>{mensagem}</p>}
        <button onClick={calculoSalario}>Descobrir</button>
        </>
    )
}

export default Salariogarcom