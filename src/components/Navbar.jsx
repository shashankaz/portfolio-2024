import React from "react";

const Navbar = () => {
  return (
    <div
      className="text-white flex justify-between items-center py-[15px] px-[40px] md:py-[25px] md:px-[80px]"
      id="nav"
    >
      <div id="logo">
        <h1 className="text-3xl cursor-default font-bold tracking-wide">
          Shashank
        </h1>
      </div>
      <div className="hidden md:flex" id="nav-links">
        <ul className="flex gap-14 text-xl">
          <li className="hover:text-[#999] transition-all delay-75">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#999] transition-all delay-75">
            <a href="#tech">Tech</a>
          </li>
          <li className="hover:text-[#999] transition-all delay-75">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-[#999] transition-all delay-75">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* <div className="md:hidden text-3xl" id="nav-md">
        &#8801;
      </div> */}
    </div>
  );
};

export default Navbar;
