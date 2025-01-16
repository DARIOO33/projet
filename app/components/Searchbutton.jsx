"use client"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"

export default ({country,region,value}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const handleclick = (e) => {
    e.preventDefault()
    if (searchParams.get('date') == value && searchParams.get('country') == country && searchParams.get('region') == region){
      return 
    }
    if (country=="" || region =="" || value==""){
      alert("Check your informations")
      return
    }
    router.push(`results?country=${country}&region=${region}&date=${value}`)
  }
  return(
    <div className="primarybtn">
    <button onClick={(e) => handleclick(e)}  type="submit">
        Search Now
    </button>
    </div>
  )
}
