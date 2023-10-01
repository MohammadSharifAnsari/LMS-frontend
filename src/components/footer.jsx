import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'


function Footer(){


    const currentDate=new Date();
const year=currentDate.getFullYear();

    return (
    <>
    
<footer className='relative left-0 bottom-0 h-[13vh] flex  flex-col md:flex-row   items-center justify-between  text-white bg-gray-800 py-5 sm:px-20 ' >

    <section className=''>
Copyright &#169; {year} | All right reserved
    </section>
<section className=' flex items-center justify-center gap-5 text-2xl text-white '>

<a href="https://WWW.facebook.com" target='_blank' className=' hover:text-yellow-500 transition-all ease-in-out duration-300 ' >
    <BsFacebook/>
</a>
<a href="https://WWW.instagram.com" target='_blank' className=' hover:text-yellow-500 transition-all ease-in-out duration-300 ' >
    <BsInstagram/>
</a>
<a href="https://WWW.linkedin.com" target='_blank' className=' hover:text-yellow-500 transition-all ease-in-out duration-300 ' >
    <BsLinkedin/>
</a>
<a href="https://WWW.twitter.com" target='_blank' className=' hover:text-yellow-500 transition-all ease-in-out duration-300 ' >
    <BsTwitter/>
</a>

</section>


</footer>

    </>
    )
    
}

export default Footer;