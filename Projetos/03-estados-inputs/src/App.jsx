import './App.css'
import { useState } from 'react'
import Demo from './components/Demo'
import Gradescida from './components/Gradescida'
import Conversor from './components/Conversor'
import Moedas from './components/Moedas'

function App() {

  return (
    <>
    <h1>Inputs</h1>
    <Demo />
    <Gradescida />
    <Conversor />
    <Moedas />
    </>
  )
}

export default App
