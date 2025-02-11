import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { darkMode } = useTheme();
  return (
    <div className={`min-h-screen  p-8 md:p-16 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 ">About Me</h1>
        <div className="relative">
          {/* Avatar and Card Container */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar */}
            <div className="w-48 h-48 relative shrink-0">
              <div className="w-full h-full rounded-full bg-indigo-900 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lxQgWxqfwzgn8Hi5vN4RBGvnwYl9Vu.png"
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
                  Hello! I'm Greg, and I'm based in Johannesburg, South Africa. I studied at Varsity College Sandton,
                  where I completed my diploma in Software Development.
                </p>
                <p className=" text-lg">
                  Fastforward to today, and I can honestly say it's been a beautiful journey and I hope to grow even
                  further as Software Engineer. My current focus these days is on expanding my portfolio by building
                  more projects that I can add on here, as well as being a great team player at my current role.
                </p>
                <div>
                  <h2 className=" text-lg mb-4">
                    Here are a few technologies I've been working with recently:
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="">▸</span>
                        <span>JavaScript (ES6+)</span>
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
                        <span>TypeScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="">▸</span>
                        <span>Node.js</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="">▸</span>
                        <span>NestJS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full">
                  Download CV
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}