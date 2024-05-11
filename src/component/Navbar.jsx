import { useDispatch } from "react-redux"
import { filterSearch } from "../redux/features/searchFilter";

const Navbar = () => {
    const dispatch = useDispatch();
  return (
    <>
        <div className="w-full shadow-lg mb-7">
            <nav className="max-w-[1240px] mx-auto p-3 lg:flex justify-between items-center">
                <div className="flex">
                    <img src="/Good-food-logo-design-on-transparent-background-PNG.png" alt="" className="w-[80px]"/>
                    <div className="flex flex-col justify-end">
                        <h1 className="text-4xl font-bold text-gray-600 uppercase">Food hub</h1>
                        <p className="font-semibold text-xl">{new Date().toUTCString().slice(0,16)}</p>
                    </div>
                </div>
                <div className="">
                    <input type="text" className="border border-gray-500 p-2 rounded-lg lg:w-[20vw] w-[60vw] outline-none font-semibold text-xl mr-5" onChange={(e) => dispatch(filterSearch(e.target.value))}/>
                    <button className="border border-none outline-none px-3 text-gray-700 py-3 bg-yellow-500 text-xl font-bold rounded-lg hover: hover:bg-green-400 transition-all duration-500 ">Search</button>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar