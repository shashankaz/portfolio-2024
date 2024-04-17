import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col justify-center items-center text-white md:py-[100px] py-[60px]">
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
      </div>
    </div>
  );
};

export default Contact;
