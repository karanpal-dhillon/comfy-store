import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.cartId === product.cartId,
      );
      if (existingCartItem) {
        existingCartItem.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item added to the cart");
    },

    clearCart: () => {
      localStorage.setItem(JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartId } = action.payload;
      const product = state.cartItems.find(
        (cartItem) => cartItem.cartId === cartId,
      );
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.cartId !== cartId,
      );
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("Item removed from the cart");
    },

    editItem: (state, action) => {
      const { cartId, amount } = action.payload;
      const product = state.cartItems.find(
        (cartItem) => cartItem.cartId === cartId,
      );
      state.numItemsInCart += amount - product.amount;
      state.cartTotal += product.price * (amount - product.amount);
      product.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export const selectItemsInCart = (state) => state.cart.numItemsInCart;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotals = (state) => {
  return {
    tax: state.cart.tax,
    orderTotal: state.cart.orderTotal,
    shipping: state.cart.shipping,
    cartTotal: state.cart.cartTotal,
  };
};
export default cartSlice.reducer;
