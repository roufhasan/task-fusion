import { useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa6";
import SmallDevicesMenu from "./SmallDevicesMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <Container>
        <nav className="flex items-center justify-between py-2 mb-4 shadow-sm pr-4">
          <Logo />
          {/* Menu For Medium Devices */}
          <div className="hidden md:flex">
            <Menu />
          </div>
          {/* Menu For Small Devices */}
          <div onClick={toggleMenu} className="md:hidden">
            <FaBars className="text-2xl" />
          </div>
          {isOpen && (
            <div>
              <SmallDevicesMenu toggleMenu={toggleMenu} />
            </div>
          )}
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
