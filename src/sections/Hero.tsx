import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, lazy } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import { motion } from 'framer-motion';

import abdelrahman from '/assets/abdelrahman.pdf';
import { AnimatedText } from '../components/AnimatedText';

const HeroCamera = lazy(() => import('../components/HeroCamera'));
const Target = lazy(() => import('../components/Target'));
const ReactLogo = lazy(() => import('../components/ReactLogo'));
const Cube = lazy(() => import('../components/Cube'));
const Rings = lazy(() => import('../components/Ring'));
const HackerRoom = lazy(() => import('../components/HackerRoom'));

export default function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const Mobile = window.screen.width <= 768;

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative background-pattern" id="home">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mx-auto flex flex-col mt-20 sm:mt-36 c-space gap-4 relative z-10"
      >
        <motion.p 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sm:text-3xl text-2xl font-medium text-white font-generalsans text-center"
        >
          Hi, I am{' '}
          <span className="animated-gradient font-bold">Abdelrahman</span>{' '}
          <span className="waving-hand">👋</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero_tag text-gray_gradient"
        >
          <AnimatedText
            el="h1"
            text={['a Web Developer', 'Building Products & Brands']}
            repeatDelay={10000}
            once={true}
          />
        </motion.div>
      </motion.div>

      <div className="w-full h-full absolute inset-0 sm:mt-8">
        {Mobile ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen flex items-center justify-center flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
            <img
              src="/assets/hero.png"
              alt="terminal-bg"
              loading="lazy"
              className="absolute inset-0 min-h-screen object-cover w-full h-full"
            />
          </motion.div>
        ) : (
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0, -Math.PI, 0]}
                />
              </HeroCamera>
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition} />
              </group>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        )}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-7 left-0 right-0 w-full z-10 c-space"
      >
        <a
          className="w-fit block mx-auto"
          href={abdelrahman}
          download="abdelrahman-cv.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn sm:w-fit w-full sm:min-w-60 glow-effect"
          >
            Download Resume
            <motion.svg
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </motion.svg>
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}