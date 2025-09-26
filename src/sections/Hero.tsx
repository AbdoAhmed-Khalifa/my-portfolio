import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, lazy, useEffect } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import { motion } from 'framer-motion';
import { fadeInUp, slideInFromTop, staggerContainer } from '../utils/animations';
import { preloadImages } from '../utils/performance';

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

  // Preload critical images
  useEffect(() => {
    const criticalImages = ['/assets/hero.png', '/assets/grid1.png'];
    preloadImages(criticalImages);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden" id="home">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-100 via-black-200 to-black-300 opacity-50" />
      
      <motion.div 
        className="w-full mx-auto flex flex-col mt-24 sm:mt-40 c-space gap-3 relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.p 
          className="sm:text-3xl text-2xl font-medium text-white font-generalsans text-center"
          variants={slideInFromTop}
        >
          Hi, I am Abdelrahman <span className="waving-hand">👋</span>
        </motion.p>
        <motion.div 
          className="hero_tag text-gray_gradient"
          variants={fadeInUp}
        >
          <AnimatedText
            el="h1"
            text={['a Web Developer', 'Building Products & Brands']}
            repeatDelay={10000}
            once={true}
          />
        </motion.div>
      </motion.div>

      <div className="w-full h-full absolute inset-0 sm:mt-8 z-0">
        {Mobile ? (
          <div className="relative min-h-screen flex items-center justify-center flex-col ">
            <motion.img
              src="/assets/hero.png"
              alt="terminal-bg"
              loading="lazy"
              className="absolute inset-0 min-h-screen object-cover w-full h-full"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
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
        className="absolute bottom-7 left-0 right-0 w-full z-10 c-space"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex justify-center">
          <a
            className="w-fit"
            href={abdelrahman}
            download="abdelrahman-cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button 
              className="btn sm:w-fit w-full sm:min-w-52 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Download Resume
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 group-hover:animate-bounce"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </motion.svg>
            </motion.button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
