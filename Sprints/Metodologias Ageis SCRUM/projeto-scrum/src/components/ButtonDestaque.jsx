import React from 'react'
import './ButtonDestaque.css'

function ButtonDestaque({func}) {


  return (
    <button className='button-destaques' onClick={func} >INSCREVA-SE</button>
)
}

export default ButtonDestaque