import { useContext } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import "./Sorveteria.css"
import { GlobalContext } from "../contexts/GlobalContext"
import { useParams } from "react-router-dom"

function Sorveteria() {
    const{produtosSorveteria} = useContext(GlobalContext)
    const {nome} = useParams()

  return (
    <div className="sorveteria-container">
        <Navbar/>
        <h1>SABORES {nome}</h1>
        <Card produto={produtosSorveteria} pagina={"sorveteria"}/>
    </div>
  )
}

export default Sorveteria