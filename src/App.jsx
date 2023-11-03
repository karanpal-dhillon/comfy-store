import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Orders,
} from "./pages";
// loaders
import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

import { ErrorElement } from "./components";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorElement />,
    action: loginAction(store),
  },
  {
    path: "signup",
    element: <Register />,
    errorElement: <ErrorElement />,
    action: registerAction,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
