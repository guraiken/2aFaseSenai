import { useState } from 'react'
import './App.css'

function App() {
  const[pessoas, setPessoas] = useState([
    {id: 1, nome: "Dona Bete", idade: 72, preco: 170},
    {id: 2, nome: "Dr Auzio", idade: 78, preco: 250},
    {id: 3, nome: "Sarumano", idade: 68, preco: 122},
    {id: 4, nome: "Dona Bete", idade: 72, preco: 170},
    {id: 32, nome: "Dr Auzio", idade: 78, preco: 250},
    {id: 5, nome: "Sarumano", idade: 68, preco: 122},
    {id: 66, nome: "Dona Bete", idade: 72, preco: 170},
    {id: 22, nome: "Dr Auzio", idade: 78, preco: 250},
    {id: 13, nome: "Sarumano", idade: 68, preco: 122},
  ])

  function cadastrar(){
    let pessoa = {
      id: Date.now(),
      nome: prompt("Digite o nome"),
      idade: Number(prompt("Digite a idade")),
      preco: Number(prompt("Digite o preço"))
    }
    // pessoas.push(pessoa) nao fazer isso em usestate
    
    setPessoas([pessoa, ...pessoas])
  }

  function editar(id){
    let pessoaEditada = {
      id: Date.now(), 
      nome: prompt("digite um nome"), 
      idade: Number(prompt("digite a idade")), 
      preco: Number(prompt("digite o preço"))
    }

    const edição = pessoas.map(pessoa => pessoa.id == id ? pessoaEditada : pessoa)
    setPessoas([...edição])

  }

  function excluir(id){
    const novasPessoas = pessoas.filter(pessoa => pessoa.id !== id)
    setPessoas([...novasPessoas])
  }

  return (
    <div>
      <h1>Arrays</h1>  
      <button onClick={cadastrar}>Cadastrar Pessoas</button>
      <div className='card-container'>
      {pessoas.map((pessoa) => (
        <div key={pessoa.id} className='card-pessoa'>
          <h3>{pessoa.nome}</h3>
          <p>Idade: {pessoa.idade}</p>
          <label htmlFor="">Preço: {pessoa.preco}</label>
          <button onClick={() => editar(pessoa.id)}>Editar</button>
          <button onClick={() => excluir(pessoa.id)}>Excluir</button>
        </div>
      ))}
    </div>
    
    </div>
  )
}

export default App
