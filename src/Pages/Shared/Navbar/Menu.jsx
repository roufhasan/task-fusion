import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Menu = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Sign Out Succesfull");
    });
  };
  return (
    <div className="flex justify-evenly items-center gap-x-10 font-medium">
      <Link to="/">Home</Link>
      {user ? (
        <Link onClick={handleLogOut}>Sign Out</Link>
      ) : (
        <Link to="/signin">Login</Link>
      )}
      {user ? (
        <Link to="/signup">Sign Up</Link>
      ) : (
        <Link to="/signup">Sign Up</Link>
      )}
    </div>
  );
};

export default Menu;
