import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import "./Modal.css"

function Modal() {
    const{pagina, produto} = useParams()
    const{servicosBorracharia, produtosSorveteria, produtosBar} = useContext(GlobalContext)
    const[teste, setTeste] = useState({})
    
useEffect(()=> {
    console.log(pagina)
    if(pagina == "sorveteria"){
        setTeste(produtosSorveteria.find(produt=> produt.nome == produto))
    }else if(pagina == "material-construcao"){
        setTeste(servicosBorracharia.find(produt=> produt.nome == produto))
    }else if(pagina == "bar"){
        setTeste(produtosBar.find(produt=> produt.nome == produto))
    }
    console.log(teste)
    console.log(produto)
},[])
   

  return (
    <div className='modal-container'>
       {
        <div>
        <h1>{teste.nome}</h1>
        <h2>{teste.valor}</h2>
        <img src="https://cdn.awsli.com.br/2500x2500/1312/1312517/produto/2249731950800813588.jpg" alt="" width={"200px"}/>
        </div>
       }
    </div>
  )
}

export default Modal