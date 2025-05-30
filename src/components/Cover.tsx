import React from 'react';
import { motion } from 'framer-motion';

const Cover: React.FC = () => {
  const letterVariants = {
    initial: { y: 0, scale: 1 },
    hover: {
      y: -10,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const letters = "PORTFOLIO".split("");

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background Grid with enhanced opacity animation */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          className="grid grid-cols-[repeat(20,1fr)] h-full w-full"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="border-l border-gray-300"></div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 grid grid-rows-[repeat(20,1fr)] w-full"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="border-t border-gray-300"></div>
          ))}
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Portfolio Text */}
          <div className="flex justify-center mb-[-50px]">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="initial"
                whileHover="hover"
                className="text-[15vw] leading-none font-bold tracking-wider text-white
                         transition-all duration-300 hover:text-gray-300 cursor-pointer"
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Circular Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="w-[250px] h-[250px] rounded-full overflow-hidden
                          relative group cursor-pointer">
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20
                         transition-all duration-500"
              />
              <motion.img
                src="https://ik.imagekit.io/4ciwxbmsln/photo_2025-05-30_13-49-32.jpg"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700
                         group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-center mt-8 relative z-20"
          >
            <motion.h2 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-medium text-white cursor-pointer"
            >
              VIJAY RG
            </motion.h2>
            <motion.p 
              whileHover={{ y: -2, x: 5 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 mt-3 text-lg cursor-pointer"
            >
              Graphic Designer + Video Editor
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cover;