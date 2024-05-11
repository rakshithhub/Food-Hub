import { useEffect, useState } from "react";
import FoodData from "../FoodData";
import { useDispatch } from "react-redux";
import { changeValue } from "../redux/features/categoryFilter";

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        let cat = [...new Set(FoodData.map((item) => {
            return item.category; 
        }))]
        setCategories(["All", ...cat]);
    }, [])
    
  return (
    <>
        <div className="w-full mb-7">
            <div className="max-w-[1240px] mx-auto p-3 flex flex-wrap gap-8">
                {
                    categories && categories.map((item, i) => (
                        <div key={i}>
                            <button className={`border border-none outline-none px-2 text-gray-700 py-2 bg-yellow-500 text-[0.76rem] md:text-xl font-bold rounded-lg hover:bg-green-400 transition-all duration-500 uppercase active:bg-green-500`} onClick={() => dispatch(changeValue(item))}>{item}</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  );
};

export default Categories;
