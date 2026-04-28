import React from "react";
import Skills from "../components/Skills";

const About = () => {
  return (
    <>
      <section
        id="about"
        className=" relative min-h-screen w-full bg-[#FCDB74] dark:bg-[#24222d] overflow-hidden"
      >
        <h1 className=" absolute inset-0  flex  justify-center font-extrabold text-6xl translate-y-8 sm:text-[90px] lg:text-[120px] text-black/10 dark:text-white/10 pointer-events-none">
          About Me
        </h1>

        <div className="relative z-10  px-6 sm:px-8 lg:px-12 pb-5 sm:pb-10  pt-24 sm:pt-32 lg:pt-44 gap-5 grid grid-cols-1 lg:grid-cols-2">
          <div className="py-10 min-h-[461px] max-w-full lg:max-w-[625px] mx-auto bg-[url(./images/bg-img-1.svg)]  bg-cover bg-center rounded-2xl  bg-[#FCDB74] dark:bg-[#24222D]">
            <div className="flex flex-col gap-10 pl-4 ">
              <p className="font-bold text-xs tracking-[18%] text-[#FCDB74]">
                EDUCATION
              </p>
              <div>
                <div className="flex gap-2 ">
                  <img src="./icons/badge-2.svg" alt="Yello Badge" />
                  <h2 className="font-bold text-sm md:text-base text-white dark:text-[#FCDB74]leading-relaxed">
                    Recent Graduate School / Grade A
                  </h2>
                </div>
                <p className="font-normal text-xs md:text-sm text-white dark:text-[#FCDB74] mt-1 ml-6 opacity-70 leading-relaxed">
                  Sayed Ahmad Alodal High School
                </p>
                <span className="font-normal text-xs text-[#FCDB74] mt-1 ml-6">
                  2012-2024
                </span>
                <p className=" ml-6 font-normal text-xs sm:text-sm opacity-60 mt-3 leading-relaxed text-white dark:text-[#FCDB74]">
                  I have excellently completed elementry, secondary and high
                  school at Sayed Ahamd Alodal High School,which is located in
                  Ghazni province.
                </p>

                <div className="flex gap-2 mt-10 ">
                  <img src="./icons/badge-2.svg" alt="Yello Badge" />
                  <h2 className="font-bold text-sm md:text-base text-white dark:text-white leading-relaxed">
                    Recent Graduate English Course / Grade A
                  </h2>
                </div>
                <p className="font-normal text-xs md:text-base text-white dark:text-[#FCDB74] mt-1 ml-6 opacity-70 leading-relaxed">
                  Excellent Star Educational Society
                </p>
                <span className="font-normal text-xs sm:text-sm text-[#FCDB74] mt-1 ml-6">
                  2024-2025
                </span>
                <p className="ml-6 font-normal text-xs sm:text-sm opacity-60 mt-3 leading-relaxed text-white dark:text-[#FCDB74] ">
                  I have successfully completed the Post Basic Course at
                  Excellent Star Educational Society, achieving the highest
                  distincton "A" grade with a score of 95 percentage.
                </p>
              </div>
            </div>
          </div>

          <div className="py-10 min-h-[461px]  max-w-full mx-auto lg:max-w-[625px] bg-[url(./images/bg-img-1.svg)]  bg-cover bg-center rounded-2xl  bg-[#FCDB74] dark:bg-[#24222D]">
            <div className="flex flex-col gap-10 pl-4 ">
              <p className="font-bold text-xs tracking-[18%] text-[#FCDB74]">
                EXPERIENCE
              </p>
              <div>
                <div className="flex gap-2 ">
                  <img src="./icons/badge-2.svg" alt="Tello Badge" />
                  <h2 className="font-bold text-sm md:text-base text-white dark:text-white leading-relaxed">
                    Proficient Frontend Web Developer
                  </h2>
                </div>
                <p className="font-normal text-xs md:text-sm text-white dark:text-[#FCDB74] mt-1 ml-6 opacity-70 leading-relaxed">
                  Itex Service
                </p>
                <span className="font-normal text-xs md:text-sm text-[#FCDB74] mt-1 ml-6">
                  2025-2026
                </span>
                <p className=" ml-6 font-normal text-xs sm:text-sm opacity-60 mt-3 leading-relaxed text-white dark:text-[#FCDB74] ">
                  I have successfully completed frontend web developing journey
                  at Itex Service. Moreover I'm learning backend web developing.
                </p>

                <div className="flex gap-2 mt-10 ">
                  <img src="./icons/badge-2.svg" alt="Tello Badge" />
                  <h2 className="font-bold text-base text-white dark:text-white leading-relaxed">
                    Itex Service
                  </h2>
                </div>
                <p className="font-normal text-xs md:text-sm text-white dark:text-[#FCDB74] mt-1 ml-6 opacity-70 leading-relaxed">
                  Learnin Backend Developing
                </p>
                <span className="font-normal text-xs md:text-sm text-[#FCDB74] mt-1 ml-6">
                  2025-2026
                </span>
                <p className="ml-6 font-normal text-xs sm:text-sm opacity-60 mt-3 leading-relaxed text-white dark:text-[#FCDB74] ">
                  I am studying backend web development at Itex Service
                  nowadays. Morover, I am currently busy upgrading both design
                  and developing skills.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Skills />
      </section>
    </>
  );
};

export default About;
