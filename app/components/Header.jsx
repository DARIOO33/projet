"use client";
import "./components.css";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

import Popup from "./Popup";
import Blank from "./Blank";
import SecondaryButton from "./SecondaryButton";

export default (params) => {
  const router = useRouter();
  const pathname = usePathname()

  const companyName = "Company Name";
  const [acitvelogin, setActivelogin] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeLogo, setActiveLogo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    console.log(activeMenu);
    setActiveLogo(activeMenu);
  }, [activeMenu]);
  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);
  useEffect(()=>{
    console.log(pathname);
    
    if (pathname == "/solutions"){
      setActiveIndex(2)
    }
    else if(pathname == "/about"){
      setActiveIndex(3)

    }else if(pathname == "/contact"){
      setActiveIndex(4)
    }
    
  },[pathname])
  const handleClick = (index, href) => {
    setActiveMenu(false);
    setActiveIndex(index);
    router.push(href);
  };
  return (
    <>
      <header>
        <div
          className={activeMenu ? "burgerMenu acti" : "burgerMenu"}
          onClick={() => setActiveMenu(!activeMenu)}
        >
          {!activeMenu && <RxHamburgerMenu />}
          {activeMenu && <IoMdClose />}
        </div>
        <div className="h1">
          <h1
            onClick={() => router.push("/")}
            className={activeLogo ? "active color-primary" : "color-primary"}
          >
            {companyName}
          </h1>
        </div>

        <ul className={activeMenu ? "active" : ""}>
          <li>
            <a
              className={activeIndex == 1 ? "active" : ""}
              onClick={() => handleClick(1, "/")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={activeIndex == 2 ? "active" : ""}
              onClick={() => handleClick(2, "/solutions")}
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              className={activeIndex == 3 ? "active" : ""}
              onClick={() => handleClick(3, "/about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={activeIndex == 4 ? "active" : ""}
              onClick={() => handleClick(4, "/contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="login-signup">
          <div className="language">
            <select name="" id="">
              <option value="1">En</option>
              <option value="2">Fr</option>
            </select>
          </div>
          <div className="authbtns">
            <button onClick={() => router.push("/register")}>Sign up</button>
            <button onClick={() => router.push("/login")}>Sign in</button>
          </div>
        </div>
      </header>

      {activeMenu && <Blank setActiveMenu={setActiveMenu} />}
    </>
  );
};
