import "./Conteudo.css"

function Conteudo({ titulo, paragrafos }) {
    return (
        <div className="fodase">
            <h2>{titulo}</h2>
            <div className="container-conteudo">
                {paragrafos.map((paragrafo) => (
                    <p key={paragrafo}>
                        {paragrafo}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Conteudo