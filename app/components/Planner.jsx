"use client"
import DatePickerYearsOrder from "./DatePicker"
import CountryPicker from "./CountryPicker"
import PrimaryButton from "./PrimaryButton"
import Searchbutton from "./Searchbutton"
import { useState } from "react"
export default ({reg}) => {

  const [country, setCountry] = useState('Tunisia');
  const [region, setRegion] = useState(reg);
  return (
    <form className="planning-informations">
      <h1>
        Complete The Informations :
      </h1>
        <div className="inputs">


        <CountryPicker 
        country={country} 
        setCountry={setCountry}
        region={region} 
        setRegion={setRegion}/>
        
        <DatePickerYearsOrder/>
        </div>
        <Searchbutton country={country} region={region}/>
      </form>
  )
}
