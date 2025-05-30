import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

const GraphicProjects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Thumbnail 01',
      description: 'Clean and modern editorial layout design',
      tools: 'InDesign, Photoshop',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_1_2025-05-30_20-30-01.jpg',
      year: '2024'
    },
    {
      id: 2,
      title: 'Thumbnail 02',
      description: 'Comprehensive brand identity system',
      tools: 'Illustrator, Photoshop',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_2_2025-05-30_20-30-01.jpg',
      year: '2024'
    },
    {
      id: 3,
      title: 'Thumbnail 03',
      description: 'Contemporary magazine design and typography',
      tools: 'InDesign, Photoshop',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_3_2025-05-30_20-30-01.jpg',
      year: '2023'
    },
    {
      id: 4,
      title: 'Thumbnail 04',
      description: 'Minimalist product design and packaging',
      tools: 'Illustrator, Photoshop',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_4_2025-05-30_20-30-01.jpg',
      year: '2023'
    },
    {
      id: 5,
      title: 'Thumbnail 05',
      description: 'Abstract digital artwork and composition',
      tools: 'Photoshop, Illustrator',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_5_2025-05-30_20-30-01.jpg',
      year: '2023'
    },
    {
      id: 6,
      title: 'Thumbnail 06',
      description: 'Experimental typography and layout',
      tools: 'InDesign, Illustrator',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_6_2025-05-30_20-30-01.jpg',
      year: '2023'
    },
    {
      id: 7,
      title: 'Thumbnail 07',
      description: 'Modern poster design with bold typography',
      tools: 'Photoshop, Illustrator',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_7_2025-05-30_20-30-01.jpg',
      year: '2023'
    },
    {
      id: 8,
      title: 'Thumbnail 08',
      description: 'Art direction and visual storytelling',
      tools: 'Photoshop, InDesign',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_2_2025-05-30_20-06-48.jpg',
      year: '2024'
    },
    {
      id: 9,
      title: 'Thumbnail 09',
      description: 'Sophisticated editorial design with modern aesthetics',
      tools: 'InDesign, Photoshop',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_1_2025-05-30_20-06-48.jpg',
      year: '2024'
    },
    {
      id: 10,
      title: 'Thumbnail 10',
      description: 'Contemporary fashion design portfolio',
      tools: 'Photoshop, InDesign',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_6_2025-05-30_20-06-48.jpg',
      year: '2024'
    },
    {
      id: 11,
      title: 'Thumbnail 11',
      description: 'Urban landscape and architectural photography',
      tools: 'Photoshop, Lightroom',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_9_2025-05-30_20-06-48.jpg',
      year: '2023'
    },
    {
      id: 12,
      title: 'Thumbnail 12',
      description: 'Elegant product catalog design',
      tools: 'InDesign, Photoshop',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_8_2025-05-30_20-06-48.jpg',
      year: '2023'
    },
    {
      id: 13,
      title: 'Thumbnail 13',
      description: 'Comprehensive brand identity guidelines',
      tools: 'Illustrator, InDesign',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_4_2025-05-30_20-06-48.jpg',
      year: '2024'
    },
    {
      id: 14,
      title: 'Thumbnail 14',
      description: 'Modern lifestyle magazine layout',
      tools: 'InDesign, Photoshop',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_5_2025-05-30_20-06-48.jpg',
      year: '2023'
    },
    {
      id: 15,
      title: 'Thumbnail 15',
      description: 'Creative art direction and styling',
      tools: 'Photoshop, Illustrator',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_3_2025-05-30_20-06-48.jpg',
      year: '2024'
    },
    {
      id: 16,
      title: 'Thumbnail 16',
      description: 'Contemporary editorial design',
      tools: 'InDesign, Photoshop',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_7_2025-05-30_20-06-48.jpg',
      year: '2023'
    },
    {
      id: 17,
      title: 'Thumbnail 17',
      description: 'High-end fashion editorial design',
      tools: 'Photoshop, InDesign',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_10_2025-05-30_20-06-48.jpg',
      year: '2024'
    },
    {
      id: 18,
      title: 'Thumbnail 18',
      description: 'Dynamic magazine spread design',
      tools: 'InDesign, Photoshop',
      image: 'https://ik.imagekit.io/4ciwxbmsln/photo_11_2025-05-30_20-06-48.jpg',
      year: '2023'
    }
  ];

  return (
    <section id="graphic-projects" className="py-24 bg-black">
      <div className="section-container">
        <h2 className="section-title">Graphic Design Projects</h2>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {projects.map((project, index) => (
            <div key={project.id} onClick={() => setSelectedImage(project.image)}>
              <ProjectCard
                project={project}
                index={index}
                inView={inView}
              />
            </div>
          ))}
        </motion.div>

        <Modal isOpen={selectedImage !== null} onClose={() => setSelectedImage(null)}>
          <div className="relative max-w-[90vw] max-h-[90vh] overflow-auto">
            <img
              src={selectedImage || ''}
              alt="Project preview"
              className="w-full h-auto object-contain"
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default GraphicProjects;