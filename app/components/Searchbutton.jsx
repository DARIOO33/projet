"use client"
import { useRouter } from "next/navigation"
export default ({country,region}) => {
  const router = useRouter()
  const handleclick = (e) => {
    e.preventDefault()
    if (country=="" || region =="" ){
      alert("Check your informations")
      return
    }
    router.push(`results?country=${country}&region=${region}&date=01-01-02`)
  }
  return(
    <div className="primarybtn">
    <button onClick={(e) => handleclick(e)}  type="submit">
        Search Now
    </button>
    </div>
  )
}
