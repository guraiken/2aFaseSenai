import "./Texto.css"

function Texto(props) {
  return (
    <div className="texto-container">
        <p className="style-texto">{props.texto}</p>
    </div>
  )
}

export default Texto