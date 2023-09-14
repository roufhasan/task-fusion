import logo from "../../../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex gap-x-3">
      <img src={logo} alt="" className="w-10" />
      <h1 className="text-3xl font-bold">Task Fusion</h1>
    </div>
  );
};

export default Logo;
