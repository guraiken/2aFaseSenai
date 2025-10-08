import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

function Home() {
  // const[pokemon, setPokemon] = useState([])

  // useEffect(()=> {

  //   async function name() {
  //     const resp = await fetch("https://pokeapi.co/api/v2/pokemon")

  //     const data = await resp.json()
  //     console.log(data);
      

  //     if (!resp.ok) {
  //       return
        
  //     }

  //     setPokemon(data.results)
  //   }
  //   name()
    

  // },[])
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>Home</h1>
        {/* {pokemon.length >0 && pokemon.map(pokemon=> (
          <p>{pokemon.name}</p>
          ))} */}
      </div>
    </div>

  )
}

export default Home