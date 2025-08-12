import React from 'react';
import { NavLink } from '../types';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection, navLinks }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`capitalize transition-colors hover:text-cyan-400 ${
                  activeSection === item.id ? "text-pink-400" : "text-white"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
