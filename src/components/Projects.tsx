import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB",],
      link: "https://github.com/Paarth11/PCL-prototype"
    },
    {
      title: "URL Shortner",
      description: "URL Shortner to effectively manage and short links.",
      tech: ["React", "TypeScript", "Firebase"],
      link: "https://github.com/Paarth11/PCL-prototype"
    },
    {
      title: "Moderation bot",
      description: "A moderation bot for discord",
      tech: ["React", "API Integration", "Tailwind"],
      link: "https://github.com/Paarth11/Moderation-bot"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;