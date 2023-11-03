import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { selectItemsInCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  const user = store.getState().user.user;
  if (!user) {
    toast.warn("You need to login first");
    return redirect("/");
  }
  return null;
};

const Checkout = () => {
  const { numItemsInCart } = useSelector((state) => selectItemsInCart(state));
  if (numItemsInCart < 1) return <SectionTitle text="Your cart is empty" />;
  return (
    <div>
      <SectionTitle text="Place your order" />
      <div className="grid lg:grid-cols-2 mt-8 gap-8 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </div>
  );
};

export default Checkout;
