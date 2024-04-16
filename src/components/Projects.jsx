import React from "react";
import Card from "./Card";
import data from "../data/projects.json";
import photo from "../assets/cover.jpg"

const Projects = () => {
  return (
    <div className="mx-5" id="projects">
      <div className="flex flex-col justify-center items-center text-white mx-auto min-h-screen py-[50px]">
        <div className="capitalize flex flex-col justify-center items-center mb-10">
          <p className="md:text-xl text-lg font-thin">Browse My Recent</p>
          <h1 className="md:text-6xl text-5xl font-[600]">Projects</h1>
        </div>
        <div className="flex justify-evenly gap-[40px] w-full flex-wrap">
          {data.map((data) => {
            return (
              <Card
                key={data.id}
                title={data.project_title}
                github={data.github_link}
                live={data.live_url}
                src={photo}
                desc={data.description}
                stack={data.stack}
                alt={data.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
