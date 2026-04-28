import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#FCDB74] dark:bg-[#24222d] py-20 px-2 sm:px-10 lg:px-10"
    >
      <h1 className="absolute inset-0 top-10 sm:top-5 lg:top-0 flex justify-center  font-extrabold text-6xl sm:text-7xl lg:text-9xl text-black/10 dark:text-white/10 pointer-events-none">
        Projects
      </h1>

      <div className="relative z-10  max-w-6xl mx-auto place-items-center lg:max-w-full  grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20 gap-4 lg:gap-10  ">
        {/* Portfolio Card */}
        <motion.a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="relative block cursor-pointer"
          initial="rest"
          whileHover="hover"
        >
          <motion.img
            src="./images/me-d.png"
            className=" h-[320px] md:h-[420px] lg:h-[480px]  object-cover rounded-2xl dark:hidden "
            variants={{
              rest: { filter: "blur(0px)" },
              hover: { filter: "blur(3px)" },
            }}
          />
          <motion.img
            src="./images/me-l.png"
            className=" h-[320px] md:h-[420px] lg:h-[480px]  object-cover rounded-2xl hidden dark:block "
            variants={{
              rest: { filter: "blur(0px)" },
              hover: { filter: "blur(3px)" },
            }}
          />

          <motion.div
            className="absolute inset-0 bg-black/40 rounded-2xl"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FCDB74] dark:text-white">
              Personal Portfolio
            </h3>
          </motion.div>
        </motion.a>
        {/* Guess Number Game Card */}
        <motion.a
          href="https://guess-number-game-hazel-kappa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block cursor-pointer"
          initial="rest"
          whileHover="hover"
        >
          <motion.img
            src="./images/guess1-img.png"
            className="h-[320px] md:h-[420px] lg:h-[480px] object-cover rounded-2xl w-full"
            variants={{
              rest: { filter: "blur(0px)" },
              hover: { filter: "blur(3px)" },
            }}
          />

          <motion.div
            className="absolute inset-0 bg-black/40 rounded-2xl"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FCDB74] dark:text-white">
              Guess Number Game
            </h3>
          </motion.div>
        </motion.a>
        {/* Loin Page Card */}
        <motion.a
          href="https://login-page-git-main-divbehruz2025-9018s-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block cursor-pointer"
          initial="rest"
          whileHover="hover"
        >
          <motion.img
            src="./images/login2-img.png"
            className="h-[320px] md:h-[420px] lg:h-[480px] object-cover rounded-2xl w-full"
            variants={{
              rest: { filter: "blur(0px)" },
              hover: { filter: "blur(3px)" },
            }}
          />

          <motion.div
            className="absolute inset-0 bg-black/40 rounded-2xl"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FCDB74] dark:text-white">
              Animated Loin Page
            </h3>
          </motion.div>
        </motion.a>
        {/* Calculator Card */}
        <motion.a
          href="https://calculator-beta-steel-98.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block cursor-pointer"
          initial="rest"
          whileHover="hover"
        >
          <motion.img
            src="./images/calc-img.png"
            className="h-[320px] md:h-[420px] lg:h-[480px] object-cover rounded-2xl w-full"
            variants={{
              rest: { filter: "blur(0px)" },
              hover: { filter: "blur(3px)" },
            }}
          />

          <motion.div
            className="absolute inset-0 bg-black/40 rounded-2xl"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FCDB74] dark:text-white">
              Responsive Calculator
            </h3>
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
