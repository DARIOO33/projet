"use client"
import "./components.css"
import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


import Popup from "./Popup";

export default (params) => {
    const companyName = "Company Name"; 
    const [acitvelogin,setActivelogin] = useState(false)
    const [activeMenu,setActiveMenu] = useState(false)
    const [activeLogo,setActiveLogo] = useState(false)
    useEffect(() => {
       setActiveLogo(activeMenu)

    },[activeMenu])
  return (
    <>
    <header>
        <div className="burgerMenu" onClick={() => setActiveMenu(!activeMenu)}>
        {!activeMenu && <RxHamburgerMenu />}
        {activeMenu && <IoMdClose />}

        </div>
        <h1 className={activeLogo ? "active color-primary" :"color-primary"  }>
           {companyName}
        </h1>

        <ul className={activeMenu ? "active" : ""}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <div className="login-signup" >
            <p onClick={() => setActivelogin(!acitvelogin)}>

            <BsPersonCircle />
            </p>
        </div>
        
    </header>
    {acitvelogin && <Popup acitvelogin={acitvelogin} setActivelogin={setActivelogin}/>}
    </>
  )
}
