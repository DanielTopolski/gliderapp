import { useRef } from 'react'
//import './App.css'
import React from "react";
import ReactDOM from "react-dom/client";
import bcrypt from 'bcryptjs-react'


function App() {
  const salt = bcrypt.genSaltSync(10)
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  function handleLoginForm() {
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    const hashedPassword = bcrypt.hashSync(password, salt) // hash created previously created upon sign up
    console.log(email, password, hashedPassword);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <form>
          <input style={{ padding: '15px', borderRadius: '10px', margin: '10px' }} ref={emailInputRef} type='email' placeholder='Email' />
          <input style={{ padding: '15px', borderRadius: '10px', margin: '10px' }} ref={passwordInputRef} type='password' placeholder='Password' />
          <button
            type='submit'
            style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
            onClick={e => {
              e.preventDefault()
              handleLoginForm() 
            }}>
            Log In
          </button>
        </form>
        <span>Your new SALT: {salt}</span>
        <br />
        <span>
          Save this Salt, UPON sign up <br /> if you refresh it will generate a new SALT!!!
        </span>
      </header>
    </div>
  )
}


export default App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);