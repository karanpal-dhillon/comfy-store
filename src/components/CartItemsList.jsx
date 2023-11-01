import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.cartId} {...item} />
      ))}
    </div>
  );
};

export default CartItemsList;
