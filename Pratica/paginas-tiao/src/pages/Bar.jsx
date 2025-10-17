import { useContext, useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import "./Bar.css"
import { GlobalContext } from "../contexts/GlobalContext"
import Card from "../components/Card"

function Bar() {
    const{produtosBar, setProdutosBar} = useContext(GlobalContext) 
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
      async function pesquisa() {
        try {
          const result = await fetch("http://localhost:3000/clientes/",{
            method: 'Post',
            headers: {},
            body : {}
          })
          
          const data = await result.json()     

          setUsuarios(data)

        } catch (error) {
          console.error(error)
        }
      }
      pesquisa()
      
    }, [])

  return (
    <div className="bar-container">
        <Navbar/>
        <h1>PRODUTOS DO BAR</h1>
        <Card produto={usuarios} pagina={"bar"}></Card>
        
    </div>
  )
}

export default Bar