import React from 'react';
import { SkillCategory } from '../types';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/10 to-purple-900/10"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(20%-1.6rem)]">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-cyan-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:rotateY-5 hover:scale-105 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3 animate-pulse`}
                      ></div>
                      <span className="text-gray-300">{skill}</span>
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
