import "./Textao.css"

function Textao(props) {
  return (
    <div className="textao-container">
        <p>
          {props.textasso}
          {props.emoji}
        </p>
    </div>
  )
}

export default Textao