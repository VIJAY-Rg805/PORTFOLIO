import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause } from 'lucide-react';
import Modal from './Modal';

const VideoProjects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  const [playingStates, setPlayingStates] = useState<{ [key: number]: boolean }>({});
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  const togglePlay = (id: number, videoElement: HTMLVideoElement) => {
    if (videoElement.paused) {
      // Pause all other videos first
      Object.values(videoRefs.current).forEach(video => {
        if (video !== videoElement) {
          video.pause();
        }
      });
      videoElement.play();
      setPlayingStates(prev => ({ ...prev, [id]: true }));
    } else {
      videoElement.pause();
      setPlayingStates(prev => ({ ...prev, [id]: false }));
    }
  };

  const openModal = (id: number) => {
    // Pause all preview videos when opening modal
    Object.values(videoRefs.current).forEach(video => video.pause());
    setPlayingStates({});
    setSelectedVideo(id);
    
    // Reset and autoplay modal video
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
      modalVideoRef.current.play();
    }
  };

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setSelectedVideo(null);
  };

  const projects = [
    {
      id: 1,
      title: 'JFK Heist',
      description: 'Dynamic storytelling through motion graphics',
      tools: 'After Effects, Premiere Pro',
      videoUrl: 'https://ik.imagekit.io/4ciwxbmsln/jfk%20heist.mp4',
      year: '2024'
    },
    {
      id: 2,
      title: 'New Reel',
      description: 'Creative showcase of recent work',
      tools: 'After Effects, DaVinci Resolve',
      videoUrl: 'https://ik.imagekit.io/4ciwxbmsln/NEW%20REEL.mp4',
      year: '2024'
    },
    {
      id: 3,
      title: 'Reel 3',
      description: 'Motion graphics and visual effects',
      tools: 'Premiere Pro, After Effects',
      videoUrl: 'https://ik.imagekit.io/4ciwxbmsln/reel%203.mp4',
      year: '2023'
    },
    {
      id: 4,
      title: 'TS Reel',
      description: 'Technical showcase and effects',
      tools: 'After Effects, Cinema 4D',
      videoUrl: 'https://ik.imagekit.io/4ciwxbmsln/TS%20REEl.mp4',
      year: '2023'
    },
    {
      id: 5,
      title: 'First Project',
      description: 'Initial portfolio piece',
      tools: 'Premiere Pro, After Effects',
      videoUrl: 'https://ik.imagekit.io/4ciwxbmsln/1st%20.mp4',
      year: '2022'
    },
    {
      id: 6,
      title: 'Jeff Bezos',
      description: 'Corporate profile and storytelling',
      tools: 'After Effects, DaVinci Resolve',
      videoUrl: 'https://ik.imagekit.io/4ciwxbmsln/jeff%20bezoz.mp4',
      year: '2023'
    }
  ];

  const selectedProject = selectedVideo ? projects.find(p => p.id === selectedVideo) : null;

  return (
    <section id="video-projects" className="py-24 bg-black relative z-10">
      <div className="section-container">
        <h2 className="section-title text-white">Video Projects</h2>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(project.id)}
            >
              <div className="aspect-[9/16] relative overflow-hidden">
                <video
                  ref={el => {
                    if (el) videoRefs.current[project.id] = el;
                  }}
                  className="w-full h-full object-cover"
                  src={project.videoUrl}
                  muted
                  loop
                  playsInline
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay(project.id, e.currentTarget);
                  }}
                  onPlay={() => setPlayingStates(prev => ({ ...prev, [project.id]: true }))}
                  onPause={() => setPlayingStates(prev => ({ ...prev, [project.id]: false }))}
                />
                <div 
                  className="absolute inset-0 bg-black bg-opacity-40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    const video = videoRefs.current[project.id];
                    if (video) togglePlay(project.id, video);
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                    {playingStates[project.id] ? (
                      <Pause size={24} className="text-black" />
                    ) : (
                      <Play size={24} className="text-black ml-1" />
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-medium text-white line-clamp-1">{project.title}</h3>
                  <span className="text-xs text-gray-400">{project.year}</span>
                </div>
                <p className="text-sm text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                <p className="text-xs text-gray-400 line-clamp-1">Software: {project.tools}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Modal isOpen={selectedVideo !== null} onClose={closeModal}>
          {selectedProject && (
            <div className="relative">
              <video
                ref={modalVideoRef}
                className="max-h-[90vh] w-auto"
                src={selectedProject.videoUrl}
                controls
                autoPlay
                playsInline
              />
              <div className="mt-4">
                <h3 className="text-xl font-medium text-white">{selectedProject.title}</h3>
                <p className="text-gray-300 mt-2">{selectedProject.description}</p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default VideoProjects;