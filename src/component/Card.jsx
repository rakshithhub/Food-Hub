import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/features/cartItemSlice";

const Card = ({food}) => {

    const dispatch = useDispatch();    
    const {id, img, name, price, desc, category, rating} = food;

  return (
    <>
        <div className="w-[250px] border border-gray-300 p-2 rounded-lg shadow-lg flex flex-col gap-3 hover:scale-105 duration-500 mx-auto">
            <div className="overflow-hidden"> 
                <img src={img} className="w-full h-[160px] hover:scale-110 duration-500 cursor-grab object-cover" alt="" />
            </div>
            <div>
                <h3 className=" font-bold text-xl text-yellow-700">{name}</h3>
                <p className="font-medium text-md capitalize mb-2 ">{desc.slice(0,100)+"..."}</p>
                <p className="text-2xl font-bold">₹ {price}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="flex items-center"><IoStar className="text-yellow-500 text-2xl mr-2 font-bold"/> <span className="text-lg font-semibold">{rating}</span></p>
                <button className="border border-none outline-none px-3 text-gray-700 py-2 bg-yellow-500  font-bold rounded-lg hover: hover:bg-green-400 transition-all duration-500" onClick={() => dispatch(addItem({...food, qty: 1}))}>Add to card</button>
            </div>
        </div>
    </>
  )
}

export default Card