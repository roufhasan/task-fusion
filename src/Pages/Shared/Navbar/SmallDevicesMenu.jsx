import { Link } from "react-router-dom";
import { FaPowerOff, FaXmark } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const SmallDevicesMenu = ({ toggleMenu }) => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Sign Out Succesfull");
    });
  };
  return (
    <div className="h-screen bg-white w-full absolute left-0 top-0 flex flex-col justify-center items-center">
      <div className="flex items-center justify-center flex-col gap-y-4">
        <Link to="/">Home</Link>
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link
              onClick={handleLogOut}
              className="flex w-full justify-end items-center gap-x-1"
            >
              Sign Out <FaPowerOff className="text-red-600" />
            </Link>
          </>
        )}
        {!user && (
          <>
            <Link to="/signin">Login</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
      </div>
      <div className="mt-16">
        <FaXmark onClick={toggleMenu} className="text-4xl text-red-600" />
      </div>
    </div>
  );
};

export default SmallDevicesMenu;
