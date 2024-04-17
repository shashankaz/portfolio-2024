import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col justify-center items-center text-white md:py-[80px] py-[60px]">
        <div className="capitalize flex flex-col justify-center items-center mb-10">
          <p className="md:text-xl text-lg font-thin">Get in Touch</p>
          <h1 className="md:text-6xl text-5xl font-[600]">Contact Me</h1>
        </div>
        <div>
          <h2 className="md:text-4xl text-2xl md:w-[400px] text-center mt-8 mx-5">
            You can get in touch with me via{" "}
            <a
              className="text-[#999] hover:text-[#eee]"
              href="mailto:shashank@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              mail
            </a>{" "}
            or{" "}
            <a
              className="text-[#999] hover:text-[#eee]"
              href="https://www.instagram.com/shashankaz"
              rel="noreferrer"
              target="_blank"
            >
              instagram
            </a>{" "}
            or{" "}
            <a
              className="text-[#999] hover:text-[#eee]"
              href="https://www.linkedin.com/in/shashankaz/"
              rel="noreferrer"
              target="_blank"
            >
              linkedin
            </a>{" "}
            .
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 mt-[30px] mx-5 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/shashankaz/"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-3xl text-2xl flex justify-center items-center h-[50px] w-[50px] rounded-full bg-[#777] hover:bg-white hover:text-[#0F172A]">
              <FaLinkedinIn />
            </button>
          </a>
          <a
            href="https://github.com/shashankaz"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-3xl text-2xl flex justify-center items-center h-[50px] w-[50px] rounded-full bg-[#777] hover:bg-white hover:text-[#0F172A]">
              <FaGithub />
            </button>
          </a>
          <a
            href="https://twitter.com/shashankaz"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-3xl text-2xl flex justify-center items-center h-[50px] w-[50px] rounded-full bg-[#777] hover:bg-white hover:text-[#0F172A]">
              <FaXTwitter />
            </button>
          </a>
          <a
            href="https://www.codechef.com/users/o_r_e_o"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-3xl text-2xl flex justify-center items-center h-[50px] w-[50px] rounded-full bg-[#777] hover:bg-white hover:text-[#0F172A]">
              <SiCodechef />
            </button>
          </a>
          <a
            href="https://codeforces.com/profile/shashankaz"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-3xl text-2xl flex justify-center items-center h-[50px] w-[50px] rounded-full bg-[#777] hover:bg-white hover:text-[#0F172A]">
              <SiCodeforces />
            </button>
          </a>
          <a
            href="https://leetcode.com/shashankaz/"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:text-3xl text-2xl flex justify-center items-center h-[50px] w-[50px] rounded-full bg-[#777] hover:bg-white hover:text-[#0F172A]">
              <SiLeetcode />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
