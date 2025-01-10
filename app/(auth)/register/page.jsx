import Form from "next/form"
import Input from "../../components/Input"
import SecondaryButton from "../../components/SecondaryButton"


export default (params) => {
  return (
   
    <Form className="form" action="/search">
      <h2>Sign up</h2>
      <Input
      type="text"
      placeholder="Enter your name"
      label="fullname"
      />
     <Input
      type="email"
      placeholder="Enter your email"
      label="email"
      />
      <Input
      type="password"
      placeholder="Enter your password"
      label="Enter your password"
      />
       <Input
      type="password"
      placeholder="Confirm your password"
      label="Confirm your password"
      />
<SecondaryButton content="Sign up"/>

</Form>
    
  )
}
