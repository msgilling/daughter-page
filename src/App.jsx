/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Footer, NavBar } from './layout'
import { AboutPage, AlbumPage, NotFound, Home, Login } from './pages'
import ProtectedRoute from './routes'
import { AuthProvider } from './contexts'
import './App.css'

function App() {
  

  return (
    <>
      
        <AuthProvider>
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
        </AuthProvider>
        
    
    </>
  )
}

export default App
