import Card from "./Card"
import "./Merchandise.css"

function Merchandise() {
  return (
    <div className="merchandise-container">

        <div className="merchandise-area">
            <Card titulo={"Teste"} texto={"teste"}></Card>
            <Card titulo={"Teste2"} texto={"teste"}></Card>
            <Card titulo={"Teste3"} texto={"teste"}></Card>
        </div>
    </div>
  )
}

export default Merchandise