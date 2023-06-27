/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './layout'
import { AboutPage, AlbumPage, NotFound, Home } from './pages'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar /> } >
          <Route index element={<Home /> }/>
          <Route path="/about" element={<AboutPage /> } />
          <Route path="/discography" element={<AlbumPage /> } />
          <Route path="*" element={<NotFound /> } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
