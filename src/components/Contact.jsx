import React, { useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";
import { useTheme } from '../context/ThemeContext';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceID = "service_4ej5d3m";
    const templateID = "template_bakwgeg";
    const userID = "PM9_4Mbkd8z_tQhDE"; 
    try {
      const response = await emailjs.send(serviceID, templateID, formData, userID);
      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message.");
    }
  };
  const { darkMode } = useTheme(); // Access the darkMode state

  return (
    
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-white'} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className={`max-w-4xl mx-auto rounded-2xl shadow-2xl border border-gray-800 overflow-hidden ${darkMode ? 'bg-black/40' : 'bg-black'}`}>
          <div className="grid md:grid-cols-2">
            <div className={`p-8 ${darkMode ? 'text-white' : 'text-white'} ${darkMode ? 'bg-black/50' : 'bg-black'}`}>
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="mb-8">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              <div className="flex items-center space-x-6">
                <a href="mailto:contact@example.com" className="p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 group">
                  <Mail className="w-6 h-6 group-hover:text-blue-300" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 group">
                  <Github className="w-6 h-6 group-hover:text-purple-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 group">
                  <Linkedin className="w-6 h-6 group-hover:text-cyan-300" />
                </a>
              </div>
            </div>
            <div className={`p-8 ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-black/50' : 'bg-black'}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your message..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;