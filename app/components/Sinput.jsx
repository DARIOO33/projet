import './components.css'
import { IoSearchSharp } from "react-icons/io5";

export default (params) => {
  return (
    <div className="customInput">
        <span className='searchIcon'>
        <IoSearchSharp />
        </span>
        <input type="text" placeholder="Enter Your Destination" />
    </div>
  )
}