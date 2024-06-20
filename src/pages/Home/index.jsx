
import Form from '../../components/Form'
import axios from 'axios'
import { useEffect, useState } from'react'
import { Link, redirect } from'react-router-dom'
import { useParams,  } from 'react-router-dom'
import ConnectSpotify from '../ConnectSpotify'

export default function Home(){

    const [artists, setArtists] = useState([])
    const [url, setUrl] = useState('')

    const getArtists = async (artistName) => {
        try
        {
          const artistQuery = artistName.replace(' ', '+')
          redirect(`/search/artists/${artistQuery}`)

    
        } catch (error){
          console.log(error)
        }
      }

    async function connectSpotify()
    {
        const requestURL = `http://localhost:8888/api/spotify/login`
        const response = await axios.get(requestURL)
        const data = response.data
        // console.log(data);
        setUrl(data)
    }

    return (
        <div> 
            <p>
                If you love going to a live show, and being the most prepared then this is the place for you.
                We want you to make sure you can sing, yell, rap every lyric back to your favorite artists.
            </p>
            {/* <Link onClick={connectSpotify} to={url}>Connect to Spotify</Link> */}
            {/* <Form artistsearch={getArtists}/> */}
        </div>
    )
}