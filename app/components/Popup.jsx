"use client"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import { BsPersonCircle } from "react-icons/bs";
import { useRouter } from 'next/navigation'

export default function Popup() {
  const router = useRouter()
  return (
    <Dropdown className="log-card">
      <DropdownTrigger variant="bordered">
        <p><BsPersonCircle/></p>
      </DropdownTrigger>
      <DropdownMenu >
        <DropdownItem key="login" ><button onClick={() => router.push('login')}>Login</button></DropdownItem>
        <DropdownItem key="register"><button onClick={() => router.push('register')}>Register</button></DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
  );
}
