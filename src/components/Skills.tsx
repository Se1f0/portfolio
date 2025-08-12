import React from 'react';
import { SkillCategory } from '../types';
import NeonText from './NeonText';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/10 to-purple-900/10"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent neon-flicker">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(20%-1.6rem)] floating" 
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              <div className="retro-card bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-cyan-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:rotateY-5 hover:scale-105 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4 text-center">
                  <NeonText 
                    text={category.title} 
                    color={categoryIndex % 3 === 0 ? 'pink' : categoryIndex % 3 === 1 ? 'cyan' : 'purple'} 
                  />
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill} 
                      className="flex items-center transform hover:translate-x-2 transition-transform"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3 animate-pulse`}
                        style={{ boxShadow: '0 0 8px rgba(255, 0, 255, 0.7)' }}
                      ></div>
                      <span className="text-gray-300 hover:text-white transition-colors">{skill}</span>
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

export default Skills;
