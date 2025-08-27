import "./Card.css"

function Card(props) {
  return (
    <div className="card-container">
        <div className="card">
            <div className="card-imagem">
                <img src="./imagens/farmarcia-camisetas.PNG.png" alt="" width={"120px"}/>
            </div>   
            <h1 className="card-titulo">{props.titulo}</h1>
            <p className="card-descricao">{props.texto}</p>
        </div>
    </div>
  )
}

export default Card