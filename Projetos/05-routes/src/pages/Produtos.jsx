import { useContext, useState } from "react"
import Navbar from "../components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"
import "./Produtos.css"

function Produtos(){
    const{produto, setProduto, produtos} = useContext(GlobalContext)

    function trocarProduto(){
        let novo = prompt("Digite o novo produto")
        setProduto(novo)
    }

    return(
        <div className="produtos-container">
            <Navbar/>
            <h1>Produtos</h1>
            produtos, produtos, produtos, produtos, {produto}
            {produtos.map(produto=> (
                <p>{produto.nome}</p>
            ))}
            <button onClick={trocarProduto}>Trocar Produto</button>
        </div>
    )

}

export default Produtos