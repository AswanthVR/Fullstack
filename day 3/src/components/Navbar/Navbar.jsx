import React, { useState } from 'react';
import logo from '../../assets/login/logo2.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from '../Profile/Profile';
import { ImDiamonds } from "react-icons/im";

function Navbar() {

  // const {isAuth , user} = useSelector(state=>state.auth)
  // console.log(isAuth)
  // console.log(user)
  const [user ,setUser] = useState("");
  const[showProfile , setShowProfile] = useState(false)
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };


  const toggleModel=()=>{
    setShowProfile(!showProfile)
    console.log(showProfile)
    console.log("showProfile")
  }
  return (
    <div className='bg-white fixed top-0 w-full z-50'>
      <div className='flex bg-white h-[85px]   px-3 py-7  items-center shadow-xl' >
        
        <div className='ml-10 flex w-[10%]'>
        <img className=" h-10" src={logo} alt='logo' />
        </div>

        
        <div className='flex justify-'>
          <ul className='hidden md:flex w-full gap-10 text-black   text-md '>
          <li  className='hover:text-sec transition-transform transform hover:scale-110'><Link to={"/EZpay/user/home"}>Home</Link></li>
          <li className='hover:text-sec transition-transform transform hover:scale-110'><Link to={"/EZpay/user/home"}>Services</Link></li>
          <li className='hover:text-sec transition-transform transform hover:scale-110'><Link to={"/EZpay/user/prepaid"}>Prepaid</Link></li>
          <li className='hover:text-sec transition-transform transform hover:scale-110'><Link to={"/EZpay/user/postpaid"}>Prepaid</Link></li>
          <li className='hover:text-sec transition-transform transform hover:scale-110'><Link to={"/EZpay/user/help"}>HelpLine</Link></li>
          <li className='hover:text-sec transition-transform transform hover:scale-110'><Link to={"/EZpay/user/about"}>About US</Link></li>
        </ul>
        </div>

        <div className='flex absolute right-0  justify-between items-center'>
          {
            user?(
<ul className=' flex text-black gap-4 right-0 w-1/6 mr-10'>
          <li className='hover:text-sec hover:text-sectransition-transform transform hover:scale-110'><Link to={"/"}>Login</Link></li>
          <h1>|</h1>
          <li className='hover:text-sec transition-transform transform hover:scale-110'><Link to={"/EZpay/register"} >SignUp</Link></li>
          
        </ul>
            ):(
              <div className="relative">
      <div
        onClick={toggleModel}
        onMouseEnter={toggleOptions}
        className="transition-transform transform hover:scale-110 hover:text-sec relative w-10 h-10 bg-s2 rounded-full right-10 cursor-pointer"
      ></div>
      {showOptions && (
        <div className="absolute right-12 bg-sec px-5 my-3 border-2  text-white rounded shadow-lg  w-[130px] ">
          <div className='absolute -top-[10px] -right-[2px]'><ImDiamonds className='text-xl text-sec'/></div>
          <h1 className="cursor-pointer hover:text-white py-2 border-b-2">My Profile</h1>
          <h1 className="cursor-pointer hover:text-white py-2"><Link to={"/"}>Logout</Link></h1>
        </div>
      )}
    </div>
            )
          }
        
        </div>
        

        </div>
        {showProfile && < Profile onClose={toggleModel} />}
   
    </div>
  );
}

export default Navbar;
