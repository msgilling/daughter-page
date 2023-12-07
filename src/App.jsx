/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, NavBar } from './layout'
import { AboutPage, AlbumPage, NotFound, Home, Login } from './pages'
import ProtectedRoute from './routes'

function App() {
  

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
            <Route index element={<Home /> }/>


          </Route>
          <Route path="/" element={<NavBar /> } >
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<AboutPage /> } />
            <Route path="/discography" element={<AlbumPage /> } />
            <Route path="*" element={<NotFound /> } />
          </Route>
        </Routes>
      </div>
        <Footer/>
    
    </>
  )
}

export default App
