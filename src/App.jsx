import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Error, HomeLayout, Landing } from "./pages";
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
