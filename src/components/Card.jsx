import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="border-2 px-[30px] py-[20px] rounded-[20px] flex flex-col justify-center items-center w-[315px]">
        <div className="w-[250px] h-[200px] rounded-[20px] overflow-hidden">
          <img
            className="w-[250px] h-[200px] object-cover rounded-[20px] hover:scale-110 transition-all cursor-pointer"
            src={props.src}
            alt={props.alt}
          />
        </div>
        <h1 className="md:text-3xl text-2xl py-4 font-[600]">{props.title}</h1>
        <p className="text-sm pb-4">{props.desc}</p>
        <p className="text-sm pb-4 text-gray-400 w-full items-start italic">
          {props.stack}
        </p>
        <div className="flex justify-between w-full">
          <button className="w-[120px] border-2 rounded-[20px] py-2 md:text-[17px] text-[15px] hover:bg-white hover:text-black transition-all delay-75">
            <a href={props.github} target="_blank" rel="noreferrer">
              Github
            </a>
          </button>
          <button className="w-[120px] border-2 rounded-[20px] py-2 md:text-[17px] text-[15px] hover:bg-white hover:text-black transition-all delay-75">
            <a href={props.live} target="_blank" rel="noreferrer">
              Live demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
