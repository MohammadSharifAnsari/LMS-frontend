
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import {getAllCourses} from "../../REDUX/Slices/Courseslice.js"
import HomeLayout from "../../Layouts/HomeLayout.jsx";
import CourseCard from "../../components/Coursecard.jsx";
function CourseList(){

    const dispatch=useDispatch();
const {courseData}=useSelector((state)=>{
    return state.course;
})

 async function loadCourses(){
   
    await dispatch(getAllCourses());
    
}

useEffect(()=>{

loadCourses();

},[]);


return(
    <HomeLayout>
<div className=" min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white ">

<h1 className=" text-center text-3xl font-semibold mb-2 ">
    Explore the courses made by
    <span className=" font-bold text-yellow-500">
        industry experts
    </span>
</h1>

<div className=" mb-10 flex flex-wrap gap-14 ">
{/* here course cart rahega */}

{
    courseData?.map((element)=>{
       return  <CourseCard key={element._id} data={element}/>
    })
}


</div>


</div>

    </HomeLayout>
)


}


export default CourseList;