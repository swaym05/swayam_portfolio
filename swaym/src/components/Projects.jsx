import React from "react";
// Skills
import CSS from "../assets/skills/css.png";
import Hibernate from "../assets/skills/hibernate.svg";
import HTML from "../assets/skills/html.png";
import Java from "../assets/skills/java1.png";
import JavaScript from "../assets/skills/javascript.png";
import ReactImg from "../assets/skills/react.svg";
import Sql from "../assets/skills/sql.png";
import Spring from "../assets/skills/spring.png";
import Tailwind from "../assets/skills/tailwind.png";

// Project Images
import Todo from "../assets/skills/todo.png";
import Profile from "../assets/skills/profile.jpg";
import TextSnap from "../assets/skills/textsnip.png";
import Calculator from "../assets/skills/calculator.png";
import JSDoc from "../assets/skills/jsdoc.png";

const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full bg-bg-custom md:h-screen text-gray-300"
    >
      <div className="max-w-[900px] mx-auto px-8 py-20 w-full h-full ">
        <div className="pb-8 ">
          <p className="text-4xl inline font-bold border-b-4 border-text-custom ">
            Projects
          </p>
          <p className="py-4">!! Check out some of my recent projects</p>
        </div>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Project : Todo app */}
          <div
            style={{
              backgroundImage: `url(${Todo})`,
            }}
            className="group content shadow h-[200px] rounded-md  shadow-[#63cbff]  container flex justify-center items-center mx-auto "
          >
            <div className="h-[100%] w-[100%] opacity-0  group-hover:opacity-100  text-gray-300 p-2 text-center ">
              <span className="text-2xl font-bold  tracking-wider">
                Todo application
              </span>
              <div className="text-center pt-8">
                <a href="" className="hidden">
                  <button className="rounded-lg text-center px-4 py-3 text-white bg-gray-700 font-bold text-lg me-2">
                    Demo <i className="fa-solid fa-share" />
                  </button>
                </a>
                <a
                  href="https://github.com/swaym05/spring_todoapp/tree/main"
                  target="blank"
                >
                  <button className="rounded-lg text-center px-4 py-3 text-white bg-gray-700 font-bold text-lg">
                    Code <i className="fa-solid fa-code" />
                  </button>
                </a>

                <div className="flex justify-around items-center py-3 w-[50%] mx-auto  mt-2">
                  <img className="w-[30px]" src={Spring} alt="" />
                  <img className="w-[30px]" src={Java} alt="" />
                  <img className="w-[30px]" src={Sql} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* Project : Portfolio */}
          <div
            style={{
              backgroundImage: `url(${Profile})`,
            }}
            className="group content shadow h-[200px] rounded-md  shadow-[#63cbff]  container flex justify-center items-center mx-auto "
          >
            <div className="h-[100%] w-[100%] opacity-0  group-hover:opacity-100  text-gray-300 p-2 text-center ">
              <span className="text-2xl font-bold  tracking-wider">
                React Portfolio
              </span>
              <div className="text-center pt-8">
                <a href="">
                  <button className="rounded-lg text-center px-4 py-3 text-white bg-gray-700 font-bold text-lg me-2">
                    Demo <i className="fa-solid fa-share" />
                  </button>
                </a>
                <a
                  href="https://github.com/swaym05/swayam_portfolio"
                  target="blank"
                >
                  <button className="rounded-lg text-center px-4 py-3 text-white bg-gray-700 font-bold text-lg">
                    Code <i className="fa-solid fa-code" />
                  </button>
                </a>

                <div className="flex justify-around items-center py-3 w-[50%] mx-auto  mt-2">
                  <img className="w-[30px]" src={ReactImg} alt="" />
                  <img className="w-[30px]" src={Tailwind} alt="" />
                  <img className="w-[30px]" src={HTML} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* Project 3 : SnapShot */}
          <div
            style={{
              backgroundImage: `url(${TextSnap})`,
            }}
            className="group content shadow h-[200px] rounded-md  shadow-[#63cbff]  container flex justify-center items-center mx-auto "
          >
            <div className="h-[100%] w-[100%] opacity-0  group-hover:opacity-100  text-gray-300 p-2 text-center ">
              <span className="text-2xl font-bold  tracking-wider">
                Text Snippet
              </span>
              <div className="text-center pt-8">
                <a href="https://text-snap-two.vercel.app/">
                  <button className="rounded-lg text-center px-4 py-3 text-white bg-gray-700 font-bold text-lg me-2">
                    Demo <i className="fa-solid fa-share" />
                  </button>
                </a>
                <a href="https://github.com/swaym05/text_snap" target="blank">
                  <button className="rounded-lg text-center px-4 py-3 text-white bg-gray-700 font-bold text-lg">
                    Code <i className="fa-solid fa-code" />
                  </button>
                </a>

                <div className="flex justify-around items-center py-3 w-[50%] mx-auto  mt-2">
                  <img className="w-[30px]" src={HTML} alt="" />
                  <img className="w-[30px]" src={CSS} alt="" />
                  <img className="w-[30px]" src={JavaScript} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
