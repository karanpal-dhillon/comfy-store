import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Error, HomeLayout, Landing, Login, Register } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
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
