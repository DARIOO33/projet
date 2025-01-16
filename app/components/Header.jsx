"use client";
import "./components.css";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
import Link from "next/link";
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
    if (pathname == "/"){
      setActiveIndex(1)
    }
    if (pathname == "/solutions"){
      setActiveIndex(2)
    }
    else if(pathname == "/about"){
      setActiveIndex(3)

    }else if(pathname == "/contact"){
      setActiveIndex(4)
    }
    
  },[pathname])
  const handleClick = () => {
    setActiveMenu(false);
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
          <Link href={"/"}>
          <h1 className="color-primary">
            {companyName}
          </h1>
            </Link>
        </div>

        <ul className={activeMenu ? "active" : ""}>
          <li>
            <Link href={"/"}
              className={activeIndex == 1 ? "active" : ""}
              onClick={() => handleClick(1, "/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link href={"/solutions"}
              className={activeIndex == 2 ? "active" : ""}
              onClick={() => handleClick(2, "/solutions")}
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link href={"/about"}
              className={activeIndex == 3 ? "active" : ""}
              onClick={() => handleClick(3, "/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
            href={"/contact"}
              className={activeIndex == 4 ? "active" : ""}
              onClick={() => handleClick(4, "/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="login-signup">
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
