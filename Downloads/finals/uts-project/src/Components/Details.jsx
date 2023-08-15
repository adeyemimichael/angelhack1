
import React from 'react'
import Navbarjs from './Navbarjs';
import imagespe from '../assets/leye.jpg'
import imagespe2 from '../assets/oze.jpg'
import imagespe3 from '../assets/uri.jpg'
import imagespe4 from '../assets/epha.jpg'
import attend1 from '../assets/att1.jpg'
import attend2 from '../assets/att2.jpg'
import attend3 from '../assets/att3.jpg'
import attend4 from '../assets/att4.JPG'
import { motion } from 'framer-motion';

const About = () => {
   
  return (
    
    <div className='md:w-screen md:h-screen  w-screen h-fit '>
      
<section className='md:w-[90%] md:h-fit w-screen h-fit bg-[#000038] md:mx-12  text-[#fff]'>

<Navbarjs/>

<h1 classnName="text-[#fff] text-center font-boldtext-[16px] md:text-[50px] ">UTS'23 Excerpts</h1>
<div className=' md:w-100% md:h-100% flex md:flex-row m-4 overflow-hidden  flex-col '>

<img src={attend1} alt="" className='w-full md:w-1/4 mx-2 my-2 hover:ease-in-out hover:duration-300  hover:opacity-50 cursor-pointer' />

<img src={attend2} alt="" className=' w-full md:w-1/4 mx-2  my-2 hover:ease-out hover:duration-300  hover:opacity-50 cursor-pointer' />
<img src={attend3} alt=""  className='w-full md:w-1/4 mx-2  my-2 hover:ease-in-out hover:duration-300  hover:opacity-50 cursor-pointer'/>
<img src={attend4} alt="" className='w-full md:w-1/4 mx-2 my-2 hover:ease-in-out hover:duration-300  hover:opacity-50 cursor-pointer'/>

</div>
    <div className='md:w-[90%] block text-center md:flex justify-center items-center '>
 
    <motion.h1 className=' text-[#b5fc1d] md:absolute mx-6 font-bold text-[20px]  relative pt-4 md:pt-0' 
    initial={{
        x:500, opacity:0
      }}
      animate={{x:0, opacity:1}}
      transition={{ duration:4
      }}
    >Leye Ogunsaya</motion.h1>

    <motion.div className='w-fit h-fit md:w-1/2 md:h-fit overflow-hidden rounded-xl  mx-4 flex flex-wrap'
    initial={{
        x:500, opacity:0
      }}
      animate={{x:0, opacity:1}}
      transition={{ duration:4.5
      }}
    
    >
   <img src={imagespe} alt=""  className=' object-contain pt-4'/> 
</motion.div>

<div className='w-100% md:w-1/2  text-center flex justify-center items-center'>
    <motion.p className='pb-4 md:pb-2'
    initial={{
        x:500, opacity:0
      }}
      animate={{x:0, opacity:1}}
      transition={{ duration:4
      }}>Head of Design (Risevest), Nigeria</motion.p>
</div>
    </div>

    {/* second div */}
<div className='w-[90%]  text-center block md:flex  justify-center items-center '>
<motion.h1 className=' text-[#b5fc1d] md:absolute mx-6 font-bold text-[20px] pt-5 flex justify-center items-center'
initial={{
    x:500, opacity:0
  }}
  animate={{x:0, opacity:1}}
  transition={{ duration:4
  }}>Ozenua Oluwatobi</motion.h1>
<div className=' w-100% md:w-1/2 text-center flex justify-center items-center'>
    <motion.p className=''
    initial={{
        x:500, opacity:0
      }}
      animate={{x:0, opacity:1}}
      transition={{ duration:4
      }}>AR/VR Designer at MetaVerse</motion.p>
</div>
<motion.div className='w-fit h-fit md:w-1/2 md:h-fit  rounded-xl  mx-4 mb-10 overflow-hidden'
initial={{
    x:500, opacity:0
  }}
  animate={{x:0, opacity:1}}
  transition={{ duration:4.5
  }}>
    <img src={imagespe2} alt=""  className=' object-contain pt-10 ' /> 
</motion.div>
</div>

{/* third div */}
<div className='md:w-[90%] block md:flex justify-center items-center '>
<motion.h1 className=' text-[#b5fc1d] md:absolute mx-6 font-bold text-[20px] pt-5 flex justify-center items-center'
initial={{
    x:500, opacity:0
  }}
  animate={{x:0, opacity:1}}
  transition={{ duration:4
  }}>Uriel Tomori</motion.h1>
<motion.div className='w-fit h-fit md:w-1/2 md:h-fit overflow-hidden rounded-xl object-cover mx-4 mb-10'
initial={{
    x:500, opacity:0
  }}
  animate={{x:0, opacity:1}}
  transition={{ duration:4.5
  }}>
     <img src={imagespe3} alt=""  className=' object-contain'/> 
</motion.div >
<div className='w-100% md:w-1/2 text-center flex justify-center items-center'>
    
    <motion.p className=''
    initial={{
        x:500, opacity:0
      }}
      animate={{x:0, opacity:1}}
      transition={{ duration:4
      }}>Head of Marketing, FiatMatch, Canada</motion.p>
</div>
</div>
{/* fourth div */}
<div className='w-[90%]  text-center block md:flex  justify-center items-center '>
<motion.h1 className=' text-[#b5fc1d] md:absolute mx-6 font-bold text-[20px] pt-5 flex justify-center items-center'
initial={{
    x:500, opacity:0
  }}
  animate={{x:0, opacity:1}}
  transition={{ duration:4
  }}>Anthony </motion.h1>
<div className=' w-100% md:w-1/2 text-center flex justify-center items-center'>
    <motion.p className=''
    initial={{
        x:500, opacity:0
      }}
      animate={{x:0, opacity:1}}
      transition={{ duration:4
      }}>Founder, Ephatha Digital Enterprises</motion.p>
</div>
<motion.div className='w-fit h-fit md:w-1/2 md:h-fit  rounded-xl  mx-4 mb-10 overflow-hidden'
initial={{
    x:500, opacity:0
  }}
  animate={{x:0, opacity:1}}
  transition={{ duration:4.5
  }}>
    <img src={imagespe4} alt=""  className=' object-contain pt-10 ' /> 
</motion.div>
</div>
</section>
<div className=' bg-[#000038] md:mx-12 w-screen h-[60%]  md:w-[90%]  md:h-72 jusity-center items-center flex flex-col md:shadow-slate-400 md:shadow-lg rounded-2xl  rounded-t-none overflow-hidden mb-4'>
    
    <h1 className='text-[#b5fc1d] pt-4 text-[10px] md:text-[16px]'>Coming up</h1>
    <motion.h1 className='text-[#fff]  text-[20px] pb-4  md:text-[24px]'
    initial={{
      x:500, opacity:0
    }}
    animate={{x:-10, opacity:1}}
    transition={{delay:0.5, duration:5
    }}>Unilorin Tech Summit '24</motion.h1>
    
    <div className='h-fit'>
       <div className='flex relative '>
      <motion.div className='bg-[#b5fc1d] md:w-40 md:h-40  w-30 h-30 pb-4 p-4 rounded-2xl mx-2 text-center flex
      flex-col justify-center  items-center'
      
      initial={{
        y:500, opacity:0
      }}
      animate={{y:-10, opacity:1}}
      transition={{delay:0.5, duration:4
      }}
      
      ><h1 className='text-[40px] md:text-[40px] text-[#000038] mx-2 font-bold'>4</h1>
      <span className='text-[16px] md:text-[20px]  font-semibold '>
      Speakers</span></motion.div>
      <motion.div className='bg-[#b5fc1d] md:w-44 md:h-44  w-30 h-30 pb-4 p-4 rounded-2xl mx-2 text-center flex flex-col items-center justify-center'

initial={{
  y:500, opacity:0
}}
animate={{y:-10, opacity:1}}
transition={{delay:0.5, duration:5
}}


      ><h1 className='text-[#000038]  font-bold text-center text-[40px]'>2000+</h1>
      <span className='text-[16px] md:text-[20px] font-semibold'>Young minds</span>
      </motion.div>
      <motion.div className='bg-[#b5fc1d] md:w-40 md:h-40  w-30 h-30 pb-4 p-4 rounded-2xl mx-2 flex flex-col justify-center items-center'
       initial={{
        y:500, opacity:0
      }}
      animate={{y:-10, opacity:1}}
      transition={{delay:0.5, duration:4
      }}
      
    
      ><h1 className='text-[#000038]  font-bold text-center text-[40px]'>8</h1>
      <span  className='text-[16px] md:text-[20px] font-semibold p-2'>Panelists</span></motion.div>
    </div>
    </div>
       </div>
    </div>
  )
}

export default About
