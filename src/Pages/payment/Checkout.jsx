import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getRazorPayId,
  purchaseCourseBundle,
  verifyUserPayment,
} from "../../REDUX/Slices/RazorPaySlice";
import toast from "react-hot-toast";
import HomeLayout from "../../Layouts/HomeLayout.jsx";
import { BiRupee } from "react-icons/bi";
import { getUserData } from "../../REDUX/Slices/authslice";
function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const razorpayKey = useSelector((state) => {
    return state?.razorpay?.key;
  });
  const subscription_id = useSelector((state) => {
    return state?.razorpay?.subscription_id;
  });
  const isPaymentVerified = useSelector((state) => {
    return state?.razorpay?.isPaymentVerified;
  });
  const userData = useSelector((state) => {
    return state?.auth?.data;
  });
  const paymentDetails = {
    razorpay_payment_id: "",
    razorpay_subscription_id: "",
    razorpay_signature: "",
  };

  async function handleSubscription(e) {
    e.preventDefault();
    if (!razorpayKey || !subscription_id) {
      toast.error("Something went wrong");
      return;
    }

    const options = {
      key: razorpayKey,
      subscription_id: subscription_id,
      name: "Coursify Pvt.Ltd",
      description: "subscription", //payment complete hone par handler call ho jaega
      theme: {
        //theme of razorpay
        color: "#F37254",
      },
      prifill: {
        email: userData.email,//yahan agar kuch nhi likhenge to payment gaitway par information deni padegi
        name: userData.name,
      },
      //jab payment success ho jaegi tab handler function execute hoga aur yeh function razorpay ka object execute karega 
      handler: async function (response) {
        //response object razorpay se milega jisme yeh teenon property filled hongi
        paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
        paymentDetails.razorpay_subscription_id =response.razorpay_subscription_id;
        paymentDetails.razorpay_signature = response.razorpay_signature;
        toast.success("Payment successfull");
        
       const res= await dispatch(verifyUserPayment(paymentDetails));
          await dispatch(getUserData());
     

        (res?.payload?.success?navigate("/checkout/success"): navigate("/checkout/fail"))

      },
    };

    const paymentObject = new window.Razorpay(options); //yahan new razorpay window bna rahen hain
    paymentObject.open();
  }

  async function load() {
    await dispatch(getRazorPayId()); //it gives razorpay key to key parameter
    await dispatch(purchaseCourseBundle()); //yeh subscription id de degfa parameter me
  }

      useEffect(()=>{
  load();
      },[])

  return (
    <HomeLayout>
      <form
        action=""
        onSubmit={handleSubscription}
        className=" min-h-[90vh] flex items-center justify-center text-white "
      >
        <div className=" w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative ">
          <h1 className=" bg-yellow-500 absolute top-0 w-full text-center p-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
            Subscription Bundle
          </h1>

          <div className=" px-4 space-y-5 text-center  ">

            <p className=" text-[17px]">
              This purchase will allow you to access all avilable course of our
              platform for{" "}
              <span className=" text-yellow-500 font-bold">
                <br />1 year duration
              </span>{" "}
              All the existing and new launched courses will be also available
            </p>
            <p className=" flex  items-center justify-center gap-1 text-2xl font-bold text-yellow-500">
              <BiRupee /> <span>499</span>only
            </p>
            <div className=" text-gray-100 ">
              <p>
                100% refund on cancellation
              </p>
              <p>
                * terms and condition applied *
              </p>
            </div>

<button type="submit" className=" bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full left-0 text-xl font-bold rounded-bl-lg rounded-br-lg py-2 " >
  buy now
</button>
          </div>

        </div>

      </form>
    </HomeLayout>
  );
}

export default Checkout;
