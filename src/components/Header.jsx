// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../context/Themecontext'; // Ensure correct file name

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { root: null, threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-md z-50 transition-colors duration-300 border-b-4 ${
        darkMode ? 'border-blue-700 bg-black' : 'border-blue-700 bg-white'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}
        >
          VMB
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {["home", "about", "projects", "education", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    activeSection === section
                      ? "text-blue-600 dark:text-blue-400 font-bold"
                      : `${darkMode ? 'text-white' : 'text-black'}`
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`relative w-20 h-10 rounded-full p-1 transition-colors duration-500 ${
              darkMode ? 'bg-gray-700' : 'bg-blue-300'
            }`}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {/* Stars */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute h-1 w-1 bg-white rounded-full top-3 left-4" />
                <div className="absolute h-1 w-1 bg-white rounded-full top-6 left-8" />
                <div className="absolute h-1 w-1 bg-white rounded-full top-4 left-12" />
              </div>
              {/* Clouds */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
                <div className="absolute h-3 w-8 bg-white rounded-full top-2 left-8 opacity-80" />
                <div className="absolute h-3 w-6 bg-white rounded-full top-4 left-12 opacity-60" />
              </div>
            </div>
            {/* Toggle Knob */}
            <div
              className={`relative w-8 h-8 rounded-full transform transition-all duration-500 ${
                darkMode ? 'translate-x-10 bg-gray-300' : 'translate-x-0 bg-yellow-300'
              }`}
            >
              {/* Moon details */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute w-2 h-2 bg-gray-400 rounded-full top-2 left-2" />
                <div className="absolute w-2 h-2 bg-gray-400 rounded-full top-4 left-4" />
              </div>
              {/* Sun rays */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-500"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${i * 45}deg) translateY(-10px)`,
                      transformOrigin: '50% 50%',
                    }}
                  />
                ))}
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle Button (Mobile) */}
          <button
            onClick={toggleDarkMode}
            className={`relative w-20 h-10 rounded-full p-1 transition-colors duration-500 ${
              darkMode ? 'bg-gray-700' : 'bg-blue-300'
            }`}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {/* Stars */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute h-1 w-1 bg-white rounded-full top-3 left-4" />
                <div className="absolute h-1 w-1 bg-white rounded-full top-6 left-8" />
                <div className="absolute h-1 w-1 bg-white rounded-full top-4 left-12" />
              </div>
              {/* Clouds */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
                <div className="absolute h-3 w-8 bg-white rounded-full top-2 left-8 opacity-80" />
                <div className="absolute h-3 w-6 bg-white rounded-full top-4 left-12 opacity-60" />
              </div>
            </div>
            {/* Toggle Knob */}
            <div
              className={`relative w-8 h-8 rounded-full transform transition-all duration-500 ${
                darkMode ? 'translate-x-10 bg-gray-300' : 'translate-x-0 bg-yellow-300'
              }`}
            >
              {/* Moon details */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute w-2 h-2 bg-gray-400 rounded-full top-2 left-2" />
                <div className="absolute w-2 h-2 bg-gray-400 rounded-full top-4 left-4" />
              </div>
              {/* Sun rays */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-500"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${i * 45}deg) translateY(-10px)`,
                      transformOrigin: '50% 50%',
                    }}
                  />
                ))}
              </div>
            </div>
          </button>
          {/* <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? (
              <X className="w-6 h-6 dark:text-white" />
            ) : (
              <Menu className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} />
            )}
          </button> */}
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-md p-4"
          >
            <ul className="space-y-4 text-center">
              {["home", "about", "projects", "education", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`block w-full py-2 ${
                      activeSection === section
                        ? "text-blue-600 dark:text-blue-400 font-bold"
                        : "dark:text-white"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence> */}
    </header>
  );
}