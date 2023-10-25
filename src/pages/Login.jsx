import { Form } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="cart w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          name="idendifier"
          placeholder="Enter email"
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Enter password"
          label="Password"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button className="btn btn-secondary btn-block" type="button">
          Guest user
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/signup"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
