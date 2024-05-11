import { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])
    return (
    <>
        <div className="w-full h-screen flex flex-col items-center justify-center">
            {
                loading ? <PropagateLoader color="#36d7b7" size={42}/> : <div>
                <h1 className="text-3xl font-bold text-center text-yellow-500">Order Placed</h1>
                <h1 className="text-xl font-bold text-slate-400 mb-3">Your Order is Placed Successfully!!</h1>
                <button className="text-center font-bold text-lg border border-none outline-none underline flex items-center mx-auto" onClick={() => navigate("/")}><FaArrowLeft className="mr-3"/> Go Back</button>
            </div>
            }
        </div>
    </>
    )
}

export default Success