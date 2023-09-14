import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" />
      <Outlet />
    </>
  );
};

export default Main;
