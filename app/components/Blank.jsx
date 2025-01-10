import "./components.css"
export default ({setActiveMenu}) => {
  return (
    <div className="blank" onClick={() => setActiveMenu(false)}></div>
  )
}
