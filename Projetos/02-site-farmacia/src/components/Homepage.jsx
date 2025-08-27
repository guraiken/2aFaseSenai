import "./Homepage.css"
import Merchandise from "./Merchandise"
import Texto from "./Texto"
import Titulo from "./Titulo"

function Homepage() {
  return (
    <section className="homepage-container">
        <div className="homepage">
        <Titulo titulo={"Farmárcia"}></Titulo>
        <Texto texto={"Bem vindo a farmárcia, estamos sob nova direção e possuimos diversos produtos no preço certo e tal tal tal tal"}></Texto>
        <img className="imagem-homepage" src="./imagens/farmarcia.PNG.png" alt="" width={"420px"}/>
        </div>
        <Titulo titulo={"Merchandise!"}></Titulo>
        <Merchandise></Merchandise>
    </section>
  )
}

export default Homepage