import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="text-white mx-5 flex md:flex-row flex-col justify-center items-center md:gap-[80px] gap-[50px] min-h-screen py-[50px]"
        id="hero"
      >
        <div id="left">
          <div
            className="md:w-[350px] md:h-[350px] overflow-hidden w-[250px] h-[250px] rounded-full"
            id="box"
          >
            <img
              className="md:w-[350px] md:h-[350px] hover:scale-105 transition-all grayscale-0 md:grayscale hover:grayscale-0 cursor-pointer delay-150 w-[250px] h-[250px] object-cover bg-white rounded-full"
              src={profile}
              alt=""
            />
          </div>
        </div>
        <div
          className="flex gap-2 justify-center items-center flex-col"
          id="right"
        >
          <p className="md:text-xl text-lg font-[600]">Hello, I'm</p>
          <h1 className="md:text-6xl text-5xl font-[600]">Shashank</h1>
          <p className="md:text-3xl text-2xl font-[600]">Frontend Developer</p>
          <div className="flex gap-3 mt-3">
            <a href="https://www.google.com" rel="noreferrer" target="_blank">
              <button className="md:w-[135px] w-[110px] py-3 border-white border-2 hover:bg-white hover:text-black transition-all delay-75 rounded-[30px] md:text-[15px] text-[14px] font-medium">
                Get Resume
              </button>
            </a>
            <a href="#contact">
              <button className="md:w-[135px] w-[110px] py-3 bg-white text-black border-2  rounded-[30px] md:text-[15px] text-[14px] font-medium">
                Contact Info
              </button>
            </a>
          </div>
          <div className="flex gap-3 mt-3">
            <a
              href="https://www.linkedin.com/in/shashankaz/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="md:text-3xl text-2xl hover:scale-110">
                <FaLinkedinIn />
              </button>
            </a>
            <a
              href="https://github.com/shashankaz"
              rel="noreferrer"
              target="_blank"
            >
              <button className="md:text-3xl text-2xl hover:scale-110">
                <FaGithub />
              </button>
            </a>
            <a
              href="https://twitter.com/shashankaz"
              rel="noreferrer"
              target="_blank"
            >
              <button className="md:text-3xl text-2xl hover:scale-110">
                <FaXTwitter />
              </button>
            </a>
            <a
              href="https://www.codechef.com/users/o_r_e_o"
              rel="noreferrer"
              target="_blank"
            >
              <button className="md:text-3xl text-2xl hover:scale-110">
                <SiCodechef />
              </button>
            </a>
            <a
              href="https://codeforces.com/profile/shashankaz"
              rel="noreferrer"
              target="_blank"
            >
              <button className="md:text-3xl text-2xl hover:scale-110">
                <SiCodeforces />
              </button>
            </a>
            <a
              href="https://leetcode.com/shashankaz/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="md:text-3xl text-2xl hover:scale-110">
                <SiLeetcode />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
