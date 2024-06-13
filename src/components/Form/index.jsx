import { useState, useEffect } from 'react'

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
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchTerm" value={formData.searchTerm} id="" onChange={handleChange}/>
            <input type="submit" value="Search"  />
        </form>
    )
}

export default Form;