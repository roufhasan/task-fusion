import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Hero = () => {
  const { user } = useContext(AuthContext);

  const myStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${heroImg})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={myStyle}
      className="flex items-center justify-center flex-col gap-y-6 px-[3%]"
    >
      <h1 className="text-6xl font-bold text-white">Welcome To Task Fusion</h1>
      <h3 className="text-3xl font-medium text-gray-50">
        Your Ultimate Task Managment App
      </h3>
      <div>
        {user ? (
          <Link
            to="/dashboard"
            className="text-white text-xl border-2 border-transparent bg-[#E48700] hover:bg-[#b48338] transition-all px-4 py-1 mr-6"
          >
            Go To Dashboard
          </Link>
        ) : (
          <>
            <Link
              to="/signin"
              className="text-white text-xl border-2 border-[#E48700] hover:bg-[#E48700] transition-all px-4 py-1 mr-6"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white text-xl border-2 border-transparent bg-[#E48700] hover:bg-[#b48338] transition-all px-4 py-1"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
