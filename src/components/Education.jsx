import React from 'react';
import { GraduationCap, Building2 } from 'lucide-react';
import { useTheme } from '../context/Themecontext'; 

const Education = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-white'} text-white py-16 px-4`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">
          Education Timeline
        </h1>
        
        <div className="relative">
          {/* Static Background Line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
          
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-green-400 to-green-500' : 'from-green-500 to-green-600'}`}>
              {/* Moving Light Effect */}
              <div className="absolute w-full h-24 animate-moveLight">
                <div className={`w-full h-full bg-gradient-to-b ${darkMode ? 'from-transparent via-black to-transparent' : 'from-transparent via-white to-transparent'} opacity-30`}></div>
              </div>
            </div>
          </div>
          {/* Left Card */}
          <div className="mb-16 flex justify-start w-full">
            <div className="relative w-1/2 pr-8">
              <div className={`bg-${darkMode ? 'black' : 'white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${darkMode ? 'border border-gray-600' : ''}`}>
                <div className="flex items-center mb-4">
                  <GraduationCap className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-600'} mr-2`} />
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>MIT</h3>
                </div>
                <p className={`text-${darkMode ? 'green-400' : 'green-600'} font-medium mb-2`}>Bachelor of Engineering</p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Class of 2019</p>
              </div>
              {/* Timeline Dot */}
              <div className={`absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2 w-4 h-4 ${darkMode ? 'bg-green-400' : 'bg-green-600'} rounded-full border-4 border-white animate-pulse`}></div>
            </div>
          </div>
          {/* Right Card */}
          <div className="mb-16 flex justify-end w-full">
            <div className="relative w-1/2 pl-8">
              <div className={`bg-${darkMode ? 'black' : 'white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${darkMode ? 'border border-gray-600' : ''}`}>
                <div className="flex items-center mb-4">
                  <Building2 className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-600'} mr-2`} />
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Harvard University</h3>
                </div>
                <p className={`text-${darkMode ? 'green-400' : 'green-600'} font-medium mb-2`}>Master of Science</p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Class of 2021</p>
              </div>
              {/* Timeline Dot */}
              <div className={`absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2 w-4 h-4 ${darkMode ? 'bg-green-400' : 'bg-green-600'} rounded-full border-4 border-white animate-pulse`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;