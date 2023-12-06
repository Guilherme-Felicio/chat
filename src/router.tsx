import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/private-route";
import ActivateAccount from "./pages/activate-account";
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
  {
    path: "/activate-account/:id",
    element: <ActivateAccount />,
  },
  {
    path: "/home",
    element: <PrivateRoute />,
  },
]);
