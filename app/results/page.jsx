'use client'
import "./results.css"
import Main from "../components/Main"
import { useSearchParams } from "next/navigation"
import Card from "./Card"
export default (params) => {
  const searchParams = useSearchParams()
  const country = searchParams.get('country')
  const region = searchParams.get('region')
  const date = searchParams.get('date')
  

  return (
    <>
    <Main region={region}/>
    <div className="card-container">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </>
  )
}
