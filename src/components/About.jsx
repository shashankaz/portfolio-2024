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
        <p className="md:max-w-[650px] max-w-full text-lg flex flex-wrap text-center mx-5">
          My name is Shashank, and I'm a dedicated programmer who thrives on
          learning and exploring new technologies. I have a quick learning curve
          and a self-driven attitude towards mastering various aspects of web
          application development. My core expertise lies in JavaScript, and I'm
          passionate about using it to create innovative solutions. I enjoy
          problem-solving and am open to exciting opportunities that align with
          my skills and interests in the tech world.
        </p>
      </div>
    </div>
  );
};

export default About;
