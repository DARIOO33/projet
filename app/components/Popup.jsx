import './components.css'
import { IoIosCloseCircleOutline } from "react-icons/io";

export default ({activelogin,setActivelogin}) => {
  return(
    <div className="log-card">
        <div className="close-icon-container">
            <div className="close-icon" onClick={() => setActivelogin(false)}>

        <IoIosCloseCircleOutline />
            </div>

        </div>
        <ul>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </div>
  )
}
