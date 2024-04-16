import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:py-[100px] py-[60px]">
        <ul className="text-white flex gap-[20px] md:text-3xl text-2xl">
          <li className="hover:text-[#999]">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#999]">
            <a href="#tech">Tech</a>
          </li>
          <li className="hover:text-[#999]">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-[#999]">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p className="text-white pt-5 md:text-[15px] text-[13px]">
          Copyright © 2024 Shashank. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
