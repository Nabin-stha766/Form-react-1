import { useState } from 'react'

import './App.css'
import Form from '../component/Form'
import Button from '../component/Button'

function App() {


  const [isLogin, setIsLogin] = useState(true)
  function toggleLogin() {
    setIsLogin(prevLogin => !prevLogin)
  }
  return (
    <>
      <div className='form-container'>
        <div className='head-buttons'>
          <Button extraClass={`login-btn ${isLogin ? 'active' : 'null'}`} handleClick={toggleLogin} text="Login" />
          <Button extraClass={`sign-up-btn ${!isLogin ? 'active' : 'null'} `} handleClick={toggleLogin} text="Sign Up" />
        </div>
        {isLogin ? <Form submitText="Login" extraClass='display' isLogin={isLogin} /> : <Form submitText="Sign Up" hideText="hide-text" />}
      </div>
    </>
  )
}

export default App
