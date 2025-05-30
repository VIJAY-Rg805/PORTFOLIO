import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string;
  image: string;
  year: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Project
          </span>
        </div>
      </div>
      
      <div className="p-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-medium text-white group-hover:text-gray-300 transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-gray-400">{project.year}</span>
        </div>
        <p className="text-gray-300 mb-4 group-hover:text-gray-400 transition-colors">
          {project.description}
        </p>
        <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors">
          Software: {project.tools}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;