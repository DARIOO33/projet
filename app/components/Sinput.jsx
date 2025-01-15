import './components.css'
import { IoSearchSharp } from "react-icons/io5";

export default ({type,placeholder,list}) => {
  return (
    <div className="customInput">
        <span className='searchIcon'>
        {/* <IoSearchSharp /> */}
        </span>
        <input list={list} type={type} placeholder={placeholder} maxLength={20} />
    </div>
  )
}