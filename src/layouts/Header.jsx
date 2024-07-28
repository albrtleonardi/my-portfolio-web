import React from "react";
import Social from "../components/Social";
import MobileNav from "../components/MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"} className="max-w-[200px]">
          <img src="" alt="" />
        </Link>
        <nav className="hidden xl:flex gap-x-12 font-poppins font-normal">
          <Link to={"/"} className="text-[#3b444b] hover:text-black transition">
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[#3b444b] hover:text-black transition"
          >
            About
          </Link>
          <Link
            to={"/project"}
            className="text-[#3b444b] hover:text-black transition"
          >
            Project
          </Link>
          <Link
            to={"/contact"}
            className="text-[#3b444b] hover:text-black transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      <Social />
      <MobileNav />
    </header>
  );
};

export default Header;
