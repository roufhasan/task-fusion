import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddNewTask from "../Pages/Dashboard/AddNewTask/AddNewTask";
import AllTask from "../Pages/Dashboard/AllTask/AllTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/all-task",
        element: (
          <PrivateRoute>
            <AllTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addtask",
        element: (
          <PrivateRoute>
            <AddNewTask />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
