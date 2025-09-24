import React from 'react'
import Conteudo from './Conteudo'

function DoAprendiz() {
  return (
    <Conteudo
    titulo={"Oração do Aprendiz"}
    paragrafos={[
        "Oh Grande Sintaxe,",
        "que tudo vê e tudo espera,",
        "ensinai-me a diferença entre `==` e `===`,",
        "entre `let`, `var`, e `const`,",
        "entre o que parece funcionar",
        "e o que realmente funciona.",
        <br/>,
        "Dai-me humildade para perguntar,",
        "curiosidade para explorar,",
        "e persistência para continuar",
        "quando tudo der `undefined`.",
        <br/>,
        "Pois estou apenas começando,",
        "mas já sou parte do repositório da evolução.",
        "Commit inicial. Amém.",
    ]}
    />
  )
}

export default DoAprendiz