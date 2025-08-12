import React from 'react';
import profilePic from "../assets/avatar/me.jpg";
import NeonText from './NeonText';

interface AboutProps {
  age: number;
}

const About: React.FC<AboutProps> = ({ age }) => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent neon-flicker">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm <NeonText text="Seif Eddine Segueni" color="pink" className="font-bold" />, {age} years old passionate full-stack developer with
              expertise in web development and software engineering. I specialize in creating innovative solutions that
              bridge technology and business needs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With experience in <NeonText text="Laravel" color="cyan" className="font-bold" />, <NeonText text="Vue.js" color="cyan" className="font-bold" /> and <NeonText text="Python" color="cyan" className="font-bold" />, I've
              worked on diverse projects covering different real life fields and needs. I'm passionate about leveraging
              technology to solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Laravel", "Vue.js", "Nest.js", "Python"].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-cyan-400/30 text-cyan-400 hover:scale-105 transition-transform animate-gradient floating"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1 floating">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600/50 to-pink-600/50 flex items-center justify-center">
                  <img
                    src={profilePic}
                    alt="Seif Eddine Segueni"
                    className="w-60 h-60 rounded-full object-cover border-4 border-cyan-400/30"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
