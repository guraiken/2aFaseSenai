import Conteudo from "./Conteudo"

function DoEstudante() {
  return (
    <Conteudo
        titulo={"Oração do Estudante"}
        paragrafos={[
        "Senhor dos Códigos,",
        "Concede-me memória RAM e memória humana.",
        <br/>,
        "Faze com que os bugs da aula não se repliquem na minha cabeça,",
        "e que o VS Code não trave quando eu mais precisar.",
        <br/>,
        "Livrai-me das provas de múltipla escolha com alternativas parecidas,",
        "dos professores que trocam tudo na véspera,",
        "e dos colegas que sabem colar melhor do que estudar.",
        "Dai-me coragem para levantar a mão,",
        "e sabedoria para não deletar a pasta errada."
        ]}
    />
  )
}

export default DoEstudante