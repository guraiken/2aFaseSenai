import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <Link to={'/'}>Home Page</Link>
        <Link to={'/pagina1'}>Pagina Um</Link>
        <Link to={'/pagina2'}>Pagina Dois</Link>
        <Link to={'/pagina3'}>Pagina Tres</Link>
    </nav>
  )
}

export default Navbar