import { Link } from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/contato"}>Contato</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
        </nav>
    )

}

export default Navbar