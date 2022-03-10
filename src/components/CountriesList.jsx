import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'


function CountriesList() {

    const [listOfCountries, setListOfCountries] = useState([])

    const getCountries = async () =>{
        const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
        console.log(response.data)
        setListOfCountries(response.data)
    }

    useEffect(()=>{
        getCountries()
    },[])

    if (!listOfCountries){
        return <div>... Loading</div>
    }
    
  return (
    <div>
        <h1>Countries list</h1>

        {listOfCountries.map((eachCountry, index)=>{

            return (
                <div key={index + eachCountry.alpha3Code}>
                    <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
                </div>
            )
        })}



    </div>
  )
}

export default CountriesList

