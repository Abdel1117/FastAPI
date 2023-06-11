import {React, useState } from 'react';
import {Routes, Route } from "react-router-dom";
import Accueil from './Pages/Accueil/Accueil';
import Connexion from './Pages/Connexion/Conexion';
import NavBarre from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
          <NavBarre />
          <main className='min-vh-100 '>
            <Routes>
              <Route path='/' element={<Accueil />} />
              <Route path='/connexion' element={<Connexion />} />

            </Routes>
          </main>
          <Footer />  
    </>
  )
}

export default App
