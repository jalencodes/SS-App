import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function SignUpForm()
{
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        city: '',
        state: ''
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit()
    {
        const requestURL = "http://localhost:8888/api/user/signup"
        const response = await axios.post(requestURL, formData)
        const user = response.data
        console.log(user);
    }

    


    return (
        <>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Name" onChange={handleChange} name="name" />
                <label>Email Address</label>
                <input type="text" placeholder="Enter email" onChange={handleChange} name="email"/>
                <label>Username</label>
                <input type="text" placeholder="Username" onChange={handleChange} name="username" />
                <label>Password</label>
                <input type="text" placeholder="Password" onChange={handleChange} name="password" />
                <label>City</label>
                <input type="text" placeholder="City" onChange={handleChange} name="city" />
                <label>State</label>
                <input type="text" placeholder="State" onChange={handleChange} name="state" />
                <button onClick={handleSubmit}>Submit</button>

            </div>

            <Link to="/signin">Already in the Setlist Seeker Family? Sign In Here! </Link>
        </>
    )
}