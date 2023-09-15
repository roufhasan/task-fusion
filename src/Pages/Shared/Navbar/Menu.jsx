import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { FaPowerOff } from "react-icons/fa6";

const Menu = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menu, setShowMenu] = useState(false);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Sign Out Succesfull");
      setShowMenu(false);
    });
  };
  return (
    <div className="flex justify-evenly items-center gap-x-10 font-medium relative">
      <Link to="/">Home</Link>
      {user && <Link to="/dashboard">Dahsboard</Link>}
      {!user && <Link to="/signin">Login</Link>}
      {user ? (
        <img
          onClick={() => setShowMenu(!menu)}
          src={user.photoURL}
          alt=""
          className="w-9 h-9 rounded-full cursor-pointer"
        />
      ) : (
        <Link to="/signup">Sign Up</Link>
      )}
      {menu && user && (
        <div className="absolute right-0 -bottom-14 bg-gray-100 px-4 py-3 rounded-lg z-50">
          <Link
            onClick={handleLogOut}
            className="flex w-full justify-end items-center gap-x-1"
          >
            Sign Out <FaPowerOff className="text-red-600" />
          </Link>
          <div className=""></div>
        </div>
      )}
    </div>
  );
};

export default Menu;
