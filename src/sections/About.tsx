import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  
  function handleCopy() {
    navigator.clipboard.writeText('abdelrahmanahmedkhalifa99@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="c-space my-20 background-pattern" id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 w-full gap-6"
      >
        <motion.div variants={itemVariants} className="col-span-1 xl:row-span-3">
          <div className="grid-container group hover:scale-[1.02] transition-transform duration-300">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/assets/grid1.png"
                alt="grid-1"
                className="w-full h-fit sm:h-[276px] object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <p className="grid-headtext animated-gradient">Hi, I'm Abdelrahman</p>
              <p className="grid-subtext">
                Motivated Web Developer skilled in frontend for mobile and web,
                with backend knowledge. Focused on building responsive,
                efficient, and user-centered solutions.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1 xl:row-span-3">
          <div className="grid-container group hover:scale-[1.02] transition-transform duration-300">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/assets/grid2.png"
                alt="grid-2"
                className="w-full h-fit sm:h-[276px] object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <p className="grid-headtext">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Tech Stack
                </span>
              </p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with focus in React and
                Next.js ecosystem. with knowledge of Node.js.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1 xl:row-span-4">
          <div className="grid-container group">
            <div className="w-full rounded-3xl h-fit sm:h-[326px] flex items-center justify-center overflow-hidden">
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
                    color: '#60a5fa',
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I can work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I'm based in Egypt, with remote work available.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="https://wa.me/201065058121?text=Hi%20Abdelrahman,%20I'm%20interested%20in%20discussing%20a%20work%20opportunity%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    name="Let's Work Together"
                    isBeam
                    containerClass="mt-10 w-full glow-effect"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container group hover:scale-[1.02] transition-transform duration-300">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/assets/grid3.png"
                alt="grid-3"
                className="w-full sm:h-[266px] h-fit object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <p className="grid-headtext">
                <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                  My Passion for Coding
                </span>
              </p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn't just my profession - it is my passion.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container group">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/assets/grid4.png"
                alt="grid-4"
                className="w-full h-fit sm:h-[276px] md:h-[126px] object-cover sm:object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-3">
              <p className="grid-subtext text-center font-semibold">Contact me</p>
              <motion.div 
                className="copy-container" 
                onClick={handleCopy}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.img
                  animate={isCopied ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                  src={isCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt="copy"
                  className="w-6 h-6 cursor-pointer"
                />
                <p className="font-medium text-white sm:text-base text-sm">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    abdelrahmanahmedkhalifa99@gmail.com
                  </span>
                </p>
              </motion.div>
              {isCopied && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-400 text-sm text-center font-medium"
                >
                  Email copied to clipboard!
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}