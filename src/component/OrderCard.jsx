import { IoCloseOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import OrderItem from "./OrderItem";
import { useState } from "react";
import { useSelector } from "react-redux";


const OrderCard = () => {
  const [toggle, setToggle] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalItem = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  return (
    <>
        <div className={`fixed top-0 ${toggle ? "right-0" : "right-[-100%]"} lg:w-[22vw] w-full h-full bg-white px-6 py-4 duration-700 transition-all z-40`}>
            <div className="flex justify-between items-center mb-3">
                <h1 className="font-bold text-3xl">My Orders</h1>
                <IoCloseOutline className="text-3xl font-bold text-red-600 cursor-pointer" onClick={() => setToggle(!toggle)}/>
            </div>
            <hr className="mb-4"/>

            <div className="h-[440px] lg:h-[520px] overflow-auto">
              
                {
                  cartItems.length > 0 ? cartItems.map((cart) => (
                    <OrderItem key={cart.id} cart={cart}/>
                  )) : <h1 className="text-center text-2xl font-bold text-red-500">Cart is empty ! Please add products 😧</h1>
                }
            </div>

            <div className="absolute bottom-4 w-[93%] overflow-hidden">
                <hr className="mb-2"/>
                <h1 className="text-xl font-bold uppercase mb-2">items : {totalItem}</h1>
                <h1 className="text-xl font-bold uppercase mb-2">amount : ₹ {totalAmount}</h1>
                <button className="mx-auto w-[95%] border border-none outline-none px-3 text-gray-700 py-3 bg-yellow-500 text-xl font-bold rounded-lg hover: hover:bg-green-400 transition-all duration-500 capitalize">order now</button>
            </div>
        </div>
        <div className="fixed bottom-10 right-10 border border-gray-400 p-4 rounded-full shadow-xl cursor-pointer bg-yellow-500" onClick={() => setToggle(!toggle)}>
          <button className=""><FaCartPlus className=" text-xl font-bold md:text-3xl"/></button>
          <p className="absolute top-[-11px] right-1 font-bold text-lg bg-black text-white px-2 rounded-full">{totalItem}</p>
        </div>

    </>
  )
}

export default OrderCard;