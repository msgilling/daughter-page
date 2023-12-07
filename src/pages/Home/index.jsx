import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home-page-text">
      <h1>Hi, {} welcome to the Daughter app</h1>
        <input className="enter-btn" type="submit" value="Enter" onClick={() => navigate('/about')}/>
      
    </div>
  )
}

export default Home
