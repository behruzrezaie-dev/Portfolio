// import React from "react";

// const Menu = () => {
//   return (
//     <>
//         import { useState } from "react";
// import NavLinks from "./NavLinks";
// import SocialLinks from "./SocialLinks";
// import { TfiMenu } from "react-icons/tfi";
// import { VscChromeClose } from "react-icons/vsc";
// import { MdDarkMode, MdLightMode } from "react-icons/md";

// const Header = () => {
//   const [show, setShow] = useState(false);
//   const [dark, setDark] = useState(false);

//   return (
//     <>
//       {/* Header */}
//       <section className="px-6 py-5 bg-[#FCDB74] border-b border-black/10">
//         <div className="flex justify-between items-center">
//           {/* 🔥 LEFT SIDE (Menu + Logo) */}
//           <div className="flex items-center gap-3">
//             <TfiMenu
//               onClick={() => setShow(true)}
//               className="text-xl cursor-pointer hover:scale-110 transition text-[#24222D]"
//             />

//             <h1 className="text-lg font-semibold tracking-wide text-[#24222D] hover:tracking-wider transition cursor-pointer">
//               Behruz
//             </h1>
//           </div>

//           {/* 🔥 RIGHT SIDE */}
//           <div className="flex items-center gap-6">
//             <NavLinks />
//             <SocialLinks />

//             {/* 🌙 Dark Mode */}
//             <div
//               onClick={() => setDark(!dark)}
//               className="cursor-pointer text-xl hover:scale-110 transition"
//             >
//               {dark ? <MdLightMode /> : <MdDarkMode />}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Overlay */}
//       <div
//         onClick={() => setShow(false)}
//         className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${
//           show ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       />

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-screen w-[80%] max-w-sm bg-white z-50 p-6 transition-transform duration-300 ${
//           show ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Top */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="font-semibold">Menu</h2>
//           <VscChromeClose
//             onClick={() => setShow(false)}
//             className="text-2xl cursor-pointer"
//           />
//         </div>

//         {/* Links */}
//         <ul className="flex flex-col gap-6">
//           {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item.toLowerCase()}`}
//                 onClick={() => setShow(false)}
//                 className="group flex justify-between text-gray-700 hover:text-black transition"
//               >
//                 {item}
//                 <span className="opacity-0 group-hover:opacity-100 transition">
//                   →
//                 </span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Header;

//     </>
//   );
// };

// export default Menu;
