import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TfiMenu } from "react-icons/tfi";
import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const SocialLinks = () => {
  const [show, setShow] = useState(false);
  const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <>
      <div className="hidden sm:flex items-center sm:gap-6 md:gap-4 lg:gap-8 lg:mr-20  ">
        <div className="flex sm:gap-1 md:gap-0">
          <a href="https://github.com/behruzrezaie-dev" target="blank">
            <div className="social-icon">
              <FaGithub />
            </div>
          </a>
          <a href="">
            <div className="social-icon">
              <FaLinkedin />
            </div>
          </a>
          <a href="">
            <div className="social-icon">
              <FaFacebook />
            </div>
          </a>
          <a href="https://instagram.com/behr0z.10" target="blank">
            <div className="social-icon">
              <AiFillInstagram />
            </div>
          </a>
        </div>
      </div>
      <button
        onClick={toggleTheme}
        className="absolute top-5 sm:top-7 right-14 sm:right-2 lg:mr-4 text-lg sm:text-lg md:text-lg"
      >
        {" "}
        {theme === "dark" ? (
          <MdOutlineLightMode className="text-white" />
        ) : (
          <BsMoonStarsFill className="text-[#24222D]" />
        )}{" "}
      </button>
      <TfiMenu // Menu Icon
        onClick={() => setShow((prev) => !prev)}
        className="flex sm:hidden  text-xl cursor-pointer hover:scale-110 transition text-[#24222D]"
      />
      <div // Overlay
        onClick={() => setShow((prev) => !prev)}
        className={` fixed sm:hidden inset-0 z-40 backdrop-blur-sm bg-black/40 transition ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <div // Sidebar
        className={`h-screen w-[50%] fixed left-0 top-0 z-50 flex sm:hidden flex-col gap-16  items-start bg-white px-3 py-6 transition-transform duration-500 ease-in-out ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div // Top
          className="flex w-full justify-between "
        >
          <span className="text-3xl font-semibold  text-[#24222D]  cursor-pointer">
            Behruz
          </span>
          <div className="close-icon">
            <VscChromeClose onClick={() => setShow(false)} />
          </div>
        </div>

        <ul // Links
          className=" flex flex-col gap-4  mt-5 "
        >
          <li>
            <a
              href="/"
              className="link-m "
              onClick={() => setShow((prev) => !prev)}
            >
              <span> Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about me"
              className="link-m "
              onClick={() => setShow((prev) => !prev)}
            >
              <span> About Me</span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="link-m"
              onClick={() => setShow((prev) => !prev)}
            >
              <span> Skills</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="link-m"
              onClick={() => setShow((prev) => !prev)}
            >
              <span> Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="link-m"
              onClick={() => setShow((prev) => !prev)}
            >
              <span>Contact</span>
            </a>
          </li>
        </ul>

        <div // Social Links
          className="  "
        >
          <span className="text-gray-800 text-md">Find me on </span>
          <div className="flex gap-1 mt-10">
            <a href="">
              <div className="social-icon">
                <FaGithub />
              </div>
            </a>
            <a href="">
              <div className="social-icon">
                <FaLinkedin />
              </div>
            </a>
            <a href="">
              <div className="social-icon">
                <FaFacebook />
              </div>
            </a>
            <a href="">
              <div className="social-icon">
                <AiFillInstagram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
