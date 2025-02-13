import React, { useState } from "react";
import { Github, Link2 } from "lucide-react";
import { useTheme } from "../context/Themecontext"; // Ensure correct file name
import AnimatedBackground from "./AnimatedBackground";

const projects = [
  {
    title: "URL Shortener",
    category: "Full Stack",
    image: "/projectt.png",
    links: {
      github: "https://github.com/V-M-B/Custom-URL-Shortener",
      live: "https://trimmer-pi.vercel.app/",
    },
  },
  {
    title: "Portfolio",
    category: "Frontend, React",
    image: "/projectp.png",
    links: {
      github: "https://github.com/V-M-B/Portfolio",
      live: "https://vmb-portfolio.netlify.app/",
    },
  },
  {
    title: "Job Portal",
    category: "Full Stack",
    image: "/projectj.png",
    links: {
      github: "https://github.com/V-M-B/Job-Portal",
      live: "https://job-portaal-ten.vercel.app/",
    },
  },
];

const ProjectCard = ({ project }) => {
  const { darkMode } = useTheme();
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  // Toggle overlay for mobile users
  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  return (
    <div
      className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      onClick={toggleOverlay} // Mobile: Click to toggle overlay
    >
      {/* Project Image */}
      <img src={project.image} alt={project.title} className="w-full h-[300px] object-cover" />

      {/* Hover Overlay (Desktop) & Click Overlay (Mobile) */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-gray-800/90" : "bg-blue-600/90"
        } flex flex-col justify-center items-center transition-opacity duration-300 ${
          isOverlayOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className={`text-${darkMode ? "gray-300" : "white"} text-center p-6`}>
          <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
          <p className={`text-${darkMode ? "gray-400" : "blue-100"} mb-6`}>{project.category}</p>

          <div className="flex gap-4 justify-center">
            <a
              href={project.links.github}
              className={`p-2 rounded-full bg-${darkMode ? "gray-900/10" : "white/10"} hover:bg-${
                darkMode ? "gray-900/20" : "white/20"
              } transition-colors`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href={project.links.live}
              className={`p-2 rounded-full bg-${darkMode ? "gray-900/10" : "white/10"} hover:bg-${
                darkMode ? "gray-900/20" : "white/20"
              } transition-colors`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link2 className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const { darkMode } = useTheme();

  return (
    <AnimatedBackground>
      <div className={`min-h-screen ${darkMode ? "bg-black" : "bg-white"} text-white py-16 px-4`}>
        <div className="max-w-6xl mx-auto">
          <h1 className={`${darkMode ? "text-white" : "text-black"} text-4xl font-bold text-center mb-12`}>
            Featured Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default App;
