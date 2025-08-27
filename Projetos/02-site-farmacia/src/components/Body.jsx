import "./Body.css"
import Homepage from "./Homepage"
import Navbar from "./Navbar"

function Body() {
  return (
    <section className="body-container">
        <Navbar></Navbar>
        <Homepage></Homepage>
    </section>
  )
}

export default Body