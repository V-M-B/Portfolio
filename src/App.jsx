import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <section id="home" className="bg-white dark:bg-gray-900">
            <Home />
          </section>
          <section id="about" className="bg-white dark:bg-gray-900">
            <About />
          </section>
          <section id="projects" className="bg-white dark:bg-gray-900">
            <Projects />
          </section>
          <section id="education" className="bg-white dark:bg-gray-900">
            <Education />
          </section>
          <section id="contact" className="bg-white dark:bg-gray-900">
            <Contact />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;