import { useState } from "react";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[100px] mx-auto text-2xl font-bold items-center px-4 bg-[#0b0b0b] text-gray-200 z-50">
      <div className="shadow-md shadow-[#111111] ">
        <img src={Logo} alt="logo_Image" style={{ width: "50px" }} />{" "}
      </div>

      {/* menu */}
      <ul className="hidden md:flex ">
        <li className="link-hover ">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="link-hover">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="link-hover">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="link-hover">
          <Link to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="link-hover">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl link-hover">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl link-hover">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl link-hover">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl link-hover">
          {" "}
          <Link onClick={handleClick} to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl link-hover">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Social Icons*/}
    </div>
  );
};
export default Navbar;
