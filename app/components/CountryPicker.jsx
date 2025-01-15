"use client"
import { CountryDropdown, RegionDropdown } from "react-country-region-selector"
import { useState } from "react"

export default ({country,setCountry,region,setRegion}) => {
   
    const onChangeCountry = (val) => {

        setCountry(val);
        setRegion('');
        if (!val) {
            setRegion('');
        }
    };
    return (
        <>
            <CountryDropdown value={country} onChange={onChangeCountry}
             style={{
                backgroundColor: 'white',
                color: 'black',
                fontSize: 16,
                borderRadius:8,
              }} />
            <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontSize: 16,

                borderRadius:8,

                  }}
            />
        </>
    )
}
