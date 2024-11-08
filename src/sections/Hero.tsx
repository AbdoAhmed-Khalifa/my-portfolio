import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, lazy } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';

import Button from '../components/Button';
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
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col mt-20 sm:mt-36 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white font-generalsans text-center">
          Hi, I am Abdelrahman <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          <AnimatedText
            el="h2"
            text={['a Web Developer', 'Building Products & Brands']}
            repeatDelay={20000}
            // once={true}
          />
        </p>
      </div>

      <div className="w-full h-full absolute inset-0 sm:mt-8">
        {Mobile ? (
          <div className="relative min-h-screen flex items-center justify-center flex-col ">
            <img
              src="/assets/hero.png"
              alt="terminal-bg"
              loading="lazy"
              className="absolute  inset-0 min-h-screen  object-cover w-full  h-full"
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

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a
          className="w-fit"
          href={abdelrahman}
          download="abdelrahman-cv.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            name="Download Resume"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-52"
          />
        </a>
      </div>
    </section>
  );
}
