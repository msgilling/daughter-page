import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Login = () => {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleInput = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  


  return (
    <>
      <form 
        className="login-page-text"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text"  
            id="username"
            placeholder="Type your name"
            autoComplete="off"
            ref={inputRef}
            value={inputValue}
            onChange={handleInput}
          />
          <input type="submit" className="submit-btn" />
        </div>
      </form>
      
    </>
  )
}

export default Login
