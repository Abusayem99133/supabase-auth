import { createBrowserRouter } from "react-router";
import App from "../App";
import Signup from "./Signup";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
