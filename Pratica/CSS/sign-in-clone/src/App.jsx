import './App.css'

function App() {

  return (
    <div className='page-container'>
      
      <div className='page-left'>
        <div className='left-signin'>
          <h1>Sign In</h1>
        </div>
        <div className='left-logos'>
          <img src="./images/fb-icon.png" alt="" width={"8%"}/>
          <img src="./images/twitter-icon.png" alt="" width={"8%"}/>
          <img src="./images/ig-icon.png" alt="" width={"8%"}/>
        </div>
        <div className='left-bottom'>
          <p>or use your account</p>
          <div className='bottom-inputs'>
          <input type="text" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          </div>
          <h3>Forgot Your Password</h3>
          <button>SIGN IN</button>
        </div>
      </div>

      <div className='page-right'>
        <div className='right-middle'>
          <h1>Hello, Friend!</h1>
          <span>Enter your details and start journey with us!</span>
        </div>
        <div className='right-button'>
          <button>SIGN UP</button>
        </div>
      </div>

    </div>
  )
}

export default App
