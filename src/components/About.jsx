import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col mx-5 justify-center items-center text-white min-h-screen py-[50px]"
      id="about"
    >
      <div className="capitalize flex flex-col justify-center items-center mb-10">
        <p className="md:text-xl text-lg font-thin">Get to know more</p>
        <h1 className="md:text-6xl text-5xl font-[600]">About me</h1>
      </div>
      <div>
        <p className="max-w-[400px] flex flex-wrap text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          aliquam eius, tenetur mollitia atque, quis doloribus, odio ad
          temporibus cum cupiditate animi vitae fugiat distinctio consequatur.
          Iusto explicabo numquam laboriosam?
        </p>
      </div>
    </div>
  );
};

export default About;
