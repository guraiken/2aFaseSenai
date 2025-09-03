import { useState } from "react"

function Comerciante() {
    const[precoVenda, setPrecoVenda] = useState()
    
    function calcularPreco(){
        let precoCompra = Number(prompt("Digite o valor do produto"))
        if(precoCompra <20){
            setPrecoVenda(precoCompra * 1.45)
        }else{
            setPrecoVenda(precoCompra * 1.30)
        }
    }

  return (
    <div>
        <h2>Venda - 5.23</h2>
        {/* render condicional ternario */}
        {precoVenda ? <p>O valor da venda é R${precoVenda}</p> : <p>Informe o preço de compra</p>}
        <button onClick={calcularPreco}>Calcular</button>
    </div>
  )
}

export default Comerciante