import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Avatar from "../components/DashboardAvatar/Avatar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {
  FaFileMedical,
  FaHouseChimney,
  FaPowerOff,
  FaRegFolderOpen,
  FaRegUser,
} from "react-icons/fa6";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Sign Out Succesfull");
      navigate("/");
    });
  };

  const sideBarNavigation = (
    <>
      <li>
        <NavLink
          to="/dashboard/all-task"
          className={({ isActive }) =>
            `${
              isActive
                ? "hover:bg-white text-[#5754f7]"
                : "hover:text-[#5754f7]"
            } text-lg hover:bg-transparent`
          }
        >
          <FaRegFolderOpen size={20} /> All Task
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/addtask"
          className={({ isActive }) =>
            `${
              isActive
                ? "hover:bg-white text-[#5754f7]"
                : "hover:text-[#5754f7]"
            } text-lg hover:bg-transparent`
          }
        >
          <FaFileMedical size={20} /> Add New Task
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/mytask"
          className={({ isActive }) =>
            `${
              isActive
                ? "hover:bg-white text-[#5754f7]"
                : "hover:text-[#5754f7]"
            } text-lg hover:bg-transparent`
          }
        >
          <FaRegUser size={20} /> My Task
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive
                ? "hover:bg-white text-[#5754f7]"
                : "hover:text-[#5754f7]"
            } text-lg hover:bg-transparent`
          }
        >
          <FaHouseChimney size={20} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={handleLogOut}
          className={({ isActive }) =>
            `${
              isActive
                ? "hover:text-red-600"
                : "hover:bg-white hover:text-red-600"
            } text-lg hover:bg-transparent mt-[calc(100vh-350px)]`
          }
        >
          <FaPowerOff className="text-red-600" /> Sign Out
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button mt-10 lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="flex items-center justify-evenly mb-8">
            <Avatar image={user?.photoURL} />
            <p className="text-xl font-medium">{user?.displayName}</p>
          </div>
          {sideBarNavigation}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
