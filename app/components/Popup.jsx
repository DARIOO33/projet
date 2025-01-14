"use client"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import { BsPersonCircle } from "react-icons/bs";
import { useRouter } from 'next/navigation'

export default function Popup({setActiveIndex}) {
  const router = useRouter()

  const handleClick = (href) => {
    setActiveIndex(0);
    router.push(href);
  };

  return (
    <Dropdown className="log-card">
      <DropdownTrigger variant="bordered">
        <p><BsPersonCircle/></p>
      </DropdownTrigger>
      <DropdownMenu >
        <DropdownItem key="login" ><button onClick={() => handleClick("login")}>Login</button></DropdownItem>
        <DropdownItem key="register"><button onClick={() => handleClick("register")}>Register</button></DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
  );
}
