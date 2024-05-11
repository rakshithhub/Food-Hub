// import { useState } from "react";
// import { RxCaretDown } from "react-icons/rx";
// import { CiSearch } from "react-icons/ci";
// import { IoIosHelpCircleOutline } from "react-icons/io";
// import { CiDiscount1 } from "react-icons/ci";
// import { CiUser } from "react-icons/ci";
// import { RxCardStackPlus } from "react-icons/rx";

// const Header = () => {
//     const [toggle, setToggle] = useState(false);

//     const links = [
//         {
//             icon: <CiSearch/>,
//             name: "Search",
//         },
//         {
//             icon: <CiDiscount1/>,
//             name: "Offer",
//         },
//         {
//             icon: <IoIosHelpCircleOutline/>,
//             name: "Help",
//         },
//         {
//             icon: <CiUser/>,
//             name: "Sign In",
//         },
//         {
//             icon: <RxCardStackPlus/>,
//             name: "Card",
//         },
//     ]
//   return (
//     <>
//     <div className="black-overlay w-full h-full fixed duration-500" style={{
//         opacity: toggle ? 1 : 0,
//         visibility: toggle ? "visible" : "hidden"
//     }} onClick={() => setToggle(!toggle)}>
//         <div className="w-[500px] h-full bg-white absolute duration-300" style={{
//             left: toggle ? "0%" : "-100%",
//         }} onClick={(e) => e.stopPropagation()}></div>
//     </div>
//         <header className="shadow-xl p-2">
//             <div className="max-w-[1200px] mx-auto flex items-center">
//                 <div className="w-[100px]">
//                     <img src="/src/assets/logo.jpg" alt="random img" className="w-full" />
//                 </div>
//                 <div className="">
//                     <span className="font-bold border-b-2 border-b-black">Ratanada</span> Jodhpur, Rajasthan, India <RxCaretDown className="inline-block font-bold text-3xl text-[orange] cursor-pointer" onClick={() => setToggle(!toggle)}/>
//                 </div>
//                 <nav className="ml-auto">
//                     <ul className="flex gap-10 font-semibold text-[17px] cursor-pointer list-none">
//                         {
//                             links.map((link, index) => (
//                                 <li key={index} className="flex items-center gap-2 hover:text-[orange] duration-75">
//                                     {link.icon}
//                                     {link.name}
//                                 </li>
//                             )) 
//                         }
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     </>
//   )
// }

// export default Header