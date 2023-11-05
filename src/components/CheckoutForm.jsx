import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { clearCart } from "../features/cart/cartSlice";
import { customAxios, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action =
  (store, queryClient) =>
    async ({ request }) => {
      const formData = await request.formData();
      const { name, address } = Object.fromEntries(formData.entries());
      const user = store.getState().user.user;
      const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;
      const data = {
        name,
        address,
        cartItems,
        orderTotal: formatPrice(orderTotal),
        chargeTotal: orderTotal,
        numItemsInCart,
      };
      try {
        await customAxios.post(
          "/orders",
          { data },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          },
        );
        queryClient.removeQuery(["orders"]);
        store.dispatch(clearCart());
        return redirect("/orders");
      } catch (error) {
        console.error(error);
        const errorResponse =
          error?.response?.data?.error?.message ||
          "There was an error, please try again later";
        toast.error(errorResponse);
        if (error?.response?.status === 401 || error?.response?.status === 403) {
          return redirect("/login");
        }
        return null;
      }
    };
const CheckoutForm = () => {
  return (
    <Form method="POST">
      <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
      <FormInput
        label="First Name"
        type="text"
        placeholder="Enter first name"
        name="name"
      />
      <FormInput
        label="Address"
        type="text"
        placeholder="Address"
        name="address"
      />
      <div className="mt-10">
        <SubmitBtn text="Place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
