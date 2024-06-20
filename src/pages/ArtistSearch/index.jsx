import { useParams } from "react-router-dom";
import axios from "axios";

async function getArtists(artistName)
{
    const requestURL = `http://localhost:8888/api/setlist/search/artist?name=${artistName}`
    const response = await axios.get(requestURL)
    const data = response.data
    console.log(data);
}

async function connectSpotify()
{
    const requestURL = `http://localhost:8888/api/spotify/login`
    const response = await axios.get(requestURL)
    const data = response.data
    console.log(data);
}

export default function ArtistSearch()
{
    const params = useParams()
    const artistName =  params.artistName
    getArtists(artistName)
    return (
        <div>
            <h1>{artistName}</h1>
            <button onClick={connectSpotify}>Connect to Spotify</button>
        </div>
    )
}