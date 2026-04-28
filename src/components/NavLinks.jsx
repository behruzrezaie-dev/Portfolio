import React from "react";

const NavLinks = () => {
  return (
    <>
      <nav>
        <ul className=" lg:gap-4 items-center hidden md:flex ">
          <li>
            <a href="/" className="link ">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="link ">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;
