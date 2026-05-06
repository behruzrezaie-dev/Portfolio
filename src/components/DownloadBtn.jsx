import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { motion } from "framer-motion";
const DownloadBtn = () => {
  return (
    <motion.a
      href="images/cv.pdf"
      download="Behruz-rezaie-Cv.pdf"
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={` relative overflow-hidden cursor-pointer h-12 w-[225px] px-4 hover:px-2 gap-2 flex  items-center outline-none border-none  bg-[#22242d] dark:bg-[#FCDB74]   text-[#FCDB74] dark:text-[#22242d] dark:hover:text-white  text-sm md:text-base font-semibold rounded-full `}
    >
      <motion.div
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 origin-left bg-[#584B8C]   rounded-full z-0 "
      />
      <motion.img
        variants={{
          rest: { opacity: 1, x: 0 },
          hover: { opacity: 0, x: 30 },
        }}
        transition={{ duration: 0.25 }}
        src="light-arrow.svg"
        alt="arrow"
        className="z-10 "
      />
      <span className="z-10 ">Download CV</span>

      <motion.img
        variants={{
          rest: { opacity: 0, x: -30 },
          hover: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.25 }}
        src="dark-arrow.svg"
        alt="arrow"
        className="z-10  "
      />
    </motion.a>
  );
};

export default DownloadBtn;
