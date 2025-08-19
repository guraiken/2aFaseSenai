import "./Corpo.css"
import Textao from "./Textao"
import Texto from "./Texto"
import Titulo1 from "./Titulo1"
import Titulo2 from "./Titulo2"

function Corpo() {
  return (
    <div className="corpo-container">
        <Titulo1 />
        <Titulo2 texto={"Primeiro pedaço de página"} emoji={"💩"}/>
        <Texto texto={"Isso é um pedaço de texto personalizado"}></Texto>
        <Titulo2 texto={"Segundo pedação de página"} emoji={"😂"}/>
        <Textao textasso={"Texto que é pra ser enorme Texto que é pra ser enorme Texto que é pra ser enorme Texto que é pra ser enorme Texto que é pra ser enorme Texto que é pra ser enorme Texto que é pra ser enorme"} emoji={" 😂"}></Textao>
        <img src="./imagens/davy-jones-1.jpg" alt="" className="imagem-corpo"/>
    </div>
  )
}

export default Corpo