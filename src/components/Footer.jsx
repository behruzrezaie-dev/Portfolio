import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between lg:gap-10  px-5   py-2  bg-[#FCDB74] dark:bg-[#24222D]">
        <span className=" text-sm md:text-lg lg:text-xl x font-semibold tracking-wide  text-[#24222D] dark:text-gray-300">
          &copy; Behruz 2026
        </span>

        <div className="flex sm:gap-1 md:gap-0">
          <a href="https://github.com/behruzrezaie-dev" target="blank">
            <div className="social-icon">
              <FaGithub />
            </div>
          </a>
          <a href="https://instagram.com/behr0z.10" target="blank">
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
    </>
  );
};

export default Footer;
