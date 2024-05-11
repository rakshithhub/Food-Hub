import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrementQty, deleteItem, incrementQty } from "../redux/features/cartItemSlice";
import toast from "react-hot-toast";

const OrderItem = ({cart}) => {
    const {id, img, name, price, qty} = cart;
    const dispatch = useDispatch();
  return (
    <>
        <div className="p-2 border border-gray-300 rounded-xl flex shadow-lg mb-2">
            <div className="mr-2">
                <img src={img} alt="" className="w-[65px]"/>
            </div>
            <div className="w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-yellow-700">{name}</h1>
                    <MdDeleteForever className="text-xl cursor-pointer" onClick={() => {
                        dispatch(deleteItem(cart));
                        toast(`Removed ${name}`, {
                            icon: '❌',
                        });
                        }}/>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold">₹ {price}</h1>
                    <h1 className=""><button className="px-2 border-none outline-none text-gray-700 bg-yellow-500 text-xl font-bold hover: hover:bg-green-400 transition-all duration-500 mr-2" onClick={() => dispatch(decrementQty(cart))}>-</button><span className="font-bold">{qty}</span><button className="px-2 border-none outline-none text-gray-700 bg-yellow-500 text-xl font-bold hover: hover:bg-green-400 transition-all duration-500 ml-2" onClick={() => dispatch(incrementQty(cart))}>+</button> </h1> 
                </div>
            </div>
        </div>
    </>
  )
}

export default OrderItem


