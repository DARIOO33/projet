'use client'
import "./results.css"
import Main from "../components/Main"
import { useSearchParams } from "next/navigation"
import Card from "./Card"
import array from "../data/data1"
import Planner from "../components/Planner"
export default (params) => {
  
  const searchParams = useSearchParams()
  const country = searchParams.get('country')
  const region = searchParams.get('region')
  const data = (array.filter(d => d.region == region)) || [""];
  // const date = searchParams.get('date')
  
  

  return (
    <>
   <section>
         <div className="hero">
           
         </div>
         <Planner/>
         </section>
    <div className="card-container">
    {data.map((d) => {
  return d.activities.map((act, index) => {
    return <Card key={index} name={act.activity} location={act.location} timing={act.timing} image={act.image} cat={act.category}/>;
  });
})}

    
    </div>
    </>
  )
}
