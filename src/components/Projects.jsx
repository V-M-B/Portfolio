import React from 'react';
import { Github, Link2 } from 'lucide-react';
import { useTheme } from '../context/Themecontext'; // Ensure correct file name

const projects = [
  {
    title: "React Native Jobs App",
    category: "Frontend, React",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974",
    links: {
      github: "https://github.com",
      live: "https://demo.com",
    },
  },
  {
    title: "Crypto Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2032",
    links: {
      github: "https://github.com",
      live: "https://demo.com",
    },
  },
  {
    title: "Food Delivery App",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1981",
    links: {
      github: "https://github.com",
      live: "https://demo.com",
    },
  },
];

const ProjectCard = ({ project }) => {
  const { darkMode } = useTheme();

  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg">
      {/* Project Image */}
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-[300px] object-cover"
      />
      
      {/* Hover Overlay */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-gray-800/90' : 'bg-blue-600/90'} flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        <div className={`text-${darkMode ? 'gray-300' : 'white'} text-center p-6`}>
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className={`text-${darkMode ? 'gray-400' : 'blue-100'} mb-6`}>{project.category}</p>
          
          <div className="flex gap-4 justify-center">
            <a 
              href={project.links.github}
              className={`p-2 rounded-full bg-${darkMode ? 'gray-900/10' : 'white/10'} hover:bg-${darkMode ? 'gray-900/20' : 'white/20'} transition-colors`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a 
              href={project.links.live}
              className={`p-2 rounded-full bg-${darkMode ? 'gray-900/10' : 'white/10'} hover:bg-${darkMode ? 'gray-900/20' : 'white/20'} transition-colors`}
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
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-white'} text-white py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`${darkMode ? 'text-white' : 'text-black '}text-4xl font-bold text-center mb-12`}>
          Featured Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;