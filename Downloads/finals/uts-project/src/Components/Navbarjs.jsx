import React from 'react'
import { useState,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import image from '../assets/logo.png'
const Navbarjs = () => {
    const [nav, setNav] = useState(false)
  
  useEffect(() => {
    const storedIsOpen = sessionStorage.getItem('navbarIsOpen');
    if (storedIsOpen) {
      setNav(JSON.parse(storedIsOpen));
    }
  }, []);
  const handleNav = () => {
    setNav(!nav)
    sessionStorage.setItem('navbarIsOpen', JSON.stringify(!nav));
  }
  
  return (
    <div>
    <div className='flex  md:flex w-100% mx-12  justify-between items-center  rounded-2xl md:h-24 bg-[#000038]'> 
<div> 
<img src={image} alt="" srcset="" className='h-[24px] mx-4 pl-4 mt-4 cursor-pointer' />
<h1 className=' mx-6 md:mx-4 p-4 text-[#fff] pt-0 cursor-pointer hover:text-[#b5fc1d] hover:ease-out hover:du'>Unilorin Tech Summit </h1>
</div>
<div className= {!nav ? 'left-0  top-20 fixed w-[60%] h-[70%] md:w-[40%]  flex flex-col justify-center items-center mx-2 my-2 ease-in-out duration-500  sm:visible  rounded-lg bg-[#000038] z-10'  :'  fixed left-[-100%] ' } default >
      <ul className='  absolute'>
      <Link to='/'><li  className='p-4 text-white border-b-2  border-b-gray-400  cursor-pointer hover:text-[24px] hover:ease-in-out duration-300'>Home</li></Link>
     

      <Link to="/about"><li  className='p-4 text-white border-b-2  border-b-gray-400 cursor-pointer hover:text-[24px] hover:ease-in-out duration-300'>About</li></Link>
      <Link to="/details"> <li className='p-4 text-white  border-b-2  border-b-gray-400 cursor-pointer  hover:text-[24px] hover:ease-in-out duration-300'>UTS'23 Excerpts </li></Link>
      </ul>
    </div>
    <div onClick={handleNav} className=' block sm:block'>

{!nav ? <AiOutlineClose size={20} className=' mx-8 shadow-lg text-white hover:text-[#b5fc1d] hover:rounded-sm hover:ease-out duration-700 cursor-pointer '/>: <AiOutlineMenu size={20} className=' mx-8 md:mx-10 text-[#fff] hover:text-[#b5fc1d] hover:rounded-sm hover:ease-out duration-700 cursor-pointer '/> }
</div>
</div> 
    </div>
  )
}

export default Navbarjs
