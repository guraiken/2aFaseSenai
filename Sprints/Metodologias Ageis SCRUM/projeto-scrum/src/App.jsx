import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import ButtonDestaque from './components/ButtonDestaque'

function App() {


  return (
    <>
    <Header nomeAplicacao={"Paideia"} link1={"CURSOS"} link2={"QUEM SOMOS?"} link3={"CONTATO"}/>
    <Body/>
    </>
  )
}

export default App
