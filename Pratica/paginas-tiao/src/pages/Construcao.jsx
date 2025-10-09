import { useContext } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import "./Construcao.css"
import { GlobalContext } from "../contexts/GlobalContext"

function Construcao() {
    const{servicosBorracharia, setServicosBorracharia} = useContext(GlobalContext)

  return (
    <div className="construcao-container">
        <Navbar/>
        <h1>MATERIAIS DE CONSTRUÇÃO</h1>
        <Card produto={servicosBorracharia} pagina={"material-construcao"}></Card>
    </div>
  )
}

export default Construcao