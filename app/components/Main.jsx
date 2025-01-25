import Card from "../results/Card"
import "./components.css"
import Planner from "./Planner"
import React from "react"

export default () => {

  
  return (
    <React.Fragment>
      <section>
      <div className="hero">
        
      </div>
      <Planner/>
    <div className="topact">
      <h4>
        Top Activities 
        </h4>
        <div className="top-activities">

          {/* <Card/> */}
         
        </div>
    </div>
      </section>
    </React.Fragment>
  )
}
