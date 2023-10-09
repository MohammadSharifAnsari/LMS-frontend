import apj from "../assets/images/apj.png";
import billgates from "../assets/images/billgates.png";
import einstein from "../assets/images/einstein.png";
import mandela from "../assets/images/mandela.png"
import im1 from '../assets/images/pngwing.com.png'
import jobs from "../assets/images/stevejobs.png";
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


  <div id="slide1" className="carousel-item relative w-full">
    <div className=" flex flex-col items-center justify-center gap-4 px-[15%] ">

    <img src={apj} className="w-40 rounded-full border-2 border-gray-400 " />
<p className=" text-xl text-gray-200">"If you shine like a Sun, then first burn like a Sun"</p>
<h1 className=" text-2xl font-semibold ">APJ Abdul Kalam</h1>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>

    </div>
  </div> 


  <div id="slide2" className="carousel-item relative w-full">
  <div className=" flex flex-col items-center justify-center gap-4 px-[15%] ">

<img src={einstein} className="w-40  rounded-full border-2 border-gray-400 " />
<p className=" text-xl text-gray-200">"Weak people revenge. Strong people forgive. Intelligent People Ignore."</p>
<h1 className=" text-2xl font-semibold ">Albert Einstein</h1>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide1" className="btn btn-circle">❮</a> 
  <a href="#slide3" className="btn btn-circle">❯</a>
</div>

</div>
  </div> 


  <div id="slide3" className="carousel-item relative w-full">
  <div className=" flex flex-col items-center justify-center gap-4 px-[15%] ">

<img src={billgates} className="w-40 rounded-full border-2 border-gray-400 " />
<p className=" text-xl text-gray-200">"I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it."</p>
<h1 className=" text-2xl font-semibold ">Bill Gates</h1>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide2" className="btn btn-circle">❮</a> 
  <a href="#slide4" className="btn btn-circle">❯</a>
</div>

</div>
  </div> 


  <div id="slide4" className="carousel-item relative w-full">
  <div className=" flex flex-col items-center justify-center gap-4 px-[15%] ">

<img src={jobs} className="w-40  rounded-full border-2 border-gray-400 " />
<p className=" text-xl text-gray-200">"It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do."</p>
<h1 className=" text-2xl font-semibold ">Steve Jobs</h1>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide3" className="btn btn-circle">❮</a> 
  <a href="#slide5" className="btn btn-circle">❯</a>
</div>

</div>
  </div>


  <div id="slide5" className="carousel-item relative w-full">
  <div className=" flex flex-col items-center justify-center  px-[15%] ">

<img src={mandela} className="w-40 rounded-full border-2 border-gray-400 mx-13" />
<p className=" text-xl text-gray-200">"Real leaders must be ready to sacrifice all for the freedom of their people."</p>
<h1 className=" text-2xl font-semibold ">Nelson Mandela</h1>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide4" className="btn btn-circle">❮</a> 
  <a href="#slide1" className="btn btn-circle">❯</a>
</div>

</div>
  </div>



</div>
    </div>


</HomeLayout>    

);
}
export default AboutUs;