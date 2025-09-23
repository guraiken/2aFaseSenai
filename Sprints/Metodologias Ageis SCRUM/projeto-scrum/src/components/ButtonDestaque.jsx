import React from 'react'
import './ButtonDestaque.css'

function ButtonDestaque({func}) {


  return (
    <button className='button-destaques' onClick={func} >COMECE AGORA</button>
)
}

export default ButtonDestaque