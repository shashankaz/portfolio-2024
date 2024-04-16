import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import user from "../assets/cover.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="text-white mx-5 flex md:flex-row flex-col justify-center items-center md:gap-[80px] gap-[50px] min-h-screen py-[50px]"
        id="hero"
      >
        <div id="left">
          <div id="box">
            <img
              className="md:w-[350px] md:h-[350px] w-[250px] h-[250px] object-cover grayscale bg-white rounded-full"
              src={user}
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
            <button className="md:w-[135px] w-[110px] py-3 border-white border-2 hover:bg-white hover:text-black transition-all delay-75 rounded-[30px] md:text-[15px] text-[14px] font-medium">
              <a href="https://www.google.com" rel="noreferrer" target="_blank">
                Resume
              </a>
            </button>
            <button className="md:w-[135px] w-[110px] py-3 bg-white text-black border-2  rounded-[30px] md:text-[15px] text-[14px] font-medium">
              <a href="#contact">Contact Info</a>
            </button>
          </div>
          <div className="flex gap-3 mt-3">
            <button className="text-2xl">
              <a
                href="https://www.linkedin.com/in/shashankaz/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </button>
            <button className="text-2xl">
              <a
                href="https://github.com/shashankaz"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
