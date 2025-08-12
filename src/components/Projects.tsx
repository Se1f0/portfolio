import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group perspective-1000">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg overflow-hidden border border-cyan-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:rotateY-5 hover:scale-105 h-full flex flex-col">
                <div className="aspect-video overflow-hidden relative cursor-pointer" onClick={() => openModal(index, currentImageIndex[index] || 0)}>
                  <img
                    src={project.images[currentImageIndex[index] || 0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2">
                    <button
                      className="bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevImage(index);
                      }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      className="bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage(index);
                      }}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <div className="h-32 overflow-y-auto mb-4 text-gray-300 text-sm">
                    <p>{project.description}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded text-xs text-cyan-400 border border-cyan-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {(project.liveUrl || project.githubUrl) && (
                      <>
                        <div className="border-t border-gray-700/50 my-3"></div>
                        <div className="flex flex-wrap gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-3 py-1.5 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-md text-sm font-medium text-white border border-pink-500/40 hover:from-pink-500/40 hover:to-purple-500/40 transition-all hover:scale-105 shadow-sm"
                            >
                              <ExternalLink size={14} className="mr-1.5" />
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-3 py-1.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-md text-sm font-medium text-white border border-cyan-500/40 hover:from-cyan-500/40 hover:to-blue-500/40 transition-all hover:scale-105 shadow-sm"
                            >
                              <Github size={14} className="mr-1.5" />
                              GitHub
                            </a>
                          )}
                        </div>
                      </>
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
