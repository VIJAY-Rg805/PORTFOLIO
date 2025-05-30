import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Tools: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const designStyles = [
    'Minimalist', 'Editorial', 'Clean', 'Modern',
    'Monochromatic', 'Typography-focused', 'Grid-based', 'Elegant'
  ];

  const software = [
    { name: 'Photoshop', category: 'Adobe Creative Suite' },
    { name: 'Illustrator', category: 'Adobe Creative Suite' },
    { name: 'InDesign', category: 'Adobe Creative Suite' },
    { name: 'Premiere Pro', category: 'Video Editing' },
    { name: 'After Effects', category: 'Motion Graphics' },
    { name: 'DaVinci Resolve', category: 'Color Grading' },
    { name: 'Figma', category: 'UI/UX Design' },
    { name: 'Cinema 4D', category: '3D Modeling' }
  ];

  return (
    <section id="tools" className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="section-container">
        <h2 className="section-title">Tools & Design Style</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-medium mb-8 text-white">Software & Tools</h3>
            
            <div className="space-y-8">
              {['Adobe Creative Suite', 'Video Editing', 'Motion Graphics', 'UI/UX Design', '3D Modeling'].map((category) => {
                const categoryTools = software.filter(tool => tool.category === category);
                if (categoryTools.length === 0) return null;
                
                return (
                  <div key={category}>
                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {categoryTools.map((tool) => (
                        <div 
                          key={tool.name} 
                          className="py-2 px-4 bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
                        >
                          {tool.name}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-medium mb-8 text-white">Design Philosophy</h3>
            
            <div className="space-y-6 text-gray-300 mb-12">
              <p>
                My design approach centers on minimalism and purpose. I believe in removing the unnecessary 
                to focus on what truly matters in each project.
              </p>
              <p>
                Typography, space, and composition are the foundations of my work. I value clarity and 
                intentionality in every design decision.
              </p>
            </div>
            
            <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Design Style Keywords</h4>
            <div className="flex flex-wrap gap-3">
              {designStyles.map((style, index) => (
                <motion.div
                  key={style}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                  className="py-2 px-4 bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  #{style}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tools;