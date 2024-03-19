import React from 'react';
import logo from '../../assets/login/logo2.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbar() {

  const {isAuth , user} = useSelector(state=>state.auth)
  console.log(isAuth)
  console.log(user)
  return (
    <>
      <div className='flex w-screen bg-white h-[85px]   px-3 py-7  items-center shadow-xl' >
        
        <div className='ml-10 flex w-[10%] '>
        <img className=" h-10" src={logo} alt='logo' />
        </div>

        
        <div className='flex justify-'>
          <ul className='hidden md:flex w-full gap-10 text-black   text-md '>
          <li  className='hover:text-sec transition-transform transform hover:scale-110'>Home</li>
          <li className='hover:text-sec transition-transform transform hover:scale-110'>Services</li>
          <li className='hover:text-sec transition-transform transform hover:scale-110'>HelpLine</li>
          <li className='hover:text-sec transition-transform transform hover:scale-110'>About US</li>
        </ul>
        </div>

        <div className='flex absolute right-10 w-1/6 justify-between items-center'>
        <ul className=' flex text-black gap-4'>
          <li className='hover:text-sec hover:text-sectransition-transform transform hover:scale-110'><Link to={"/"}>Login</Link></li>
          <h1>|</h1>
          <li className='hover:text-sec transition-transform transform hover:scale-110'><Link to={"/EZpay/register"} >SignUp</Link></li>
          
        </ul>
            <div className=' transition-transform transform hover:scale-110 hover:text-sec relative w-10 h-10 bg-s2 rounded-full '></div>
        </div>
        

        </div>

   
    </>
  );
}

export default Navbar;
