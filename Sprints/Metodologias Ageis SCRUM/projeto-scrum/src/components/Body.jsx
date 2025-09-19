import React from 'react'
import "./Body.css"
import ButtonDestaque from './ButtonDestaque'

function Body({fraseImpac,descrição}) {
  return (
    <div className='cont-body' >
      <div className='descricao'>
        <h1 className='destaque' >{fraseImpac}</h1>
      </div>
        <p>{descrição}</p>
        <div className='container-botao'>
        <ButtonDestaque/>
        </div>
    </div>
  )
}

export default Body