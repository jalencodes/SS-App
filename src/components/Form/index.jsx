import { useState, useEffect} from 'react'
import { redirect, redirectDocument } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Form({artistsearch}){

    const [formData, setFormData] = useState({
        searchTerm: ''})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        artistsearch(formData.searchTerm)
    }


    return (
        <>
            <input type="text" name="searchTerm" placeholder="Who's the lucky artist?" value={formData.searchTerm} id="" onChange={handleChange}/>
            <Link to={`/search/artist/${formData.searchTerm}`}>Let's Go</Link> 
        </>

    )
}

export default Form;