import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
