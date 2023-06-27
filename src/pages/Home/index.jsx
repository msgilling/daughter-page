import React from 'react'
import './style.css'

const Home = () => {
  return (
    <div className="home-page-text">
      <h1>Daughter</h1>
      <form>
        <label htmlFor="">Enter Password</label>
        <input type="text" placeholder="Type here "/>
      </form>
    </div>
  )
}

export default Home
