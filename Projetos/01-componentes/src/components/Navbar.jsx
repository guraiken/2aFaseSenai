import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar-container">
        <a href="">
          <img src="./icones/solar--home-outline.svg" alt="" />
          Home</a>
        <a href="">
        <img src="./icones/hugeicons--contact-01.svg" alt="" />
          Contato</a>
        <a href="">
        <img src="./icones/akar-icons--dashboard.svg" alt="" />
          Dashboard</a>
    </nav>
  )
}

export default Navbar