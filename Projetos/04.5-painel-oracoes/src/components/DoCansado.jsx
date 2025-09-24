import Conteudo from "./Conteudo"

function DoCansado() {
  return (
    <Conteudo
    titulo={"Oração do Cansado"}
    paragrafos={[
        "Senhor dos Logs,",
        "Que tudo vê, até os erros que escondo com `try/catch`,",
        "Dai-me forças, pois a minha está em `null`.",
        <br/>,
        "Não peço mais produtividade,",
        "Só paz no coração e um código que pare de quebrar.",
        "Já não distingo mais tab de espaço,",
        "E até o botão de salvar me julga em silêncio.",
        <br/>,
        "Livrai-me das daily às 8h,",
        "dos clientes que “só queriam um botãozinho a mais”,",
        "e dos bugs que somem quando eu compartilho a tela.",
        <br/>,
        "Fazei meu código rodar, mesmo que por pena.",
        "E se não rodar, que pelo menos pare de rodar minha cabeça.",
        <br/>,
        "Se eu dormir sobre o teclado,",
        "que os sonhos me levem para um lugar sem deadlines,",
        "sem hotfix,",
        "sem SLA.",
        "Amém, e se puder, só mais 5 minutinhos."
        
    ]}
    />
  )
}

export default DoCansado