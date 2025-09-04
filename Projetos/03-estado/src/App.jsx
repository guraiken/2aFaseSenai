import { useState } from "react"
import './App.css'
import Comerciante from "./components/Comerciante"
import Notaaluno from "./components/Notaaluno"
import Porquinho from "./components/Porquinho"
import Copomeio from "./components/Copomeio"
import Copomeiocheio2 from "./components/Copomeiocheio2"
import Salariogarcom from "./components/Salariogarcom"

function App() {
  const[numero, setNumero] = useState(0)
  const[username, setUsername] = useState()

  function incrementar(){
    setNumero(numero + 1)
  }
  
  function decrementar(){
    setNumero(numero - 1)
  }

  function reset(){
    setNumero(0)
  }

  
  function logar(){
    let nome = prompt("digite seu nome")
    setUsername(nome)
    
  }

  return (
    <>
      {username && 
      <p className="user">
        Olá {username}
      </p>}
      {/* <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>  */}
      <button onClick={logar}>login</button>
      <h1>Estados</h1>
      <button onClick={decrementar}>-</button>
      {numero}
      <button onClick={incrementar}>+</button>
      <div></div>
      <button onClick={reset}>Reset</button>
      <Comerciante />
      <Notaaluno />
      <Porquinho />
      <Copomeio />
      <Copomeiocheio2 />
      <Salariogarcom />
    </>
  )
}

export default App
