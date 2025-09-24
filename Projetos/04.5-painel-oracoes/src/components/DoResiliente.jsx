import Conteudo from "./Conteudo";

function DoResiliente() {
  return (
    <Conteudo
    titulo={"Oração do Resiliente"}
    paragrafos={[
        "Concedei-me, Senhor,",
        "a força para lidar com o código que não entendo,",
        "a paciência para revisar o que já revi mil vezes,",
        "e a coragem para recomeçar quando tudo dá errado.",
        <br/>,
        "Que eu aceite os bugs que não posso evitar,",
        "corrija os que posso,",
        "e tenha sabedoria para não quebrar o que já está funcionando.",
        <br/>,
        "Pois na vida e na programação,",
        "quem cai sete vezes, levanta com `git stash`.",
    ]}
    />
  )
}

export default DoResiliente