import React from "react";

const Skills = () => {
  const skills = [
    { skill: "HTML", rate: "95%" },
    { skill: "CSS", rate: "95%" },
    { skill: "JS", rate: "80%" },
    { skill: "WORDPRESS", rate: "75%" },
    { skill: "TAILWIND", rate: "80%" },
    { skill: "REACT/JS", rate: "80%" },
    { skill: "NEXT/JS", rate: "90%" },
  ];

  const skillElement = skills.map((skill, index) => (
    <li
      key={index}
      className="w-[95px] flex text-center text-white bg-[#616063] rounded-2xl h-[25px] dark:bg-[#616063] relative border border-slate-50 hover:border-2 hover:border-white hover:scale-110 transition ease-in-out delay-150 duration-300 "
    >
      <div
        class="bg-[#322A61] h-full rounded-2xl dark:bg-gray-900"
        style={{ width: `${skill.rate}` }}
      ></div>
      <p className="absolute left-0 right-0 top-0 bottom-0 text-[12px] md:text-[13px] text-[#C7C7C7]">
        {skill.skill}
      </p>
    </li>
  ));

  return <ul className="flex flex-wrap gap-4">{skillElement}</ul>;
};

export default Skills;
