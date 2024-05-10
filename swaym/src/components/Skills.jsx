import React from "react";
import CSS from "../assets/skills/css.png";
import Hibernate from "../assets/skills/hibernate.svg";
import HTML from "../assets/skills/html.png";
import Java from "../assets/skills/java1.png";
import JavaScript from "../assets/skills/javascript.png";
import ReactImg from "../assets/skills/react.svg";
import Sql from "../assets/skills/sql.png";
import Spring from "../assets/skills/spring.png";
import Tailwind from "../assets/skills/tailwind.png";

const Skills = () => {
  return (
    <>
      <section
        name="skills"
        className="bg-bg-custom text-gray-300 w-full md:h-screen  "
      >
        <div className="px-8 max-w-[900px] py-4 flex flex-col justify-center w-full h-full mx-auto ">
          <div>
            <p className="text-4xl inline border-b-4 border-text-custom font-bold ">
              Skills
            </p>
            <p className="py-4">
              !! These are the technolgies I'm familiar with
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 text-center py-8 ">
            <div className="shadow-md rounded-md shadow-[#325784] hover:scale-110 duration-500 md:w-36 h-36 ">
              <img className="w-20 pt-2 mx-auto" src={HTML} alt="Html" />
              <p className="mt-4">HTML</p>
            </div>
            <div className="shadow-md rounded-md shadow-[#325784] hover:scale-110 duration-500  md:w-36 h-36 ">
              <img className="w-20 pt-2 mx-auto" src={CSS} alt="Html" />
              <p className="mt-4">CSS</p>
            </div>
            <div className="shadow-md rounded-md shadow-[#325784] hover:scale-110 duration-500 md:w-36 h-36 ">
              <img className="w-20 pt-2 mx-auto" src={JavaScript} alt="Html" />
              <p className="mt-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md rounded-md shadow-[#325784] hover:scale-110 duration-500 md:w-36 h-36 ">
              <img className="w-20 pt-4 mx-auto" src={Tailwind} alt="Html" />
              <p className="mt-8">TAILWIND</p>
            </div>
            <div className="shadow-md rounded-md shadow-[#325784] hover:scale-110 duration-500 md:w-36 h-36 ">
              <img className="w-20 pt-2 mx-auto" src={ReactImg} alt="Html" />
              <p className="mt-4">REACT JS</p>
            </div>
            <div className="shadow-md rounded-md shadow-[#325784] hover:scale-110 duration-500 md:w-36 h-36 ">
              <img className="w-20 pt-2 mx-auto" src={Java} alt="Html" />
              <p className="mt-4">JAVA</p>
            </div>
            <div className="shadow-md rounded-md shadow-[#325784] hover:scale-110 duration-500  md:w-36 h-36 ">
              <img className="w-20 pt-2 mx-auto" src={Spring} alt="Html" />
              <p className="mt-4">SPRING BOOT</p>
            </div>
            <div className="shadow-md rounded-md shadow-[#325784] hover:scale-110 duration-500  md:w-36 h-36 ">
              <img className="w-20 pt-2 mx-auto" src={Hibernate} alt="Html" />
              <p className="mt-4">HIBERNATE</p>
            </div>
            <div className="shadow-md rounded-md shadow-[#325784] hover:scale-110 duration-500  md:w-36 h-36 ">
              <img className="w-20 pt-2 mx-auto" src={Sql} alt="Html" />
              <p className="mt-4">SQL</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
