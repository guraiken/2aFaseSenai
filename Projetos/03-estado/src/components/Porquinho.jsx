import { useState } from "react"

function Porquinho(){
    const[valor, setValor] = useState()
    const[valorProduto, setValorProduto] = useState()

    function CalcularPorquinho(){
        let valorProduto = Number(prompt("Digite o valor do produto que deseja"))
        let umReal = Number(prompt("Moedas de 1 real:"))    
        let cincoCen = Number(prompt("Moedas de 5 centavos:")) * 0.05    
        let dezCen = Number(prompt("Moedas de 10 centavos:")) * 0.10
        let vintcinCen = Number(prompt("Moedas de 25 centavos:")) * 0.25 
        let cinquenCen = Number(prompt("Moedas de 50 centavos:")) * 0.50
        let totalMoedas = umReal + cincoCen + dezCen + vintcinCen + cinquenCen
        setValor(totalMoedas.toFixed(2))
        setValorProduto(valorProduto)
    }

    return(
        <div>
            <h2>Porquinho - 5.25</h2>
            
            {!valor && <p>Clique aqui :)</p>}
            {valor && 
            <> 
            {valor >= valorProduto ? <p>Produto: R$ {valorProduto} O total das moedas é R$ {valor}, você conseguirá comprar o produto!</p> : <p>Produto: R${valorProduto}. Você só tem R$ {valor} e não possui o suficiente para comprar o produto :(</p>} 
            </>
            }
            <button onClick={CalcularPorquinho}>Calcular</button>
        </div>
    )
}

export default Porquinho