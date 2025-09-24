import { useState } from 'react'
import './App.css'
import Oracao from './components/Oracao'

function App() {
  const[texto, setTexto] = useState("")
  
  return (
    <>
    <header className='header'>
      <button onClick={()=> setTexto("programador")}>Do programador</button>
      <button onClick={()=> setTexto("estudante")}>Do estudante</button>
      <button onClick={()=> setTexto("resiliente")}>Do resiliente</button>
      <button onClick={()=> setTexto("cansado")}>Do Cansado</button>
      <button onClick={()=> setTexto("aprendiz")}>Do aprendiz</button>
    </header>
    <div className='conteudo-container'> 
    <Oracao texto={texto}/>
    </div>
    </>
  )
}

export default App
