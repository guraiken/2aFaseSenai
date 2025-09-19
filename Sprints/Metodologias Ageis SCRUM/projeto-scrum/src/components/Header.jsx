import React from 'react'
import "./Header.css"
import Logo from './Logo'


function Header({nomeAplicacao}) {
  return (
    <header className='header' ><Logo caminho={'./imagens/logo.png'} /> <h2>{nomeAplicacao}</h2> </header>
  )
}

export default Header