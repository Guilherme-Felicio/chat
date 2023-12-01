import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
