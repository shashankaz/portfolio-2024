import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  // const comp = useRef(null);

  // useEffect(() => {
  //   const t1 = gsap.timeline();
  //   t1.from("#stack", {
  //     x: -100,
  //     opacity: 0,
  //     delay: 1,
  //     duration: 1,
  //     stagger: 0.2,
  //     scrollTrigger: {
  //       trigger: "#tech #stack",
  //     },
  //   });
  // }, []);

  return (
    <div id="tech">
      <div className="flex flex-col justify-center items-center text-white mx-auto min-h-screen py-[50px]">
        <div className="capitalize flex flex-col justify-center items-center mb-10">
          <p className="md:text-xl text-lg font-thin">Explore My</p>
          <h1 className="md:text-6xl text-5xl font-[600]">Tech Stacks</h1>
        </div>
        <div className="flex md:gap-[30px] gap-[20px] flex-wrap items-center justify-center mx-5">
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px]"
          >
            <div className="md:text-7xl text-6xl">
              <FaHtml5 />
            </div>
            <h1 className="md:text-xl text-lg font-bold">HTML</h1>
          </div>
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px] "
          >
            <div className="md:text-7xl text-6xl">
              <FaCss3Alt />
            </div>
            <h1 className="md:text-xl text-lg font-bold">CSS</h1>
          </div>
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px] "
          >
            <div className="md:text-7xl text-6xl">
              <IoLogoJavascript />
            </div>
            <h1 className="md:text-xl text-lg font-bold">Javascript</h1>
          </div>
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px] "
          >
            <div className="md:text-7xl text-6xl">
              <SiTailwindcss />
            </div>
            <h1 className="md:text-xl text-lg font-bold">Tailwindcss</h1>
          </div>
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px] "
          >
            <div className="md:text-7xl text-6xl">
              <SiTypescript />
            </div>
            <h1 className="md:text-xl text-lg font-bold">Typescript</h1>
          </div>
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px] "
          >
            <div className="md:text-7xl text-6xl">
              <FaReact />
            </div>
            <h1 className="md:text-xl text-lg font-bold">ReactJs</h1>
          </div>
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px] "
          >
            <div className="md:text-7xl text-6xl">
              <TbBrandNextjs />
            </div>
            <h1 className="md:text-xl text-lg font-bold">NextJs</h1>
          </div>
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px] "
          >
            <div className="md:text-7xl text-6xl">
              <FaNodeJs />
            </div>
            <h1 className="md:text-xl text-lg font-bold">NodeJS</h1>
          </div>
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px] "
          >
            <div className="md:text-7xl text-6xl">
              <SiExpress />
            </div>
            <h1 className="md:text-xl text-lg font-bold">ExpressJs</h1>
          </div>
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px] "
          >
            <div className="md:text-7xl text-6xl">
              <SiMongodb />
            </div>
            <h1 className="md:text-xl text-lg font-bold">MongoDB</h1>
          </div>
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px] "
          >
            <div className="md:text-7xl text-6xl">
              <SiMysql />
            </div>
            <h1 className="md:text-xl text-lg font-bold">MySQL</h1>
          </div>
          <div
            id="stack"
            className="flex flex-col items-center justify-center border-2 p-4 rounded-[20px] md:w-[150px] w-[130px] "
          >
            <div className="md:text-7xl text-6xl">
              <FaGitAlt />
            </div>
            <h1 className="md:text-xl text-lg font-bold">Git</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
