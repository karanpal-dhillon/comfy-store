import { Form } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { Link } from "react-router-dom";
import { customAxios } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const action =
  (store) =>
    async ({ request }) => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries());
      try {
        const response = await customAxios.post(`/auth/local`, data);
        store.dispatch(loginUser(response.data));
        return redirect("/");
      } catch (error) {
        const errorResponse =
          error?.response?.data?.error?.message || "some error occurred";
        toast.error(errorResponse);
        return null;
      }
    };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsDemoUser = async () => {
    try {
      const response = await customAxios.post("auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("Login as guest user");
      navigate("/");
    } catch (error) {
      const errorResponse =
        error?.response?.data?.error?.message || "some error occurred";
      toast.error(errorResponse);
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="cart w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          name="identifier"
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
        <button
          className="btn btn-secondary btn-block"
          type="button"
          onClick={loginAsDemoUser}
        >
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
