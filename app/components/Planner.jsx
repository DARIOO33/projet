"use client"
import DatePickerYearsOrder from "./DatePicker"
import CountryPicker from "./CountryPicker"
import PrimaryButton from "./PrimaryButton"
import Searchbutton from "./Searchbutton"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
export default () => {
  const searchParams = useSearchParams()
  const [value,setValue] = useState(searchParams.get('date') || "")
  const [country, setCountry] = useState(searchParams.get('country') || "");
  const [region, setRegion] = useState(searchParams.get('region') || "");  
  
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
        
        {/* <DatePickerYearsOrder value={value} setValue={setValue}/> */}
        </div>
        <Searchbutton country={country} region={region} />
      </form>
  )
}
