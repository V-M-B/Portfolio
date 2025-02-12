import React from 'react';
import { useTheme } from '../context/Themecontext';
import AnimatedBackground from './AnimatedBackground';

export default function About() {
  const { darkMode } = useTheme();
  return (
    <AnimatedBackground>
    <div className={`min-h-screen  p-8 md:p-16 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={` flex justify-center font-bold mb-12 text-4xl ${
        darkMode ? 'text-white' : 'text-black'
      }`} >About Me</h1>
        <div className="relative">
          {/* Avatar and Card Container */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar */}
            <div className="w-48 h-48 relative shrink-0">
              <div className="w-full h-full rounded-full bg-indigo-900 overflow-hidden">
                <img
                  src="/Pro.jpg"
                  alt="Profile avatar"
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
            </div>
            {/* Content Card */}
            <div className=" bg-white dark:bg-indigo-900 text-white flex-1rounded-3xl p-8 relative">
            <div className="flex-1rounded-3xl p-8 relative">
              {/* Triangle pointer for desktop */}
              <div className="hidden md:block absolute left-0 top-8 transform -translate-x-4">
                <div className="w-4 h-4transform rotate-45" />
              </div>
              {/* Content */}
              <div className="space-y-6">
                <p className=" text-lg">
                Hello! I'm Varun M Bharadwaj, a passionate full-stack developer based in India. I hold a Master of Computer Application (MCA) from JSS Academy of Technical Education, Bengaluru, and a Bachelor of Computer Application (BCA) from KLE Society’s Degree College.
                </p>
                <p className=" text-lg">
                Fast forward to today, my journey in software development has been nothing short of exciting. I have built scalable applications like a mental health chatbot, a URL shortener, and a job portal, constantly pushing my problem-solving and innovation skills. My current focus is on expanding my portfolio by working on more projects and becoming an even more effective team player in my current role.
                </p>
                <div>
                  <h2 className=" text-lg mb-4">
                    Here are a few technologies I've been working with recently:
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="">▸</span>
                        <span>TypeScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="">▸</span>
                        <span>React</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="">▸</span>
                        <span>Postgres SQL</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="">▸</span>
                        <span>Supabase, MongoDB & Postgres SQL</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="">▸</span>
                        <span>Node.js & Express</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="">▸</span>
                        <span>NextJS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="https://drive.google.com/file/d/1YwfHFqpyXEw70H-kvLiDjNZ0pXOnI6ul/view?usp=drive_link">
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full">
                  Download CV
                </button>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimatedBackground>
  );
}