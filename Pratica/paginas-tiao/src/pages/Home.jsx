
import Navbar from "../components/Navbar"
import "./Home.css"

function Home() {
  return (
    <div className='home-container'>
        <Navbar/>
        <h1>BEM-VINDO A LOJA DO TIÃO!</h1>
        <img src="./Images/multiloja-do-tiao.png" style={{borderRadius: "50px"}} width={"400px"}/>
        <div className="discurso-home">
            <h2>Loja que trabalha com honestidade e possui diversos produtos variados, dos diversos tipos variasticos.</h2>
        </div>
    </div>
  )
}

export default Home