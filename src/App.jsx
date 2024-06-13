import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import axios from 'axios'

function App() {

  const [artists, setArtists] = useState([])

  const getArtists = async (artistName) => {
    try
    {
      const artistQuery = artistName.replace(' ', '+')
      const requestURL = `http://localhost:3000/api/setlist/search/artist?name=${artistQuery}`
      const response = await axios.get(requestURL)
      const data = response.data
      console.log(data);

    } catch (error){
      console.log(error)
    }
  }
  

  return (
    <>

      <h1>Setlist Seekers</h1> 
      <p>
        If you love going to a live show, and being the most prepared then this is the place for you.
        We want you to make sure you can sing, yell, rap every lyric back to your favorite artists.
      </p>

      <Form artistsearch={getArtists}/>








    </>
  )
}

export default App




