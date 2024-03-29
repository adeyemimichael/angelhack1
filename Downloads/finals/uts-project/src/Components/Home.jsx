import React from 'react'
import Navbarjs from './Navbarjs';
import About from './About'
import back from '../assets/17341.jpg'
import {  FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image1 from '../assets/att.jpg'
import image2 from '../assets/anu.jpg'
import image3 from '../assets/leye.jpg'
import { AiOutlineLinkedin,AiOutlineTwitter,AiOutlineInstagram,AiFillFacebook,AiOutlineMail } from "react-icons/ai";



const Home = () => {
  
  return (
    <div className=' bg-white flex flex-col justify-center items-center '>
    <div className='hero bg-[#000038]  w-screen h-fit  md:w-[90%]  md:h-screen  md:shadow-slate-400 md:shadow-lg rounded-2xl overflow-hidden mb-20'>
{/* navbar div for new project  */}
<Navbarjs/>

{/* hero section */}
<div className='m-auto w-[100%] pb-8 bg-[#000038] h-[90%]  flex  flex-col md:flex md:flex-col justify-center items-center  overflow-hidden relative'>
  
<motion.h1 className='text-[#fff]  text-center md:text-center font-bold md:text-[40px] text-[30px] mx-10 '
initial={{
  x:200, opacity:0
}}
animate={{x:-10, opacity:1}}
transition={{delay:1, duration:2
}}
>The Foremost Global <br></br> Tech Event in <br></br> a University </motion.h1>
<motion.div className='bg-[#b5fc1d] flex p-4 my-10 justify-center items-start rounded-lg shadow-zinc-400 shadow-sm hover:ease-in-out duration-500 hover:bg-[#abe431] '>
  {/* <FaLocationDot className='my-2 mx-2'/> */}
<motion.h1 className=' text-[16px] md:text-[20px] font-bold flex '><FaMapMarkerAlt className='mt-[4px] mx-2 '
 initial={{
  x:200, opacity:0
}}
animate={{x:-10, opacity:1}}
transition={{delay:1.5, duration:2.5
}}/>University of Ilorin</motion.h1>

</motion.div>
<motion.p className='text-center text-[#b5fc1d] p-3 mb-10 text-[20px] font-semibold '
 initial={{
  x:200, opacity:0
}}
animate={{x:-10, opacity:1}}
transition={{delay:1.5, duration:2.5
}}>Anticipate UTS'24</motion.p>
<img src={back} alt="" className='absolute opacity-5 object-cover'  />
</div>

    </div>
    <motion.div className='w-screen h-[100%] md:w-[90%]  bg-[#000038] md:h-screen rounded-2xl  shadow-slate-700 shadow-md md:mx-12  flex justify-center items-center flex-col mb-20 '>
      
      <div className='flex  flex-row flex-nowrap md:flex  md:flex-row   mt-10 md:w-screen md:h-40 w-screen h-72  justify-center items-center'>
   <motion.div className='w-50 h-50 md:w-64 md:h-44  rounded-2xl p-2 overflow-hidden '
   initial={{
    y:-100, opacity:0
  }}
  animate={{y:0, opacity:1}}
  transition={{delay:1, duration:2
  }}> 
   <img src={image1} alt="" sizes="" className='w-64 h-40 md:w-64 md:h-44  rounded-2xl' /> </motion.div>
   <motion.div className=' w-50 h-50 md:w-68 md:h-44  rounded-2xl p-2 ' 
   initial={{
    y:-100, opacity:0
  }}
  animate={{y:0, opacity:1}}
  transition={{delay:1, duration:2.5
  }}>
     <img src={image2} alt="" srcset=""  className=' w-64 h-44 md:w-68 md:h-44 rounded-2xl'/>
   </motion.div>
   <motion.div className=' w-50 h-50 md:w-64 md:h-44  rounded-2xl p-2 '
   initial={{
    y:-100, opacity:0
  }}
  animate={{y:0, opacity:1}}
  transition={{delay:1, duration:2
  }}>
     <img src={image3} alt=""  className=' w-64 h-40 md:w-64 md:h-44 rounded-2xl'/>
   </motion.div>
      </div>
      <div className='p-6 text-center pb-3'>
    <motion.h1 className=' text-[#b5fc1d] md:font-semibold md:text-[20px] pb-3 font-bold text-[30px]'
  
  initial={{
    x:200, opacity:0
  }}
  animate={{x:-10, opacity:1}}
  transition={{delay:1, duration:2
  }}
   >What is Unilorin Tech Summit</motion.h1>
      <motion.p className='text-[#fff]   md:text-sm p-1'
      initial={{
    x:200, opacity:0
  }}
  animate={{x:-10, opacity:1}}
  transition={{delay:1, duration:2
  }}>Unilorin Tech Summit is a global annual Tech event that takes place in one of most populous university in Nigeria with over 40,000 students.
    
    It is a Summit that gathers Founders, Business Leaders, Tech Enthusiasts, Entrepreneurs from all walks of life to get instructions about how are to lead our lives in the Tech Ecosystem, how to thrive in it and how to effectively leverage the system for global impact.
    The major aim is to make the young generation see from a fresh perspective, even beyond the walls of the University, see them transformed in their careers and ultimately making them of global impact in the society.</motion.p>
    
      </div>
      </motion.div>
  
      <div className=' bg-[#000038] md:mx-12 w-screen h-[60%]  md:w-[90%]  md:h-72 jusity-center items-center flex flex-col md:shadow-slate-400 md:shadow-lg rounded-2xl overflow-hidden mb-4'>
    
    <h1 className='text-[#b5fc1d] pt-4 text-[20px] md:text-[24px]'>Coming up</h1>
    <h1 className='text-[#fff]  text-[20px] pb-4  md:text-[24px]'>Unilorin Tech Summit '24</h1>
    
    <div className='h-fit'>
       <div className='flex relative '>
      <div className='bg-[#b5fc1d] md:w-40 md:h-40  w-30 h-30 pb-4 p-4 rounded-2xl mx-2 text-center flex
      flex-col justify-center  items-center'><h1 className='text-[30px] md:text-[40px] text-[#000038] mx-4 font-bold'>4</h1>
      <span className='text-[16px] md:text-[20px]  font-semibold '>
      Speakers</span></div>
      <div className='bg-[#b5fc1d] md:w-44 md:h-44  w-30 h-30 pb-4 p-4 rounded-2xl mx-2 text-center flex flex-col items-center justify-center'><h1 className='text-[#000038]  font-bold text-center text-[40px]'>2000+</h1>
      <span className='text-[16px] md:text-[20px] font-semibold'>Young minds</span>
      </div>
      <div className='bg-[#b5fc1d] md:w-40 md:h-40  w-30 h-30 pb-4 p-4 rounded-2xl mx-2 flex flex-col justify-center items-center'><h1 className='text-[#000038]  font-bold text-center text-[40px]'>8</h1>
      <span  className='text-[16px] md:text-[20px] font-semibold p-2'>Panelists</span></div>
    </div>
    </div>
       </div>
       <div className=' md:flex md:flex-col md:justify-center md:items-center flex flex-col justify-center items-center bg-[#000038]  w-screen h-[40%]  md:w-[90%]  md:h-[40%]  md:shadow-slate-400 md:shadow-lg rounded-2xl  rounded-t-none md:mb-20  text-white relative md:mx-12'>
  
  <h1 className='md:pb-32 mx-4 md:mx-0 pt-6'>Subscribe to our newsletter <br></br>
  To stay updated on the upcoming event</h1>
  <form action="get" className='bg-[#b5fc1d] w-5/6 md:w-1/2 h-100%  md:pt-8 md:pl-6 md:pr-6 md:pb-6  p-4 mb-10 mt-6 rounded-md md:absolute md:mt-48 md:mb-0'>
    <label htmlFor="" className='text-[#000038] p-4'>Name:</label>
    <input type="text" required  className='w-full bg-[#96c237] rounded-md p-2 outline-none '/>
    <label htmlFor="" className='text-[#000038] p-2'>Email:</label>
    <input type="email" required className='w-full bg-[#96c237] rounded-md p-2 outline-none'/>
    <button className='bg-[#000038] my-4 w-full  rounded-md p-2'>Submit</button>
  </form>
  </div>
  <div className='w-screen h-fit  flex flex-col justify-center items-center'>
<div className='flex flex-row  mt-20 shadow-md  p-4'> <hr />
<AiFillFacebook className='m-1 rounded-lg cursor-pointer text-[#000038] hover:text-[#b5fc1d]' size={30}/>
<AiOutlineTwitter className='m-1 rounded-lg cursor-pointer text-[#000038] hover:text-[#b5fc1d]' size={30}/>
<AiOutlineInstagram className='m-1 rounded-lg cursor-pointertext-[#000038] hover:text-[#b5fc1d]' size={30}/>
<AiOutlineMail className='m-1 rounded-lg cursor-pointer text-[#000038] hover:text-[#b5fc1d]' size={30}/>
<AiOutlineLinkedin className='m-1 rounded-lg cursor-pointer text-[#000038] hover:text-[#b5fc1d]' size={30}/>
</div>
<div className='flex flex-col  p-4'>
<h1 className='  text-[#000038]'>Powered by </h1>
<p className='font-bold text-[#000038]'>Unilorin Christian Union</p>
{/* LOGO HERE */}
</div>


    </div> 
    </div>
    
  )
}

export default Home
