import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <div className='w-full h-screen bg-black'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>Varun M Bharadwaj</h1>
        <h2 className='text-4xl sm:text-7xl font-bold primary-color'>I'm a Full Stack Developer.</h2>
        <p className='text-gray-500 py-4 max-w-[700px]'>
          I'm an enthusiastic junior software developer skilled in HTML, CSS, Tailwind CSS, JavaScript, React, and TypeScript.Eager to apply my foundational skills and strong problem-solving abilities in a collaborative software development role. Motivated to learn and grow, I am excited to contribute to innovative projects and tackle real-world challenges in a dynamic team environment.
        </p>
        <div>
          <button className='bg-primary-color text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;