"use client"
import Form from "next/form";
import Input from "../../components/Input";
import SecondaryButton from "../../components/SecondaryButton";
import Link from "next/link";
import { useState } from "react";
export default (params) => {
  const [email, setEmail] = useState("")
  const [password, setPasswrod] = useState("")
  const handleSubmit = () =>{
    
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Sign in</h2>

      <Input
        setValue={setEmail}
        value={email} type="email" placeholder="Enter your email" label="Email" />
      <Input
        setValue={setPasswrod}
        value={password}
        type="password"
        placeholder="Enter your password"
        label="Enter your password"
      />
      <p style={{ width: "60%", margin: "8px auto " }}>You Don't Have An Account ? <Link href={"/register"}>Create New Account</Link></p>
      <SecondaryButton content="Sign in" />
    </form>
  );
};
