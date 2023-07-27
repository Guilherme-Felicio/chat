import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/register";

export const router = createBrowserRouter([
  {
    path: "/chat/",
    element: <Login />,
  },

  {
    path: "/chat/sign-up",
    element: <SignUp />,
  },
]);
