import Form from "next/form";
import Input from "../../components/Input";
import SecondaryButton from "../../components/SecondaryButton";

export default (params) => {
  return (
    <Form className="form" action="/search">
      <h2>Sign in</h2>

      <Input type="email" placeholder="Enter your email" label="Email" />
      <Input
        type="password"
        placeholder="Enter your password"
        label="Enter your password"
      />
      <SecondaryButton content="Sign in" />
    </Form>
  );
};
