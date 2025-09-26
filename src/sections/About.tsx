import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Section } from '../components/ui/Section';
import { OptimizedImage } from '../components/ui/OptimizedImage';
import { useClipboard } from '../hooks/useClipboard';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function About() {
  const { isCopied, copyToClipboard } = useClipboard();
  const email = 'abdelrahmanahmedkhalifa99@gmail.com';

  const handleCopy = () => {
    copyToClipboard(email);
  };

  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Get to know more about my background, skills, and passion for web development"
    >
      <motion.div 
        className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 w-full gap-6"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="col-span-1 xl:row-span-3" variants={fadeInUp}>
          <Card className="h-full">
            <OptimizedImage
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full h-fit sm:h-[276px] object-contain rounded-lg mb-4"
              priority
            />
            <div>
              <h3 className="grid-headtext">Hi, I'm Abdelrahman</h3>
              <p className="grid-subtext leading-relaxed">
                Motivated Web Developer skilled in frontend for mobile and web,
                with backend knowledge. Focused on building responsive,
                efficient, and user-centered solutions.
              </p>
            </div>
          </Card>
        </motion.div>
        
        <motion.div className="col-span-1 xl:row-span-3" variants={fadeInUp}>
          <Card className="h-full">
            <OptimizedImage
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full h-fit sm:h-[276px] object-contain rounded-lg mb-4"
            />
            <div>
              <h3 className="grid-headtext">Tech Stack</h3>
              <p className="grid-subtext leading-relaxed">
                JavaScript/TypeScript, React.js, Next.js, and Node.js. State
                management with Redux Toolkit and React Query; styling with
                Tailwind CSS, Styled Components, and Sass; animations with
                Framer Motion and GSAP. Comfortable with Firebase, Supabase, and
                MongoDB.
              </p>
            </div>
          </Card>
        </motion.div>
        
        <motion.div className="col-span-1 xl:row-span-4" variants={fadeInUp}>
          <Card className="h-full">
            <div className="w-full rounded-3xl h-fit sm:h-[326px] flex items-center justify-center mb-4">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 26.5614389,
                    lng: 31.6918783,
                    text: "I'm here!",
                    color: 'white',
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <h3 className="grid-headtext">Availability</h3>
              <p className="grid-subtext">
                Open to remote, hybrid, or on‑site roles.
              </p>
              <a
                href="https://wa.me/201065058121?text=Hi%20Abdelrahman,%20I'm%20interested%20in%20discussing%20a%20work%20opportunity%20with%20you."
                target="_blank"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    name="Let's Work Together"
                    isBeam
                    containerClass="mt-6 w-full"
                  />
                </motion.div>
              </a>
            </div>
          </Card>
        </motion.div>
        
        <motion.div className="xl:col-span-2 xl:row-span-3" variants={fadeInUp}>
          <Card className="h-full">
            <OptimizedImage
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain rounded-lg mb-4"
            />
            <div>
              <h3 className="grid-headtext">My Passion for Coding</h3>
              <p className="grid-subtext leading-relaxed">
                I love solving problems and building things through code. Coding
                isn't just my profession - it is my passion.
              </p>
            </div>
          </Card>
        </motion.div>
        
        <motion.div className="xl:col-span-1 xl:row-span-2" variants={fadeInUp}>
          <Card className="h-full">
            <OptimizedImage
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full h-fit sm:h-[276px] md:h-[126px] object-cover sm:object-top rounded-lg mb-4"
            />
            <div className="space-y-2">
              <h4 className="grid-subtext text-center font-semibold">Contact me</h4>
              <motion.div 
                className="copy-container group" 
                onClick={handleCopy}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.img
                  src={isCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt="copy"
                  className="w-6 h-6 cursor-pointer transition-transform group-hover:scale-110"
                  animate={isCopied ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                />
                <p className="font-medium text-white sm:text-base text-sm text-gray_gradient group-hover:text-white transition-colors">
                  {email}
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
}
