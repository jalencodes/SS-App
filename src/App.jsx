import { useState } from 'react'
import axios from 'axios'
import {Route, Routes} from 'react-router-dom'


import './App.css'
import NavBar from './components/NavBar'
import Form from './components/Form'
import Home from './pages/Home'
import Concerts from './pages/Concerts'
import SignIn from './pages/Sign-In'
import SignUp from './pages/Sign-Up'
import ArtistSearch from './pages/ArtistSearch'
import { useParams } from 'react-router-dom'
// import ConnectSpotify from './pages/ConnectSpotify'


function App() {

  return (
    <>
      <NavBar />


      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/concerts' element={<Concerts/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        {/* <Route path='/search/artist/:artistName' element={<ArtistSearch/>}></Route> */}
        {/* <Route path='/connectSpotify' element={<ConnectSpotify/>}></Route> */}
      </Routes>

      










    </>
  )
}

export default App




