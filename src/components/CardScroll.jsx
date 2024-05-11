// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// const CardScroll = () => {
//   const [products, setProducts] = useState([]);
//   const [slide, setSlide] = useState(0);

//   // const fetchProductApi = async () => {
//   //     const response = await fetch("https://dummyjson.com/products");
//   //     const data = await response.json();
//   //     setProducts(data.products);
//   // }

//   // useEffect(() => {
//   //     fetchProductApi();
//   // }, [])

//   const rightSlide = () => {
//     if (slide === 4800) return false;
//     setSlide(slide + 400);
//   };
//   const leftSlide = () => {
//     if (slide === 0) return false;
//     setSlide(slide - 400);
//   };
//   return (
//     <>
//       <div className="mt-5 max-w-[1200px] mx-auto">
//         <div className="flex justify-between items-center">
//           <p className="font-bold text-2xl">Top Products In Allahabad</p>
//           <div className="flex gap-5">
//             <div
//               className="bg-slate-400 rounded-full w-[25px] h-[25px] flex justify-center items-center cursor-pointer"
//               onClick={leftSlide}
//             >
//               <FaArrowLeft />
//             </div>
//             <div
//               className="bg-slate-400 rounded-full w-[25px] h-[25px] flex justify-center items-center cursor-pointer"
//               onClick={rightSlide}
//             >
//               <FaArrowRight />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CardScroll;
