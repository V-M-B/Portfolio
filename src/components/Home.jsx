import React from 'react';
import { useTheme } from '../context/Themecontext';
import {
  Github,
  Hexagon,
  Linkedin,
  Facebook,
  Twitter,
  MessageCircle,
  Circle,
  Triangle,
  Square,
} from 'lucide-react';

function Home() {
  const { darkMode } = useTheme(); // Access the darkMode state

  // Animated shapes data with different shapes and colors
  const shapes = Array(15)
    .fill(null)
    .map((_, i) => {
      const shapeTypes = [Hexagon, Circle, Triangle, Square];
      const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6'];
      const sizes = ['w-6 h-6', 'w-8 h-8', 'w-12 h-12', 'w-16 h-16'];
      return {
        id: i,
        ShapeComponent: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: sizes[Math.floor(Math.random() * sizes.length)],
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${10 + Math.random() * 20}s`,
        },
      };
    });

  return (
    <div
      className={`min-h-screen relative overflow-hidden pt-1 transition-colors duration-300 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Animated background shapes */}
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute opacity-30 animate-float ${shape.size}`}
          style={shape.style}
        >
          <shape.ShapeComponent
            className="w-full h-full animate-pulse"
            style={{ color: shape.color }}
          />
        </div>
      ))}

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
        {/* Profile section */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 p-1 bg-gradient-to-r from-blue-500 to-green-500">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1
            className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text"
          >
            Varun M Bharadwaj
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
            I'm a Software Engineer
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-8">
            {[
              { icon: Github, href: '#github' },
              { icon: Hexagon, href: '#portfolio' },
              { icon: MessageCircle, href: '#dev' },
              { icon: Linkedin, href: '#linkedin' },
              { icon: Facebook, href: '#facebook' },
              { icon: Twitter, href: '#twitter' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                } hover:text-blue-500 transition-colors duration-300`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Contact button */}
          <button
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <p
            className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}
          >
            Scroll Down
          </p>
          <div
            className={`w-6 h-10 border-2 ${
              darkMode ? 'border-gray-700' : 'border-gray-300'
            } rounded-full mx-auto relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-500 opacity-30"></div>
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-scroll-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;