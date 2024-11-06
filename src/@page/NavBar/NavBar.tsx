import { useState } from "react";
import Logo from "../../assets/logo.png";
import Icon from "../../@components/Icon/Icon";
import { INavItem } from "../../@interfaces/common.interface";
import Button from "../../@components/Button/Button";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const navItem: INavItem[] = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Portfolio",
    },
    {
      id: 4,
      name: "Clients",
    },
    {
      id: 5,
      name: "Blog",
    },
    {
      id: 6,
      name: "Contact",
    },
  ];

  return (
    <div className=" flex items-center justify-between lg:px-0 px-3 lg:py-8 py-4">
      {/* Left section with Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Drive Lah Logo" className=" p-2" />
        <h4 className="text-[28px] text-white font-semibold cursor-pointer">Restaurant</h4>
        <div className="hidden md:flex space-x-4 items-center ms-[60px]">
          <ul className="flex space-x-10 text-white">
            {navItem?.map((item: any) => (
              <li key={item?.id} className="cursor-pointer hover:text-gray-200 text-[15px] font-medium mt-2">
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right section with Profile */}

      <div className="md:hidden flex items-center" onClick={toggleDrawer}>
        <Icon name={"menu"} className="text-white text-2xl" />
      </div>
      <div className="lg:block hidden  items-center mt-2">
        <Button className=" bg-[#FEBF00] text-[#0A1425] px-6   w-full py-[10px] text-xl font-semibold " round="md">
          Book a table
        </Button>
      </div>

      {/* Drawer for small screens */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#2a3535] p-4 z-50 text-white transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-semibold w-full">Restaurant</h4>
          <button onClick={toggleDrawer} className="text-right w-full mb-4 text-xl font-bold">
            ✕
          </button>
        </div>
        <ul className="space-y-4 mt-3">
          {navItem?.map((item: any) => (
            <li key={item?.id} className="cursor-pointer hover:text-gray-200">
              {item?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
