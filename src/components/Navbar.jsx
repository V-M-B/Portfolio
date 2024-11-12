import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
      <div>
        <h1 className='text-2xl primary-color font-bold'>Portfolio</h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='px-4 cursor-pointer hover:text-white'>Home</li>
        <li className='px-4 cursor-pointer hover:text-white'>Skills</li>
        <li className='px-4 cursor-pointer hover:text-white'>About</li>
        <li className='px-4 cursor-pointer hover:text-white'>Work</li>
        <li className='px-4 cursor-pointer hover:text-white'>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <Bars3Icon className="h-6 w-6" /> : <XMarkIcon className="h-6 w-6" />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:text-white'>Home</li>
        <li className='py-6 text-4xl hover:text-white'>Skills</li>
        <li className='py-6 text-4xl hover:text-white'>About</li>
        <li className='py-6 text-4xl hover:text-white'>Work</li>
        <li className='py-6 text-4xl hover:text-white'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;