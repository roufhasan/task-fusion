import { Link, useNavigate } from "react-router-dom";
import illustration1 from "../../assets/illustration1.png";
import illustration2 from "../../assets/illustraion2.png";
import { toast } from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { PulseLoader } from "react-spinners";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, loading, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = () => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;
    const photoURL = form.photoURL.value;

    if (password !== confirmPassword) {
      toast.error("Password Didn't Match");
      return;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError(
        "Password must be Minimum eight characters, at least one letter and one number"
      );
      form.reset();
      return;
    } else if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("");
      createUser(email, password)
        .then((result) => {
          updateUserProfile(name, photoURL)
            .then(() => {
              toast.success("Signup Successful");
              navigate("/");
            })
            .catch((err) => {
              console.log(err.message);
              form.reset();
            });
          console.log(result.user);
        })
        .catch((err) => {
          const errMessage = err.message;
          console.log(errMessage);
          form.reset();
        });
    }
  };
  return (
    <div className="md:flex relative">
      <div className="bg-[#ECBC76] w-full min-h-screen"></div>
      <div className="bg-[#FFFEF9] w-full h-0 md:min-h-screen"></div>
      <img
        src={illustration1}
        className="hidden md:block absolute right-[5%] top-[10%] w-[450px]"
        alt="orange girl using phone illustration"
      />
      <img
        src={illustration2}
        className="hidden md:block absolute left-[5%] top-[15%]"
        alt="orange girl driving scooty waving hand illustration"
      />

      <div className="bg-white px-7 md:px-11 pt-14 pb-12 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 shadow-3xl rounded-[40px] scale-[.85] md:scale-95 w-full md:w-auto mt-32">
        <h2 className="text-xl">
          Welcome To <span>Task Fusion</span>
        </h2>
        <h1 className="text-[40px] md:text-[55px] mb-8">Sign up</h1>
        <form className="md:min-w-[450px]" onSubmit={handleSignUp}>
          <label htmlFor="name" className="mb-3 inline-block">
            Enter your Name *
          </label>
          <br />
          <input
            className="py-5 pl-6 w-full rounded-lg text-[#808080] text-sm font-light focus:font-normal border border-[#ADADAD] outline-none focus:border-[#4285F4] mb-8"
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
          />
          <br />
          <label htmlFor="email" className="mb-3 inline-block">
            Enter your Email *
          </label>
          <br />
          <input
            className="py-5 pl-6 w-full rounded-lg text-[#808080] text-sm font-light focus:font-normal border border-[#ADADAD] outline-none focus:border-[#4285F4] mb-8"
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            required
          />
          <br />
          <label htmlFor="password" className="mb-3 inline-block">
            Enter your Password *
          </label>
          {error && (
            <p className="text-center mb-4 text-red-500">
              <small>{error}</small>
            </p>
          )}
          <br />
          <input
            className="py-5 pl-6 w-full rounded-lg text-[#808080] text-sm font-light focus:font-normal border border-[#ADADAD] outline-none focus:border-[#4285F4] mb-8"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <label htmlFor="confirm_password" className="mb-3 inline-block">
            Confirm Password *
          </label>
          <input
            className="py-5 pl-6 w-full rounded-lg text-[#808080] text-sm font-light focus:font-normal border border-[#ADADAD] outline-none focus:border-[#4285F4] mb-8"
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            required
          />
          <br />
          <label htmlFor="photoURL" className="mb-3 inline-block">
            Photo URL *
          </label>
          <br />
          <input
            className="py-5 pl-6 w-full rounded-lg text-[#808080] text-sm font-light focus:font-normal border border-[#ADADAD] outline-none focus:border-[#4285F4] mb-8"
            type="url"
            name="photoURL"
            id="photoURL"
            placeholder="https://imgbb.com/myphoto.jpg"
            required
          />
          <br />
          <div className="mt-8">
            <button
              type="submit"
              className="font-medium bg-[#E48700] text-white w-full py-4 rounded-[10px] shadow-4xl cursor-pointer"
            >
              {loading ? <PulseLoader color="#FFF" size={20} /> : "Sign up"}
            </button>
          </div>
        </form>
        <div>
          <div className="flex items-center justify-center mt-8 gap-x-3">
            <p className="text-[#8D8D8D]">Have an Account?</p>
            <Link to="/signIn" className="text-[#B87514]">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
