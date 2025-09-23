import React from 'react'
import "./Header.css"
import Logo from './Logo'


function Header({link1, link2, link3}) {
  return (
    <header className='header' >
      <Logo caminho={'./imagens/logo.png'} /> 
      <nav className='navbar'>
        <a href="">{link1}</a>
        <a href="">{link2}</a>
        <a href="">{link3}</a>
      </nav> 
      <div className='login'>
      <button>ENTRAR</button>
      </div>
    </header>
  )
}

export default Header