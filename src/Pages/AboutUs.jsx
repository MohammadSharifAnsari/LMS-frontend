
import im1 from '../assets/images/pngwing.com.png'
import CarouselSlide from "../components/CarouselSlide";
import {celebrities} from "../constant/celebritydata.js";
import HomeLayout from "../Layouts/HomeLayout.jsx";
function AboutUs(){

    return (

        <HomeLayout>
    <div className=" pl-20 pt-20 flex flex-col text-white">

<div className=" flex items-center gap-5 mx-10">
<section className="w-1/2 space-y-10">

<h1 className=" text-5xl text-yellow-500 font-semibold ">
Affordable and quality education

</h1>
<p className=" text-xl text-gray-200 ">
 Our goal is to provide the affordable and quality education to the world.
  We are providing the platform for the aspiring teachers and students to share
  their skills, creativity and knowledge to each other to empower and contribute
   in the growth and wellness of mankind

</p>

</section>

<div className=" w-1/2 ">

<img src={im1} alt="image not load" className=" drop-shadow-2xl "  id="test1" 
style={
{
    filter:"drop-shadow(0 10 10 rgb(0,0,0))"
}

}
 />
</div>



</div>

<div className="carousel w-1/2 my-16 m-auto">



{
celebrities&&celebrities.map((celebrity)=>{
return <CarouselSlide {...celebrity} key={celebrity.slideNumber}/>
})

}

  
{/* 
<CarouselSlide {...celebrities[0]} />

<CarouselSlide {...celebrities[1]} />

<CarouselSlide {...celebrities[2]}/>

<CarouselSlide {...celebrities[3]}/>

<CarouselSlide {...celebrities[4]}/> */}














</div>
    </div>


</HomeLayout>    

);
}
export default AboutUs;