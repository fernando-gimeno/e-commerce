import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-grande.png";
import { Navbar } from "./";
import { useState } from "react";
import {
  MdClose,
  MdLogin,
  // MdLogout,
  MdMenu,
  MdShoppingCart,
} from "react-icons/md";

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header className="fixed top-0 left-0 w-full m-auto bg-white ring-1 ring-slate-900/5 z-20">
      <div className="px-4 flexBetween py-3 max-xs:px-2  max_padd_container">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" width={64} height={64} />
          </Link>
        </div>

        {/* Navbar */}
        <Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-15 capitalize" />
        {/* Navbar mobile */}
        <Navbar
          containerStyles={
            menuOpened
              ? "flex items-center flex-col gap-y-12 fixed top-24 right-2 p-8 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex items-center flex-col gap-y-12 fixed right-2 p-8 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -top-[100%]"
          }
        />

        {/* Buttons */}
        <div className="flexBetween gap-x-1 sm:gap-x-3 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary-500 mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary-500"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary-500 mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary-500"
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-3">
            <NavLink to="cart-page" className="flex">
              <MdShoppingCart className="p-1 h-8 w-8 ring-1 ring-slate-900/30 rounded-full" />
              <span className="relative flexCenter w-4 h-4 p-3 rounded-full bg-secondary-500 text-white medium-14 -top-2 right-2">
                0
              </span>
            </NavLink>
            {/* <NavLink
              to="logout"
              className="btn_secondary_rounded flexCenter gap-x-2"
            >
              Logout <MdLogout className="w-5 h-5" />
            </NavLink> */}
            <NavLink
              to="login"
              className="btn_secondary_rounded flexCenter gap-x-2"
            >
              Login <MdLogin className="w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
