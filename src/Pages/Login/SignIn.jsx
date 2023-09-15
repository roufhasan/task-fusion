import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import illustration1 from "../../assets/illustration1.png";
import illustration2 from "../../assets/illustraion2.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const { signIn, loading, setLoading, resetPassword, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSignIn = () => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Welcome To Task Fusion");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const message = err.message;
        console.log(message);
        if (message === "Firebase: Error (auth/invalid-login-credentials).") {
          toast.error("Email or Password Wrong!");
        }
        setLoading(false);
      });
  };

  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    return signInWithGoogle()
      .then(() => {
        toast.success("Login Successful");
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  // Password Reset
  const handlePasswordReset = () => {
    resetPassword(email)
      .then(() => {
        toast.success("Please check your Email!");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        const message = err.message;
        if (message === "Firebase: Error (auth/missing-email).") {
          toast.error("Please enter Email Address!");
          setLoading(false);
        }
      });
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

      <div className="bg-white px-7 md:px-11 pt-14 pb-12 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 shadow-3xl rounded-[40px] scale-[.85] md:scale-95 w-full md:w-auto mt-8 md:mt-0">
        <h2 className="text-xl">
          Welcome To <span>Task Fusion</span>
        </h2>
        <h1 className="text-[40px] md:text-[55px] mb-8">Sign In</h1>
        <form onSubmit={handleSignIn} className="md:min-w-[450px]">
          <label htmlFor="email" className="mb-3 inline-block">
            Enter your Email
          </label>
          <br />
          <input
            onChange={handleEmail}
            className="py-5 pl-6 w-full mb-9 rounded-lg text-[#808080] text-sm font-light focus:font-normal border border-[#ADADAD] outline-none focus:border-[#4285F4]"
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            required
          />
          <br />
          <label htmlFor="password" className="mb-3 inline-block">
            Enter your Password
          </label>
          <br />
          <div className="relative">
            <input
              className="py-5 pl-6 w-full rounded-lg text-[#808080] text-sm focus:text-base font-light focus:font-normal border border-[#ADADAD] outline-none focus:border-[#4285F4]"
              type={`${show ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            {show ? (
              <FaEyeSlash
                onClick={() => setShow(!show)}
                className="text-[#8E8E8E] text-2xl cursor-pointer absolute right-[5%] top-1/2 -translate-y-2/4"
              />
            ) : (
              <FaEye
                onClick={() => setShow(!show)}
                className="text-[#8E8E8E] text-2xl cursor-pointer absolute right-[5%] top-1/2 -translate-y-2/4"
              />
            )}
          </div>
          <div className="text-right mt-4 mb-8">
            <Link
              onClick={handlePasswordReset}
              className="text-[#AD3113] text-[13px]"
            >
              Forgot password?
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="font-medium bg-[#E48700] text-white w-full py-4 rounded-[10px] shadow-4xl cursor-pointer"
              disabled={loading}
            >
              {loading ? <PulseLoader color="#FFF" size={10} /> : "Sign In"}
            </button>
          </div>
        </form>
        <p className="uppercase text-[#ABABAB] text-center my-8">or</p>
        <div>
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="flex items-center gap-x-5 justify-center w-full text-[#B87514] bg-[#FFF4E3] hover:bg-[#ffefd7] transition-all py-4 px-8"
          >
            {loading ? (
              <PulseLoader color="#FFF" size={10} />
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M24.3761 13.2528C24.3761 12.3175 24.2987 11.635 24.1311 10.9272H13.2333V15.1486H19.6301C19.5011 16.1976 18.8047 17.7775 17.2571 18.8391L17.2354 18.9804L20.6811 21.5964L20.9198 21.6197C23.1122 19.6354 24.3761 16.7158 24.3761 13.2528Z"
                    fill="#00AA11"
                  />
                  <path
                    d="M13.2326 24.3749C16.3664 24.3749 18.9974 23.3637 20.919 21.6196L17.2563 18.8389C16.2762 19.5088 14.9607 19.9764 13.2326 19.9764C10.1632 19.9764 7.55803 17.9922 6.62938 15.2495L6.49326 15.2608L2.9104 17.9782L2.86354 18.1059C4.77224 21.8217 8.69287 24.3749 13.2326 24.3749Z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.63006 15.2496C6.38502 14.5418 6.24321 13.7834 6.24321 12.9999C6.24321 12.2162 6.38502 11.4579 6.61717 10.7501L6.61067 10.5994L2.9829 7.83838L2.86421 7.89371C2.07754 9.43567 1.62614 11.1672 1.62614 12.9999C1.62614 14.8325 2.07754 16.564 2.86421 18.1059L6.63006 15.2496Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M13.2326 6.0233C15.4122 6.0233 16.8824 6.94594 17.7207 7.71696L20.9965 4.5825C18.9846 2.74987 16.3665 1.625 13.2326 1.625C8.6929 1.625 4.77225 4.17804 2.86354 7.89384L6.61651 10.7503C7.55806 8.00763 10.1632 6.0233 13.2326 6.0233Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign in with Google
              </>
            )}
          </button>
          <div className="flex items-center justify-center mt-8 gap-x-3">
            <p className="text-[#8D8D8D]">No Account?</p>
            <Link to="/signup" className="text-[#B87514]">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
