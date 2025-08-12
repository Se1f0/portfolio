import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-purple-500/30 bg-black/50 relative">
      {/* Retrowave grid line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" 
           style={{ boxShadow: '0 0 10px rgba(255, 0, 255, 0.7)' }}></div>
      
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://github.com/Se1f0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110"
            style={{ textShadow: '0 0 5px rgba(255, 0, 255, 0.7)' }}
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/seif-eddine-segueni" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
            style={{ textShadow: '0 0 5px rgba(0, 255, 255, 0.7)' }}
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://twitter.com/SegueniE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
            style={{ textShadow: '0 0 5px rgba(128, 0, 255, 0.7)' }}
          >
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-gray-400 animate-gradient">
          &copy; {new Date().getFullYear()} <span className="text-cyan-400 neon-text">Seif Eddine Segueni</span>. The right man in the wrong place
          can make all the difference in the world
        </p>
      </div>
    </footer>
  );
};

export default Footer;
