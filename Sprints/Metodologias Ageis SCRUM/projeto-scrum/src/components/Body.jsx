import React from 'react'
import "./Body.css"
import ButtonDestaque from './ButtonDestaque'

function Body() {
  return (
    <div className='cont-body' >
      <div className='descricao'>
        <h2 className='destaque' >
        PAIDEIA.
        <br/>
        A transformação
        <br />
        começa na mente.
        </h2>
      </div>
        <p>
          Os cursos da PAIDEIA te levam do zero ao avançado.
          <br/> 
          Aprenda com especialistas e dê o próximo passo 
          <br />
          na sua carreira hoje mesmo. 
          <br />
          <br />
        <h3>
          VAGAS LIMITADAS!
        </h3>
        </p>
        <ButtonDestaque/>
    </div>
  )
}

export default Body