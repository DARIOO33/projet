import "./components.css"
import Planner from "./Planner"
import React from "react"
export default ({region}) => {

  
  return (
    <React.Fragment>
      <section>
      <div className="hero">
        
      </div>
      <Planner region={region}/>
      </section>
    </React.Fragment>
  )
}
