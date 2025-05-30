import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign',
    'Adobe Premiere Pro', 'Adobe After Effects', 'Figma',
    'DaVinci Resolve', 'Cinema 4D', 'Photography',
    'UI/UX Design', 'Typography', 'Motion Graphics'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-medium uppercase">VIJAY RG</h3>
              <p className="text-sm text-gray-600">Based in INDIA</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-medium mb-6">Creative Statement</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  As a graphic designer and video editor with over 5 years of experience, 
                  I specialize in creating clean, impactful visual stories that resonate with audiences.
                </p>
                <p>
                  My approach combines minimalist aesthetics with thoughtful storytelling, 
                  whether I'm designing editorial layouts or editing captivating video content.
                </p>
                <p>
                  I believe in the power of white space, typography, and composition to create 
                  work that is both beautiful and functional. My process is collaborative and 
                  detail-oriented, ensuring each project exceeds expectations.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-4">Skills & Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
                    className="py-2 px-3 bg-gray-100 text-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;