import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addCourseLectures } from "../../REDUX/Slices/LectureSlice.js";
import { AiOutlineArrowLeft } from "react-icons/ai";

function AddLectures() {
  const courseDetails = useLocation().state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [userInput, setUserInput] = useState({
    id: courseDetails?._id,
    lecture: undefined,
    title: "",
    description: "",
    videoSrc: "",
  });

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }

  function handleVideo(e) {
    const video = e.target.files[0];
    const source = window.URL.createObjectURL(video);
    console.log("source", source);

    setUserInput({ ...userInput, videoSrc: source, lecture: video });
  }

  async function onFormSubmit(e) {
    e.preventDefault(); //form submit karne par woh refresh karna try karega whi uska by default behavior hai humko refresh nhi karwana that wy we are preventing default behavior
    if (!userInput.title || !userInput.description || !userInput.lecture) {
      toast.error("All feilds are mandatory");
      return;
    }
    
    const response = await dispatch(addCourseLectures(userInput)); //userInput apne aap formdfata me badal jaega
    console.log("normal react object response", response);
    if (response?.payload?.success) {
      navigate(-1);
      setUserInput({
        id: courseDetails?._id,
        lecture: undefined,
        title: "",
        description: "",
        videoSrc: "",
      });
    }
  }

  useEffect(() => {
    //yeh tab hoga jab direct url dalkar hum "/course/addlecture" page par aa rhe hai to hum kis course se aa rhe hain kisi ko kya pta
    if (!courseDetails) {
      navigate("/courses");
    }
  }, []);

  return (
    <HomeLayout>
      <div className="  min-h-[90vh] text-white flex flex-col items-center justify-center gap-10 mx-16 ">
        <div className=" flex flex-col gap-5 p-2  shadow-[0_0_10px_black] w-96 rounded-lg">
          <header className=" flex items-center justify-center relative ">
            <button
              className=" absolute left-2 text-xl text-green-500 "
              onClick={() => {
                navigate(-1);
              }}
            >
              <AiOutlineArrowLeft />
            </button>
            <h1 className=" text-xl text-yellow-500 font-semibold  ">
              Add new lecture
            </h1>
          </header>

          <form onSubmit={onFormSubmit} className=" flex flex-col gap-3 ">
            <input
              type="text"
              name="title"
              placeholder="enter the title of the lecture"
              value={userInput.title}
              onChange={handleInputChange}
              className=" bg-transparent px-3 py-1 border "
            />
            <textarea
              name="description"
              placeholder="enter the description of the lecture"
              value={userInput.description}
              onChange={handleInputChange}
              className=" bg-transparent px-3 py-1 border resize-none overflow-y-scroll h-36  "
            />
            {userInput.videoSrc ? (
              <video
                muted
                src={userInput.videoSrc}
                controls
                controlsList="nodownload nofullscreen"
                disablePictureInPicture
                className=" object-fill rounded-tl-lg rounded-tr-lg w-full "
              ></video>
            ) : (
              <div className=" h-48 border flex items-center justify-center cursor-pointer  ">
                <label htmlFor="lecture" className=" font-semibold text-xl cursor-pointer">Choose your video</label>
                <input type="file" className=" hidden  " id="lecture" name="lecture" onChange={ handleVideo } accept=" video/mp4 video/x-mp4 video/* " />
              </div>
            )}
            <button type="submit" className=" btn btn-primary py-1 font-semibold text-lg">
                Add new lecture
            </button>

          </form>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AddLectures;
