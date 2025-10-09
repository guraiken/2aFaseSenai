import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
      <nav className="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/bar/"}>Bar</Link>
        <Link to={"/material-construcao/"}>Materiais de Construção</Link>
        <Link to={"/sorveteria/"}>Sorveteria</Link> 
    </nav>
  )
}

export default Navbar