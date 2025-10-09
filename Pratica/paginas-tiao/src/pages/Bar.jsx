import { useContext, useState } from "react"
import Navbar from "../components/Navbar"
import "./Bar.css"
import { GlobalContext } from "../contexts/GlobalContext"
import Card from "../components/Card"

function Bar() {
    const{produtosBar, setProdutosBar} = useContext(GlobalContext) 

  return (
    <div className="bar-container">
        <Navbar/>
        <h1>PRODUTOS DO BAR</h1>
        <Card produto={produtosBar} pagina={"bar"}></Card>
        
    </div>
  )
}

export default Bar