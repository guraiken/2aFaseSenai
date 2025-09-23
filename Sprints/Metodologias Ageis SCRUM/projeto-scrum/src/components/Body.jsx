import React from 'react'
import "./Body.css"
import ButtonDestaque from './ButtonDestaque'

function Body() {
  return (
    <div className='cont-body' >
      <div className='descricao'>
        <h2 className='destaque' >
        Paideia.
        <br/>
        A transformação
        <br />
        começa na mente.
        </h2>
      </div>
        <p>
          Os cursos da Paideia te levam do zero ao avançado.
          <br/> 
          Aprenda com especialistas e dê o próximo passo na sua carreira hoje mesmo.
          <br />
          Vagas limitadas!
        </p>
        <div className='container-botao'>
        <ButtonDestaque/>
        </div>
    </div>
  )
}

export default Body