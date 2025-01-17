"use client"
import Form from "next/form";
import Input from "../../components/Input";
import SecondaryButton from "../../components/SecondaryButton";
import Link from "next/link";
import { useState } from "react";
export default (params) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  return (
    <Form className="form" action="/search">
      <h2>Sign up</h2>
      <Input setValue={setEmail} value={email} type="text" placeholder="Enter your name" label="Fullname" />
      <Input setValue={setName} value={name} type="email" placeholder="Enter your email" label="Email" />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Enter your password"
        label="Enter your password"
        
      />
      <Input
        value={confirmpassword}
        setValue={setConfirmpassword}
        type="password"
        placeholder="Confirm your password"
        label="Confirm your password"
        
      />
      <p style={{ width: "60%", margin: "8px auto " }}>Already Have An Account ? <Link href={"/login"}>Sign In</Link></p>

      <div className="secondarybtn">
    <button type="submit">
   Sign in
    </button>
    </div>

    </Form>
  );
};
