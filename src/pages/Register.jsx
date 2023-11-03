import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customAxios } from "../utils";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  try {
    const response = await customAxios.post(`/auth/local/register`, data);
    console.log(response);
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message || "Please check the data again";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="cart w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Sign up</h4>
        <FormInput
          type="username"
          name="username"
          placeholder="Enter username"
          label="Username"
        />

        <FormInput
          type="email"
          name="email"
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
        <p className="text-center">
          Already a member?{" "}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
