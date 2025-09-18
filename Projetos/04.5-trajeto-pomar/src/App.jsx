import { useState } from 'react'
import './App.css'

function App() {
  const[inputMaca, setInputMaca] = useState(0)
  const[inputLaranja, setInputLaranja] = useState(0)
  const[inputBergamota, setInputBergamota] = useState(0)
  const[inputBanana, setInputBanana] = useState(0)
  const[inputPera, setInputPera] = useState(0)
  const[total, setTotal] = useState()

  function calcular(){
    let maca = inputMaca * 1.5
    let laranja = inputLaranja * 2
    let bergamota = inputBergamota * 1
    let banana = inputBanana * 1.2
    let pera = inputPera * 0.5
    let total = maca + laranja + bergamota + banana + pera
    setTotal(total)
    console.log(total)
  }

  return (
    <>
    <div className='app-container'>
    <h1>Trajeto Pomar</h1>
      <div className='app-a'>
        <table className='table-frutas'>
            <th>Fruta
            <tr>Maçã</tr>
            <tr>Laranja</tr>
            <tr>Bergamota</tr>
            <tr>Banana</tr>
            <tr>Pera</tr>
          </th>
          <th>Preço
            <tr>R$ 1,50</tr>
            <tr>R$ 2,00</tr>
            <tr>R$ 1,00</tr>
            <tr>R$ 1,20</tr>
            <tr>R$ 0,50</tr>
          </th>
          <th>Quantidade
            <tr><input type="number" 
            value={inputMaca}
            onChange={(e) => setInputMaca(e.target.value)}
            /></tr> 
            <tr><input type="number" 
            value={inputLaranja}
            onChange={(e) => setInputLaranja(e.target.value)}
            /></tr> 
            <tr><input type="number" 
            value={inputBergamota}
            onChange={(e) => setInputBergamota(e.target.value)}
            /></tr> 
            <tr><input type="number" 
            value={inputBanana}
            onChange={(e) => setInputBanana(e.target.value)}
            /></tr> 
            <tr><input type="number" 
            value={inputPera}
            onChange={(e) => setInputPera(e.target.value)}
            /></tr> 
          </th>
        </table>
        <button onClick={calcular}>Calcular</button>
        {total && <div>
          <h2>Resultado do carrinho R${total}</h2>
          <p>Frutas pegas:</p>
          {total &&
            <div> 
            {inputMaca != 0 ? <p>{inputMaca} Maçã(s)</p> : <span></span>} 
            {inputLaranja != 0 ? <p>{inputLaranja} Laranja(s)</p> : <span></span>}
            {inputBergamota != 0 ? <p>{inputBergamota} Bergamota(s)</p> : <span></span>}
            {inputBanana != 0 ? <p>{inputBanana} Banana(s)</p> : <span></span>}
            {inputPera != 0 ? <p>{inputPera} Pera(s)</p> : <span></span>}       
            </div>
          }
        </div>
        }
      </div>
    </div>
    </>
  )
}

export default App
