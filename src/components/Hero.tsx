import React from 'react';
import { ChevronDown, Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

interface HeroProps {
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollY, scrollToSection }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 40, 200, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 128, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)
          `,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16 sm:pt-20 md:pt-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 animate-pulse">
          <span className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent bg-300 animate-gradient">
            <span className="inline-block">Seif Eddine</span> <span className="inline-block">Segueni</span>
          </span>
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl mb-8 text-cyan-400 font-mono animate-fade-in">
          <span className="animate-typewriter">Full Stack Developer</span>
        </div>
        <p className="text-base sm:text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Passionate full-stack developer with expertise in web development.
          Specialized in creating innovative solutions using modern
          technologies.
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Se1f0"
            target="_blank"
            className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-110 transition-transform"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/seif-eddine-segueni/"
            target="_blank"
            className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-110 transition-transform"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/Se1f01"
            target="_blank"
            className="p-3 rounded-full bg-gradient-to-r from-purple-900 to-indigo-800 hover:from-purple-800 hover:to-indigo-700 hover:scale-110 transition-all"
          >
            <FaXTwitter size={24} className="text-white" />
          </a>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-cyan-400 hover:text-pink-400 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
