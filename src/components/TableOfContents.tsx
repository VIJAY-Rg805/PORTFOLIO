import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TableOfContents: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contents = [
    { number: '01', title: 'About Me', link: '#about' },
    { number: '02', title: 'Graphic Projects', link: '#graphic-projects' },
    { number: '03', title: 'Video Projects', link: '#video-projects' },
    { number: '04', title: 'Tools & Process', link: '#tools' },
    { number: '05', title: 'Contact', link: '#contact' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="table-of-contents" className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Table of Contents</h2>
          
          <motion.ul
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mt-16 space-y-6"
          >
            {contents.map((content, index) => (
              <motion.li key={index} variants={item}>
                <a 
                  href={content.link}
                  className="group flex items-center py-4 border-b border-gray-200 hover:border-black transition-colors duration-300"
                >
                  <span className="text-5xl font-light text-gray-300 group-hover:text-black transition-colors mr-8">
                    {content.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium">{content.title}</h3>
                  </div>
                  <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;