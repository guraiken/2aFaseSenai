import { Link, useParams } from "react-router-dom"
import "./Card.css"

function Card({produto, pagina}) {
   
  return (
    <div className="card-container">
        {produto.map(objeto => (
            <div className="card" key={objeto.id}>
                <img src="https://img.cdndsgni.com/preview/10830546.jpg" alt="" width={"100px"}/>
            <h3>
                {objeto.nome}
            </h3>
            <h4>
                POR R$ {objeto.valor}  
            </h4>
            <Link to={`/${pagina}/`+`${objeto.nome}`}><button>Encomendar</button></Link>
            </div>
        ))}
    </div>
  )
}

export default Card