import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import Card from './Card';



function Inicio () {
    const [query, setQuery] = useState("")
    const [breweries, setBreweries] = useState([])


    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault()
        axios.get(`https://api.openbrewerydb.org/breweries?by_name=${query}`)
        .then(response => setBreweries(response.data))
    }

return(
    <div>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Cocktails Web</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form class="d-flex" role="search">
        <input onChange={handleChange} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={handleClick} class="btn btn-outline-success" type="submit">Buscar recetas</button>
      </form>
    </div>
  </div>
</nav>
    <div>
        {breweries.map((brewery) => <Card brewery={brewery}/>)}
    </div>

</div>
)}

export default Inicio