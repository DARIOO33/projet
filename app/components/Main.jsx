import React from "react"
import "./components.css"
import Input from "./Input"
import PrimaryButton from "./PrimaryButton"
export default (params) => {
  return (
    <React.Fragment>
      <section>
        <h2>One app for all your travel planning needs</h2>
        <h3>Create detailed itineraries, explore user-shared guides, and manage your bookings seamlessly — all in one place.</h3>
     <Input/>
     <PrimaryButton/>
      </section>
    </React.Fragment>
  )
}
