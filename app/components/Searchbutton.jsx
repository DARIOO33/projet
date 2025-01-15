"use client"
export default (params) => {
  const handleclick = (e) => {
    e.preventDefault()
  }
  return(
    <div className="primarybtn">
    <button onClick={(e) => handleclick(e)}  type="submit">
        Search Now
    </button>
    </div>
  )
}
