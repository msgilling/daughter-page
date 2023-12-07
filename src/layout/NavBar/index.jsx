import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'
import logo from '../../assets/vinyl.png'

const NavBar = () => {
  return (
    <>
      {/* <main > */}
          <header className="navbar">
            <nav>
              <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/discography">Discography</NavLink>
              </div>
              <div className="nav-logo">
                <NavLink to="/">
                  <img src={logo} alt="vinyl record logo" height="40rem"/>
                </NavLink>
              </div>
              
            </nav>
          </header>
        {/* </main> */}
        <Outlet/>
    
    </>
  )
}

export default NavBar
