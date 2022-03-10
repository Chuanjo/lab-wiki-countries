import React from 'react'
import { useParams, Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


function CountryDetails() {
    
    const {alpha3Code} = useParams()

    const [countryDetails, setCountryDetails] = useState(null)

    const getDetails = async () => {
        const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        
        setCountryDetails(response.data)
    }

    useEffect(()=>{
        getDetails()
    }, [alpha3Code])

    if (!countryDetails){
        return <div>... Loading</div>
    }

  return (
      
    <div>CountryDetails

        <h1>{countryDetails.name.common}</h1>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} alt="" />
        <h3>Capital: {countryDetails.capital}</h3>
        <p>Area: {countryDetails.area} Km2</p>
        {/* <p>{countryDetails.borders}</p> */}

        {countryDetails.borders.map((eachBorder, index)=>{
            return (
                <ul key={index+eachBorder}>
                <Link to={`/${eachBorder}`}>{eachBorder}</Link>
                </ul>
            )
        })}

    </div>


  )
}

export default CountryDetails