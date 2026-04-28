import React from "react";
import { GrLinkNext } from "react-icons/gr";

const DownloadBtn = () => {
  return (
    <a href="/images/cv.pdf" download="Behruz-rezaie-Cv.pdf">
      <div className="group relative bg-[#24222D] inline-flex items-center justify-center px-4 py-2  text-sm font-semibold text-[#FCDB74] border border-[#FCDB74]  rounded-full overflow-hidden cursor-pointer">
        <span className="absolute inset-0 bg-[#584B8C] dark:bg-[#FCDB74] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></span>
        <span className="relative flex items-center gap-2 z-10 group-hover:text-[#FCDB74] hover:dark:text-[#24222D]">
          <GrLinkNext className="text-base opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
          <span className="  group-hover:text-[#FCDB74] hover:dark:text-[#24222D]  transition-all duration-300">
            Download CV
          </span>
          <GrLinkNext className="text-base transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-3 " />
        </span>
      </div>
    </a>
  );
};

export default DownloadBtn;
