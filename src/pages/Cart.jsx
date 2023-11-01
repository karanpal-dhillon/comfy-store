import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import { selectItemsInCart } from "../features/cart/cartSlice";
import { CartItemsList, CartTotals } from "../components";
import { useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const numItemsInCart = useSelector((state) => selectItemsInCart(state));
  const [user, setUser] = useState(null);
  if (numItemsInCart < 1) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
