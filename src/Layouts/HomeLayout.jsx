import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer.jsx";
import { useDispatch, useSelector } from "react-redux";



function HomeLayout({ children }) {

const dispatch=useDispatch();
const navigate=useNavigate();
//for cgeking user is logged in or not
const isLoggedIn=useSelector((state)=>{
   return state?.auth?.isLoggedIn;
});

//for displaying option according to role
const role=useSelector((state)=>{
  return state?.auth?.role;
})
//e is event object
async function handleLogout(e){
  e.preventDefault();//because logout link tag ke andar laga hai then e.preventdefault() us link par jane se rok dega
  // const res=await dispatch(Logout());
// jab reducer  likhenge tab yeh work karega

// if(res?.payload?.success)

navigate("/");//when res ke payload me success milegi the navigate

}

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");

    drawerSide[0].style.width ="auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");

    drawerSide[0].style.width =0;
  }

  return (
    <div className="min-h-[90vh] ">
      <div className=" drawer  absolute left-0 w-fit z-50 ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        {/* input checkbox sirf yeh bataega ki drawer bahar hai ki andar if checked then bahar otherwise andar */}

         <div className=" drawer-content ">
              
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              size={"32px"}
              onClick={changeWidth}
              className=" font-bold m-4 text-white "
            />
          </label>
        </div> 
          {/* htmlFor="my-drawer hai means jaise hi is label pe click kar denge waese hi my drawer id wala element par click hoga and is case me my drawer id wala element input checkbox hai jisme drawer toggle class hai " */}


        <div className=" drawer-side w-0 ">
         
          <label htmlFor=" my-drawer " className=" drawer-overlay "></label>
            

          <ul className=" menu p-4 w-80 md:w-48 bg-base-200 text-base-content ">
            <li className=" w-fit absolute right-2 z-50 ">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle />
              </button>
            </li>

            <li>
              <Link to="/">Home</Link>
            </li>
          {isLoggedIn&&role=='ADMIN'&&(
            <li>
              <Link to="/admin/dashboard">Admin Dashboard</Link>
            </li>
          ) }

            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
{!isLoggedIn&&( 

<li className=" absolute bottom-4 w-[90%]">



<div className=" w-full flex items-center justify-center">

<button className=" btn-primary px-4 py-1 font-semibold rounded-md w-full  ">
<Link to={"/login"} >Login</Link>
</button>
<button className=" btn-secondary target:_blank px-4 py-1 font-semibold rounded-md w-full  ">
<Link to={"/login"}  >Signup</Link>
</button>


</div>

</li>

) }

{isLoggedIn&&( 

<li className="absolute bottom-4 w-[90%]">



<div className="w-full flex items-center justify-center">

<button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
<Link to={"/user/profile"} >Profile</Link>
</button>
<button className=" btn-secondary target:_blank px-4 py-1 font-semibold rounded-md w-full">
<Link onClick={handleLogout} >Logout</Link>
</button>


</div>

</li>

) }





          

          </ul>


        </div>



      </div>


{children}

<Footer/>
      
    </div>

  );




}








export default HomeLayout;
