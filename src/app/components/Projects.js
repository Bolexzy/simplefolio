import Image from "next/image";
import React from "react";
import projects from "./data";

const Projects = () => {
  return (
    <div className="flex gap-5 items-center my-auto">
      {projects.map((project, index) => (
        <div className="flex flex-col w-full rounded-lg  " key={index}>
          <div
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundRepeat: "no-repeat",
            }}
            className="bg-contain w-[200px] md:w-[250px] md:h-[190px] lg:w-[300px] lg:h-[200px] 2xl:w-[350px] 2xl:h-[250px]   h-32  bg-center rounded-lg group relative hover:scale-110 transition ease-in-out delay-150 duration-300"
            // className="w-full"
          >
            {/* <Image
              width={100}
              height={100}
              className="w-full"
              src={"/assets/gallery-hngx.png"}
            /> */}
            <div className="absolute w-full h-full items-center justify-center bg-blend-lighten bg-white/25 dark:bg-dark/50 hidden group-hover:flex text-dark dark:text-white">
              <a href={project.liveLink} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 lg:w-8  lg:h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <p className="text-dark dark:text-white text-sm md:text-base  text-center">
            {project.title}
          </p>
        </div>
      ))}

      <button className="btn btn-sm bg-white/50 rounded-sm text-white text-[.7rem] font-[500] flex-shrink-0 tracking-[0.11rem] text-center padding-[0.4rem] hover:scale-110 transition ease-in-out duration-300">
        more...
      </button>
    </div>
  );
};

export default Projects;
