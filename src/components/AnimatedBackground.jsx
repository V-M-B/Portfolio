
import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Ensure correct file name

const shapes = Array(15)
  .fill(null)
  .map((_, i) => {
    const shapeTypes = ['Hexagon', 'Circle', 'Triangle', 'Square'];
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

const AnimatedBackground = () => {
  const { darkMode } = useTheme(); // Access the darkMode state

  return (
    <div className={`min-h-screen relative overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
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
    </div>
  );
};

export default AnimatedBackground;