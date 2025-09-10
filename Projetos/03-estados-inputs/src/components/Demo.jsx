import { useState } from 'react'
import "./Demo.css"

function Demo() {
    const[inputUsername,setInputUsername] = useState('')
    const[inputSenha, setInputSenha] = useState('')

    function fazerLogin(){
        alert(`Nome: ${inputUsername}\nSenha: ${inputSenha}`)
    }

  return (
    <div className='demo-container'>
        <h2>Demo</h2>
        <label htmlFor="">Username</label>
        <input type="text" 
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
        />
        <label htmlFor="">Senha</label>
        <input type="password" 
            value={inputSenha}
            onChange={(e) => setInputSenha(e.target.value)}
        />
        <button onClick={fazerLogin}>Login</button>
    </div>
  )
}

export default Demo