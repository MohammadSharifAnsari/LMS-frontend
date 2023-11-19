import { useNavigate } from "react-router-dom";

//denied page isliye bn arhe hain ki kuch page sirf admin access kar sakta hai userr nhi to agar us page ko user access karne ki koshish karega then denied bta dega
function Denied() {

    const navigate=useNavigate();

    return (
        <main className=" h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">

            <h1 className=" text-9xl font-extrabold text-white tracking-widest ">
                403
            </h1>
            <div className=" bg-black text-white px-2 text-sm rounded rotate-12 absolute ">
                Access denied
            </div>
            <button onClick={()=>{ navigate(-1) }} className="  mt-5">
                <span className="  relative block px-8 py-3 bg-[#1A2238] text-white border border-white ">
Go Back
                </span>
            </button>

        </main>

    )

}


export default Denied;