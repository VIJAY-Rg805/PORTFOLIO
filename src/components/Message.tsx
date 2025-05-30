import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Message: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative">
              <img
                src="https://ik.imagekit.io/4ciwxbmsln/photo_2025-05-30_13-49-32.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 right-0 bg-black py-2 px-4 shadow-lg">
                <span className="text-xs uppercase tracking-widest text-white">Hello there</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-white">
              Welcome to my creative world
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                I craft visual stories through design and motion. My work is centered around creating meaningful 
                experiences that connect with viewers on an emotional level.
              </p>
              <p>
                Every project is an opportunity to push boundaries and explore new forms of creative expression. 
                I believe in the power of minimalism and letting the work speak for itself.
              </p>
            </div>
            
            <div className="mt-12">
              <p className="italic text-gray-400">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-12 h-px bg-white mr-4"></div>
                <span className="text-sm font-medium text-white">VIJAY RG</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Message;