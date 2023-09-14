import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

const SmallDevicesMenu = ({ toggleMenu }) => {
  return (
    <div className="h-screen bg-white w-full absolute left-0 top-0 flex flex-col justify-center items-center">
      <div className="flex items-center justify-center flex-col gap-y-4">
        <Link to="/">Home</Link>
        <Link to="/signin">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
      <div className="mt-16">
        <FaXmark onClick={toggleMenu} className="text-4xl text-red-600" />
      </div>
    </div>
  );
};

export default SmallDevicesMenu;
