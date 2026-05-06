import DownloadBtn from "../components/DownloadBtn";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#FCDB74] dark:bg-[#24222D] relative overflow-hidden flex items-center"
    >
      <h1 className="md:hidden absolute top-16  left-1/2 -translate-x-1/2 text-5xl  font-extrabold text-black/10 dark:text-white/10 text-center leading-none">
        CREATIVE <br /> DEVELOPER
      </h1>
      <h1 className="hidden md:block absolute top-28  md:top-28 lg:top-20 xl:top-20  left-1/2 -translate-x-1/2 text-6xl lg:text-7xl  xl:text-8xl 2xl:text-9xl  font-extrabold text-black/10 dark:text-white/10 whitespace-nowrap pointer-events-none">
        CREATIVE DEVELOPER
      </h1>
      <div // CONTAINER
        className="w-full pt-32 md:pt-0 lg:pt-10  px-6 md:px-12 lg:px-20  "
      >
        <div // MOBILE
          className="flex flex-col items-center text-center md:hidden relative z-10"
        >
          <img
            src="profile.webp"
            className="w-56 "
            alt="Behruz Rezaie"
            loading="eager"
            fetchPriority="high"
            width="300"
            height="300"
          />

          <div className="flex items-center gap-2 mb-2">
            <img src="badge-1.svg" className="w-3 h-3" alt="purple badge" />
            <p className="text-[11px] tracking-widest font-bold text-[#584B8C] dark:text-white">
              AVAILABLE FOR WORK
            </p>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-[#24222D] dark:text-white">
            Creative Developer <br /> based in Afghanistan
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-6 text-[#24222D] dark:text-white max-w-xs mt-4">
            Hi, I'm Behruz Rezaie — a frontend developer passionate about
            creating seamless digital experiences that connect and convert.
          </p>

          <div className="mt-5">
            <DownloadBtn />
          </div>
        </div>

        <div //  DESKTOP
          className="hidden md:grid grid-cols-3 md:min-h-[425px] items-end  pt-20 md:pt-0 xl:pt-10  "
        >
          <div // LEFT
            className="flex flex-col justify-end gap-4 lg:gap-0   "
          >
            <div className="flex items-center gap-2 ">
              <img src="badge-1.svg" className="w-3 h-3 " alt="purple badge" />
              <p className="text-[10px] tracking-widest font-bold text-[#584B8C] dark:text-white">
                AVAILABLE FOR WORK
              </p>
            </div>

            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-[#24222D] dark:text-white">
              Creative Developer{" "}
              <span className="block lg:inline">based in Afghanistan</span>
            </h1>

            <span className="text-6xl lg:text-8xl xl:text-9xl font-extrabold leading-none tracking-tight text-[#24222D] dark:text-[#FCDB74] mt-12 lg:mt-8  lg:translate-x-2">
              Behruz
            </span>
          </div>

          <img
            src="profile.webp"
            alt="Behruz Rezaie"
            loading="eager"
            fetchPriority="high"
            width="520"
            height="560"
            className="w-80 h-[360px] md:w-[380px] md:h-[420px] lg:w-[460px] lg:h-[500px] xl:w-[520px] xl:h-[560px] drop-shadow-2xl"
          />

          <div // RIGHT
            className="flex flex-col justify-end lg:space-y-3    "
          >
            <div className=" ">
              <p className="text-sm  lg:text-base leading-6 text-[#24222D] dark:text-white pb-4 ">
                Hi, I'm Behruz Rezaie — a frontend developer passionate about
                creating seamless digital experiences that connect and convert.
              </p>

              <DownloadBtn />
            </div>

            <span className="text-6xl lg:text-8xl xl:text-9xl font-extrabold leading-none tracking-tight text-[#24222D] dark:text-[#FCDB74] mt-10 lg:mt-16 lg:-translate-x-10 ">
              Rezaie
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
