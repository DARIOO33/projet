"use client"
import "./components.css"
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";

import Popup from "./Popup";
import Blank from "./Blank";

export default (params) => {
  const router = useRouter()
    const companyName = "Company Name"; 
    const [acitvelogin,setActivelogin] = useState(false)
    const [activeMenu,setActiveMenu] = useState(false)
    const [activeLogo,setActiveLogo] = useState(false)
    const [activeIndex,setActiveIndex] = useState(0)
    useEffect(() => {
       setActiveLogo(activeMenu)

    },[activeMenu])

    const handleClick = (index,href) => {
      setActiveIndex(index)
      router.push(href)
    }
  return (
    <>
    <header>
        <div className="burgerMenu" onClick={() => setActiveMenu(!activeMenu)}>
        {!activeMenu && <RxHamburgerMenu />}
        {activeMenu && <IoMdClose />}

        </div>
        <div className="h1">

        <h1 onClick={() => router.push("/")} className={activeLogo ? "active color-primary" :"color-primary"  }>
           {companyName}
        </h1>
        </div>


        <ul className={activeMenu ? "active" : ""}>
            <li><a className={activeIndex == 1 ? "active" : ""} onClick={() => handleClick(1,"/")}>Home</a></li>
            <li><a className={activeIndex == 2 ? "active" : ""} onClick={() => handleClick(2,"/solutions")}>Solutions</a></li>
            <li><a className={activeIndex == 3 ? "active" : ""} onClick={() => handleClick(3,"/about")}>About</a></li>
            <li><a className={activeIndex == 4 ? "active" : ""} onClick={() => handleClick(4,"/contact")}>Contact</a></li>
        </ul>

        <div className="login-signup" >
            <div>
            <Popup />
            </div>
        </div>
    </header>
    
        {activeMenu && <Blank setActiveMenu={setActiveMenu}/>}
    </>
  )
}
