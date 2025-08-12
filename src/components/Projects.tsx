import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import NeonText from './NeonText';

interface ProjectsProps {
  projects: Project[];
  openModal: (projectIndex: number, imageIndex: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, openModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const nextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const handleNextImage = (index: number) => {
    nextImage(index, projects[index].images.length);
  };

  const handlePrevImage = (index: number) => {
    prevImage(index, projects[index].images.length);
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent neon-flicker">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group perspective-1000 floating" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="retro-card bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg overflow-hidden border border-cyan-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:rotateY-5 hover:scale-105 h-full flex flex-col">
                <div className="aspect-video overflow-hidden relative cursor-pointer" onClick={() => openModal(index, currentImageIndex[index] || 0)}>
                  <img
                    src={project.images[currentImageIndex[index] || 0]}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevImage(index);
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full text-white hover:bg-pink-500/70 transition-colors z-10"
                        style={{ 
                          boxShadow: '0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.4)', 
                          border: '1px solid rgba(255, 0, 255, 0.7)'
                        }}
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextImage(index);
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full text-white hover:bg-cyan-500/70 transition-colors z-10"
                        style={{ 
                          boxShadow: '0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.4)', 
                          border: '1px solid rgba(0, 255, 255, 0.7)'
                        }}
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-xs text-white">
                    {currentImageIndex[index] !== undefined
                      ? `${currentImageIndex[index] + 1}/${project.images.length}`
                      : `1/${project.images.length}`}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">
                    <NeonText text={project.title} color={index % 2 === 0 ? 'cyan' : 'pink'} />
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 animate-gradient"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-cyan-400 hover:text-pink-400 transition-colors neon-flicker"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-cyan-400 hover:text-pink-400 transition-colors neon-flicker"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
