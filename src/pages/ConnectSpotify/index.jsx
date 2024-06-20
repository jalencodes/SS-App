import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";


export default function ConnectSpotify()
{
    const [searchParams, setSearchParams] = useSearchParams();
    const [connectCount, setConnectCount] = useState(0)
    const code = searchParams.get("code")

    async function getToken()
    {
        if (connectCount === 0) {
            const requestURL = `http://localhost:8888/api/spotify/token?code=${code}`
            const response = await axios.get(requestURL)
            const data = response.data
            console.log(data); 
            setConnectCount(connectCount + 1)
        }
    }

    return(
        <>
            <h1>Connect to Spotify</h1>
            <button onClick={getToken}>CLick Me</button>
        </>
    )
}