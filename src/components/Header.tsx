import React, { useState } from 'react';
import { NavLink } from '../types';
import { Menu, X } from 'lucide-react';
import NeonText from './NeonText';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection, navLinks }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
      {/* Retrowave gradient line at bottom of navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" 
           style={{ boxShadow: '0 0 8px rgba(255, 0, 255, 0.7)' }}></div>
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent neon-flicker">
            SλFE
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-pink-400 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`capitalize transition-all hover:scale-105 relative group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {activeSection === item.id ? (
                  <NeonText 
                    text={item.title} 
                    color="pink" 
                    className="font-medium"
                  />
                ) : (
                  <span className="text-white hover:text-cyan-400 transition-colors">
                    {item.title}
                  </span>
                )}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : ''
                  }`}
                  style={{ 
                    boxShadow: activeSection === item.id ? '0 0 8px rgba(255, 0, 255, 0.7)' : '' 
                  }}
                ></span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-purple-500/30 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`capitalize transition-all py-2 px-4 rounded-md ${
                    activeSection === item.id 
                      ? "bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-pink-500/30" 
                      : "hover:bg-purple-900/20"
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: activeSection === item.id ? '0 0 10px rgba(255, 0, 255, 0.3)' : ''
                  }}
                >
                  {activeSection === item.id ? (
                    <span className="text-pink-400">{item.title}</span>
                  ) : (
                    <span className="text-white">{item.title}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
