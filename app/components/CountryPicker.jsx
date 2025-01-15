"use client"
import { CountryDropdown, RegionDropdown } from "react-country-region-selector"
import { useState } from "react"

export default (params) => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const onChangeCountry = (val) => {

        setCountry(val);
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
                padding: 10,
                fontSize: 16,
                width:"25%",
                borderRadius:8,
                border:"none",
                boxShadow:"0px 7px 46px rgba(0, 0, 0, 0.17)"
              }} />
            <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    padding: 10,
                    fontSize: 16,
                width:"25%",
                marginLeft:8,
                borderRadius:8,
                boxShadow:"0px 3px 46px rgba(0, 0, 0, 0.17)"

                  }}
            />
        </>
    )
}
