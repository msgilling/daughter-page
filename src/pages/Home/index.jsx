import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'

const Home = () => {
  const { user } = useAuth()
  const navigate = useNavigate()


  return (
    <div className="home-page-text">
      <h2>Hi {user},</h2> 
      <h1>Welcome to the Daughter app</h1>
      <input className="enter-btn" type="submit" value="Enter" onClick={() => navigate('/about')}/>
      
    </div>
  )
}

export default Home
