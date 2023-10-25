import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Error, HomeLayout, Landing, Login, Register } from "./pages";
import { loader as landingLoader } from './pages/Landing.jsx'

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
        errorElement: <Error />
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "signup",
    element: <Register />,
    errorElement: <Error />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
