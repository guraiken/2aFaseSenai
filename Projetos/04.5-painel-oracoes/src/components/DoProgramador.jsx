import React from 'react'
import Conteudo from './Conteudo'

function DoProgramador() {
    let texto = `O Senhor é meu debug, nada me faltará.

Em loops tranquilos me faz deitar,

e me guia pelas threads seguras da lógica.

Ainda que eu ande pelo vale dos sistemas legados,

não temerei o código antigo,

pois tu estás comigo:

tua stack e teu terminal me consolam.

Preparas um café diante de mim

na presença dos meus erros.

Unge minha cabeça com boas práticas,

e o meu Git transborda.

Certamente a sintaxe limpa e o deploy estável

me seguirão todos os commits da minha vida,

e habitarei no repositório sagrado para todo o sempre.`

  return (
        <Conteudo
        titulo={"Oração do Programador"}
        paragrafos={[
            "O Senhor é meu debug, nada me faltará.",
            "Em loops tranquilos me faz deitar,",
            "e me guia pelas threads seguras da lógica.",
            <br/>,
            "Ainda que eu ande pelo vale dos sistemas legados,",
            "não temerei o código antigo,",
            "pois tu estás comigo:",
            "tua stack e teu terminal me consolam.",
            <br/>,
            "Preparas um café diante de mim",
            "na presença dos meus erros.",
            <br/>,
            "Unge minha cabeça com boas práticas,",
            "e o meu Git transborda.",
            <br/>,
            "Certamente a sintaxe limpa e o deploy estável",
            "me seguirão todos os commits da minha vida,",
            "e habitarei no repositório sagrado para todo o sempre.",
            "Ctrl + S. Amém."
        ]}
        />
  )
}

export default DoProgramador