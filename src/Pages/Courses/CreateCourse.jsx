import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { createNewCourse } from "../../REDUX/Slices/Courseslice";
import HomeLayout from "../../Layouts/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CreateCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    category: "",
    createdBy: "",
    thumbnail: null,
    previewImage: "",
  });

  function handleImageUpload(e) {
    e.preventDefault();
    const uploadedImage = e.target.files[0];

    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setUserInput({
          ...userInput,
          previewImage: this.result, //preview image backend me jaegi qand thumbnail frontend ke liya hai
          thumbnail: uploadedImage,
        });
      });
    }
  }

  function handleUserInput(e) {
    const { name, value } = e.target;

    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (
      !userInput.category ||
      !userInput.title ||
      !userInput.description ||
      !userInput.thumbnail ||
      !userInput.previewImage
    ) {
      toast.error("All fields are mandatory");
      return;
    }
    const response = await dispatch(createNewCourse(userInput));
    if (response?.payload?.success) {
      setUserInput({
        title: "",
        description: "",
        category: "",
        createdBy: "",
        thumbnail: null,
        previewImage: "",
      });
      navigate("/courses");
    }
  }

  return (
    <HomeLayout>
      <div className=" flex items-center justify-center h-[100vh]">
        <form
          action=""
          onSubmit={onFormSubmit}
          className=" flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10  shadow-[0_0_10px_black] relative "
        >
          <Link className=" absolute top-8 text-2xl link text-accent cursor-pointer " to={"/"}>
            <AiOutlineArrowLeft />
          </Link>

          <h1 className=" text-center text-2xl font-bold ">
            Create New Course
          </h1>

          <main className=" grid grid-cols-2 gap-x-10  ">
            <div className=" gap-y-6">
              <div>
                <label htmlFor="image_uploads" className=" cursor-pointer ">
                  {userInput.previewImage ? (
                    <img
                      src={userInput.previewImage}
                      alt="avatar image"
                      className=" w-full h-44 m-auto border"
                    />
                  ) : (
                    <div className=" w-full h-44 m-auto flex  items-center justify-center border ">
                      <h1 className=" font-bold text-lg">
                        Upload your course thumbnail
                      </h1>
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  className=" hidden"
                  id="image_uploads"
                  accept=".jpg,.jpeg,.png"
                  name="image_uploads"
                  onChange={handleImageUpload}
                />
              </div>

              <div className=" flex flex-col gap-1 ">
                <label htmlFor="title" className=" text-lg font-semibold ">
                  Course title
                </label>
                <input
                  required
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter course title"
                  className=" bg-transparent px-2 py-1 border "
                  value={userInput.title}
                  onChange={handleUserInput}
                />
              </div>
            </div>

            <div className=" flex flex-col gap-1">
              <div className=" flex flex-col gap-1 ">
                <label htmlFor="createdBy" className=" text-lg font-semibold ">
                  Course instructor
                </label>
                <input
                  required
                  type="text"
                  id="createdBy"
                  name="createdBy"
                  placeholder="Enter course instructor"
                  className=" bg-transparent px-2 py-1 border "
                  value={userInput.createdBy}
                  onChange={handleUserInput}
                />
              </div>

              <div className=" flex flex-col gap-1 ">
                <label htmlFor="category" className=" text-lg font-semibold ">
                  Course category
                </label>
                <input
                  required
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Enter course category"
                  className=" bg-transparent px-2 py-1 border "
                  value={userInput.category}
                  onChange={handleUserInput}
                />
              </div>

              <div className=" flex flex-col gap-1 ">
                <label
                  htmlFor="description"
                  className=" text-lg font-semibold "
                >
                  Course description
                </label>
                <textarea
                  required
                  id="description"
                  name="description"
                  placeholder="Enter course description"
                  className=" bg-transparent px-2 py-1 border  h-24 overflow-y-scroll resize-none"
                  value={userInput.description}
                  onChange={handleUserInput}
                />
              </div>
            </div>
          </main>
<button  type="submit" className=" w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 py-2 rounded-sm font-semibold text-lg cursor-pointer">
    Create course
</button>


        </form>
      </div>
    </HomeLayout>
  );
}



// Learn how to manage the world and lead the people in your direction

export default CreateCourse;
