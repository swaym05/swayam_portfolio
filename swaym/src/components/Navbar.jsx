import React, { useState } from "react";
import Swaym from "../assets/image.png";
import LeetCode from "../assets/leetcode1.svg";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <nav className="px-5 fixed w-full h-[80px] flex justify-between items-center bg-bg-custom text-text-custom">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img
            className="z-100 w-[80px] md:w-[150px] "
            src={Swaym}
            alt="Swayam"
          />
        </Link>
      </div>
      {/* Main menu */}
      <ul className="hidden md:flex space-x-4 ">
        <li className="font-bold">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="font-bold">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="font-bold">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="font-bold">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="font-bold">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Menu Mobile Icon */}
      <div className="md:hidden z-10 " onClick={handleClick}>
        {!nav ? (
          <i className="fa-solid fa-bars text-xl" />
        ) : (
          <i className="fa-solid fa-xmark bottom-3 text-xl" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "bg-bg-custom absolute top-0 left-0 w-full h-screen flex flex-col justify-center"
        }
      >
        <li className="ps-8 py-4 text-3xl font-bold">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="ps-8 py-4 text-3xl font-bold">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="ps-8 py-4 text-3xl font-bold">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="ps-8 py-4 text-3xl font-bold">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="ps-8 py-4 text-3xl font-bold">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden  fixed flex-col top-[35%] left-0 ">
        <ul className="text-text-custom">
          <li  className="font-semibold w-[160px] h-[60px] flex justify-between items-center px-3 ml-[-110px] hover:ml-[-10px] duration-300 bg-[#06070a] ">
            <a href="/" className="flex justify-between items-center w-full">
              LinkedIn <i className="fa-brands fa-linkedin-in text-[30px]" />
            </a>
          </li>
        </ul>
        <ul className="text-text-custom">
          <li className="font-semibold w-[160px] h-[60px] flex justify-between items-center px-3 ml-[-110px] hover:ml-[-10px] duration-300 bg-[#06070a] ">
            <a href="/" className="flex justify-between items-center w-full">
              GitHub <i className="fa-brands fa-github  text-[30px]" />
            </a>
          </li>
        </ul>
        <ul className="text-text-custom">
          <li className="font-semibold w-[160px] h-[60px] flex justify-between items-center px-3 ml-[-110px] hover:ml-[-10px] duration-300 bg-[#06070a] ">
            <a href="/" className="flex justify-between items-center w-full">
              Instagram <i className="fa-brands fa-instagram  text-[30px]" />
            </a>
          </li>
        </ul>
        <ul className="text-text-custom">
          <li className="font-semibold w-[160px] h-[60px] flex justify-between items-center px-3 ml-[-110px] hover:ml-[-10px] duration-300 bg-[#06070a] ">
            <a href="/" className="flex justify-between items-center w-full">
              LeetCode <img className="w-[30px] " src={LeetCode} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
