import { Suspense, useState } from 'react';
import { myProjects } from '../constants';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';
import type { Project } from '../types';

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const projectCount: number = myProjects.length;
  const currentProject: Project = myProjects[selectedProjectIndex];

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
    <Section 
      id="projects" 
      title="Featured Projects" 
      subtitle="Explore my latest work and the technologies I've used to bring ideas to life"
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full">
        <motion.div 
          className="relative"
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card className="h-full">
            {/* Spotlight background */}
            <div className="absolute top-0 right-0 opacity-20">
              <img
              src={currentProject.spotlight}
              alt="spotlight"
                className="w-full h-96 object-cover rounded-xl"
            />
          </div>
            
            <div className="relative z-10">
              {/* Project logo */}
              <motion.div
                className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg mb-6"
                style={currentProject.logoStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img
                  src={currentProject.logo}
                  alt="logo"
                  className="w-10 h-10 shadow-sm"
                />
              </motion.div>
              
              {/* Project content */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedProjectIndex}
                  className="flex flex-col gap-5 text-white-600 my-5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl text-white font-semibold">
                    {currentProject.title}
                  </h3>
                  <p className="leading-relaxed">{currentProject.desc}</p>
                  <p className="text-sm opacity-80 leading-relaxed">{currentProject.subdesc}</p>
                </div>
              </AnimatePresence>
              
              {/* Tech stack and links */}
              <div className="flex items-center justify-between flex-wrap gap-5 mt-6">
                <div className="flex items-center gap-3 flex-wrap">
                  {currentProject.tags.map((tag, index) => (
                    <motion.div 
                      key={`${selectedProjectIndex}-${index}`}
                      className="tech-logo"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <img src={tag.path} alt={tag.name} />
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  {currentProject.href && (
                    <motion.a
                      href={currentProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 cursor-pointer text-white hover:text-white-800 transition-colors group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Live</span>
                      <motion.img
                        src="/assets/arrow-up.png"
                        alt="open live"
                        className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </motion.a>
                  )}
                  {currentProject.github && (
                    <motion.a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Code</span>
                      <motion.img
                        src="/assets/arrow-up.png"
                        alt="open code"
                        className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </motion.a>
                  )}
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <motion.button
                  className="arrow-btn group"
                  onClick={() => handleNavigation('previous')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous project"
                >
                  <img
                    src="/assets/left-arrow.png"
                    alt="left arrow"
                    className="w-3 h-3 group-hover:-translate-x-1 transition-transform"
                  />
                </motion.button>
                
                {/* Project indicators */}
                <div className="flex gap-2">
                  {myProjects.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === selectedProjectIndex ? 'bg-white' : 'bg-white/30'
                      }`}
                      onClick={() => setSelectedProjectIndex(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
                
                <motion.button
                  className="arrow-btn group"
                  onClick={() => handleNavigation('next')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next project"
                >
                  <img
                    src="/assets/right-arrow.png"
                    alt="right arrow"
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <motion.div 
          className="border border-black-300 bg-black-200 rounded-xl h-96 md:h-full overflow-hidden"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <motion.group 
                  scale={2} 
                  position={[0, -3, 0]} 
                  rotation={[0, -0.1, 0]}
                  key={selectedProjectIndex}
                  initial={{ opacity: 0, scale: 1.5 }}
                  animate={{ opacity: 1, scale: 2 }}
                  transition={{ duration: 0.5 }}
                >
                  <DemoComputer texture={currentProject.texture} />
                </motion.group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </motion.div>
      </div>
    </Section>
  );
}
