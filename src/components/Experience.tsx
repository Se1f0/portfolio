import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-purple-900/10 to-cyan-900/10"></div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent neon-flicker">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative floating" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Neon line connecting timeline items */}
              {index < experiences.length - 1 && (
                <div className="absolute left-1/2 top-full w-1 h-12 -translate-x-1/2 bg-gradient-to-b from-pink-500 to-cyan-500 z-0" 
                     style={{ boxShadow: '0 0 8px rgba(255, 0, 255, 0.7)' }}></div>
              )}
              
              <div className="retro-card bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-8 border border-cyan-400/20 hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-purple-400">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl mb-2 text-cyan-400">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-400 mb-1 hover:text-pink-400 transition-colors">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div 
                      key={i} 
                      className="flex items-center text-pink-400 transform hover:translate-x-2 transition-transform"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div 
                        className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"
                        style={{ boxShadow: '0 0 8px rgba(0, 255, 255, 0.7)' }}
                      ></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
