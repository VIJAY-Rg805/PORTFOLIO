import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Cover from './components/Cover';
import GraphicProjects from './components/GraphicProjects';
import VideoProjects from './components/VideoProjects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <AnimatePresence mode="wait">
        <main>
          <Cover />
          <GraphicProjects />
          <VideoProjects />
          <Tools />
          <Contact />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;