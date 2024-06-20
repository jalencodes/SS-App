import { useState, useRef, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Context } from "../../App"


export default function SignInForm()
{

    const [user, setUser] = useContext(Context)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit()
    {
        try
        {
            const requestURL = "http://localhost:8888/api/user/login"
            const response = await axios.post(requestURL, formData)
            const userData = response.data
            setUser({
                name: userData.name,
                username: userData.username,
                email: userData.email,
                city: userData.city,
                state: userData.state,
            })
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <div>
                <label>Email Address</label>
                <input type="text" placeholder="Enter email" onChange={handleChange} name="email"/>
                <label>Password</label>
                <input type="password" placeholder="Password" onChange={handleChange} name="password" />
                <button onClick={handleSubmit}>Submit</button>
            </div>

            <Link to="/signup">Not a member? Join the Setlist Seeker Family </Link>
        </>
    )
}