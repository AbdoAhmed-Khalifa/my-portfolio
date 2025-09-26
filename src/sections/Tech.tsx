import { technologies } from '../constants';
import SocialButton from '../components/SocialButton';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Tech = () => {
  return (
    <Section 
      id="technologies" 
      title="Technologies I Use" 
      subtitle="A comprehensive toolkit of modern technologies and frameworks I work with"
    >
      <motion.div 
        className="flex flex-row flex-wrap justify-center sm:gap-10 gap-7"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {technologies.map(technology => (
          <motion.div
            key={technology.name}
            variants={fadeInUp}
            custom={index}
            whileHover={{ 
              scale: 1.1, 
              y: -10,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <SocialButton title={technology.name}>
              <div 
                className="tech-logo-tech group cursor-pointer" 
                aria-label={technology.name}
              >
                <img 
                  loading="lazy" 
                  src={technology.icon} 
                  alt={technology.name}
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </div>
            </SocialButton>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Tech;
