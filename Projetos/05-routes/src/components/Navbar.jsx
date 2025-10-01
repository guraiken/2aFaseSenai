import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        <Link to={'/'}>Home Page</Link>
        <Link to={'/pagina1'}>Pagina Um</Link>
        <Link to={'/pagina2'}>Pagina Dois</Link>
        <Link to={'/pagina3'}>Pagina Tres</Link>
    </nav>
  )
}

export default Navbar