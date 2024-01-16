import Image from "next/image";
import React from "react";

const Skills = () => {
  const skills = [
    { name: "React/js", image: "/assets/react.svg" },

    { name: "Tailwind CSS", image: "/assets/ts.svg" },
    { name: "Javascript", image: "/assets/js.svg" },
    // NodeJS
    { name: "NodeJS", image: "/assets/node.svg" },
    // MongoDB
    { name: "MongoDB", image: "/assets/mongodb.svg" },
    // ExpressJS
    { name: "ExpressJS", image: "/assets/express.svg" },
    // HTML
    { name: "HTML", image: "/assets/html.svg" },
    // CSS
    { name: "CSS", image: "/assets/css.svg" },
    // Tailwind CSS
    { name: "Tailwind CSS", image: "/assets/tailwind.svg" },
    // mySql
    { name: "mySql", image: "/assets/mysql.svg" },
    // Firebase
    { name: "Firebase", image: "/assets/firebase.svg" },
    // MUI
    { name: "MUI", image: "/assets/mui.svg" },
    // Figma
    { name: "Figma", image: "/assets/figma.svg" },
    // Bootstrap
    { name: "Bootstrap", image: "/assets/bootstrap.svg" },
  ];

  const skillElement = skills.map((skill, index) => (
    <div
      className="flex flex-col items-center justify-center gap-2 group p-2"
      key={index}
    >
      <div className="w-[30px] lg:w-[40px] hover:scale-110 transition-all ease-in-out duration-300">
        <Image
          src={`${skill.image}`}
          alt="skill logo"
          className="w-full"
          width={100}
          height={100}
        />
      </div>
      <div className="text-black/50 dark:text-white/75 text-sm rounded-full  font-bold capitalize text-center">
        {skill.name}
      </div>
    </div>
  ));

  return (
    <div className="w-full flex  flex-row flex-wrap items-center justify-center gap-y-2 gap-x-2">
      {skillElement}
    </div>
  );
};

export default Skills;
