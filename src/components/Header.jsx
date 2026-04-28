import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 w-full px-4 sm:px-10 md:px-8  py-3  bg-[#FCDB74]/90 dark:bg-[#24222D]/90 backdrop-blur-md shadow-md ">
        <div className="flex justify-between items-center mt-0.5 sm:mt-1 ">
          <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-wide ml-12 text-[#24222D] dark:text-gray-300">
            Behruz
          </span>
          <NavLinks />
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default Header;
