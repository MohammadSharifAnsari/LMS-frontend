import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, updateProfile } from "../../REDUX/Slices/authslice";
import { useNavigate, Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import HomeLayout from "../../Layouts/HomeLayout";

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [data, setData] = useState({
    fullName:"",
    previewImage: "",
    avatar: undefined,
    userId: useSelector((state) => {
      return state?.auth?.data?._id;
    }),
  });

  function handleImageUpload(e) {
    e.preventDefault();
    const uploadedImage = e.target.files[0];

    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);

      fileReader.addEventListener("load", function () {
        setData({
          ...data,
          previewImage: this.result,
          avatar: uploadedImage,
        });
      });
    }
  }

  function handleInputChange(e) {
  const  { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log("data>>",data);

    if (!data.avatar || !data.fullName) {
      toast.error("All fields are mandatory ");
      return;
    }
    if (data.fullName.length < 5) {
      toast.error("Name cannot be less than 5 character");
      return;
    }

    let formData = new FormData(); //multipart form data
    formData.append("fullName", data.fullName);
    formData.append("avatar", data.avatar);

    await dispatch(updateProfile([data.userId, formData]));
console.log("formdata>>",formData.entries().next());
   const resdata= await dispatch(getUserData());
   console.log("resdata>>",resdata);

    navigate("/user/profile");
  }

  return (
    <HomeLayout>
      <div className=" flex items-center justify-center h-[100vh] ">
        <form
          onSubmit={onFormSubmit}
          className=" flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black] "
        >
          <h1 className=" text-center text-2xl font-semibold">Edit profile</h1>

          <label htmlFor="image_uploads" className=" cursor-pointer ">
            {data?.previewImage ? (
              <img
                src={data.previewImage}
                alt="profile image"
                className=" w-28 h-28 rounded-full m-auto"
              />
            ) : (
              <BsPersonCircle className=" w-28 h-28 rounded-full m-auto" />
            )}
          </label>
          <input
            type="file"
            id="image_uploads"
            onChange={handleImageUpload}
            className=" hidden"
            name="image_uploads"
            accept=".jpg,.png,.svg,.jpeg"
          />

          <div className=" flex flex-col gap-1 ">
            <label htmlFor="fullName" className=" text-lg font-semibold ">
              Full Name
            </label>
            <input
              type="text"
              required
              name="fullName"
              id="fullName"
              placeholder="enter your name"
              className=" bg-transparent px-2 py-2 border "
              value={data.fullName}
              onChange={handleInputChange}
              
            />
          </div>

          {/* type submit means button click karne par form submit hoga */}
          <button
            type="submit"
            className=" w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm text-lg cursor-pointer "
          >
            Update profile
          </button>

          <Link
            to="/user/profile"
          
          >
           <p className=" link text-accent cursor-pointer flex items-center justify-center w-full gap-2 ">
    <AiOutlineArrowLeft/>  Go back to profile
           </p>
          </Link>
        </form>
      </div>
    </HomeLayout>
  );
}

export default EditProfile;
