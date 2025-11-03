import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProjectCardProps } from '../types';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition border border-purple-500/20">
      <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link} className="inline-flex items-center text-purple-400 hover:text-purple-300">
          View Project <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;