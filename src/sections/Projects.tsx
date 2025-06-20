import { Suspense, useState } from 'react';
import { myProjects } from '../constants';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const projectCount: number = myProjects.length;
  const currentProject = myProjects[selectedProjectIndex];

  function handleNavigation(direction: string) {
    setSelectedProjectIndex(prevIndex => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  }

  return (
    <section className="c-space my-20 background-pattern" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="head-text text-center mb-4">My Work</p>
        <p className="text-gray-300 text-center text-lg mb-12">
          Explore my latest projects showcasing modern web development
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full mt-12">
        <motion.div 
          key={selectedProjectIndex}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 relative sm:p-10 py-10 px-6 shadow-2xl shadow-black-200 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-white/10"
        >
          {/* Spotlight effect */}
          <div className="absolute top-0 right-0 overflow-hidden rounded-2xl">
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Project logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-4 backdrop-filter backdrop-blur-3xl w-fit rounded-2xl glow-effect"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-12 h-12 shadow-sm"
            />
          </motion.div>

          {/* Project content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProjectIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6 text-white-600 my-6"
            >
              <h3 className="text-3xl text-white font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {currentProject.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{currentProject.desc}</p>
              <p className="text-gray-400 leading-relaxed">{currentProject.subdesc}</p>
            </motion.div>
          </AnimatePresence>

          {/* Tech stack and links */}
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              {currentProject.tags.map((tag, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="tech-logo hover:scale-110"
                >
                  <img src={tag.path} alt={tag.name} className="w-full h-full object-contain" />
                </motion.div>
              ))}
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href={currentProject.href ? currentProject.href : currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 cursor-pointer text-white-600 hover:text-white transition-colors duration-300 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20"
            >
              <p className="font-medium">
                {currentProject.href ? 'Check Live Site' : 'View Source Code'}
              </p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="arrow-btn"
              onClick={() => handleNavigation('previous')}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </motion.button>

            {/* Project indicators */}
            <div className="flex gap-2">
              {myProjects.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedProjectIndex
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="arrow-btn"
              onClick={() => handleNavigation('next')}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </motion.button>
          </div>
        </motion.div>

        {/* 3D Computer Display */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/20 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-2xl h-96 md:h-full overflow-hidden"
        >
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}