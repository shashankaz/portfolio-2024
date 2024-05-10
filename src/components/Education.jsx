import React from "react";

const Education = () => {
  return (
    <div id="education">
      <div
        className="flex flex-col mx-5 justify-center items-center text-white min-h-screen py-[50px]"
        id="about"
      >
        <div className="capitalize flex flex-col justify-center items-center mb-10">
          <p className="md:text-xl text-lg font-thin">See my</p>
          <h1 className="md:text-6xl text-5xl font-[600]">Education</h1>
        </div>
        <div className="border-l-4 border-white">
          <div className="w-[25px] h-[25px] bg-white translate-x-[-14px] translate-y-[43px] rounded-full"></div>
          <div className="px-8 py-4">
            <p className="md:text-base text-sm font-thin">
              November 2022 - Present
            </p>
            <h1 className="md:text-2xl text-xl font-[600]">
              Bachelor of Technology
            </h1>
            <h4 className="md:text-xl text-lg font-[600]">
              Indian Institute of Information Technology, Ranchi
            </h4>
          </div>
          <div className="w-[25px] h-[25px] bg-white translate-x-[-14px] translate-y-[43px] rounded-full"></div>
          <div className="px-8 py-4">
            <p className="md:text-base text-sm font-thin">
              April 2021 - April 2022
            </p>
            <h1 className="md:text-2xl text-xl font-[600]">Intermediate</h1>
            <h4 className="md:text-xl text-lg font-[600]">
              St. Karen's High School
            </h4>
          </div>
          <div className="w-[25px] h-[25px] bg-white translate-x-[-14px] translate-y-[43px] rounded-full"></div>
          <div className="px-8 py-4">
            <p className="md:text-base text-sm font-thin">
              April 2019 - April 2020
            </p>
            <h1 className="md:text-2xl text-xl font-[600]">Matriculate</h1>
            <h4 className="md:text-xl text-lg font-[600]">
              St. Karen's High School
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
