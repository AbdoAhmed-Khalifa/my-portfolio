import { technologies } from '../constants';
import { motion } from 'framer-motion';

const Tech = () => {
  return (
    <section className="c-space my-20" id="technologies">
      <p className="head-text">Technologies I Use</p>
      <div className="flex flex-row flex-wrap justify-center sm:gap-10 gap-7 mt-12">
        {technologies.map(technology => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className=" tech-logo-tech"
            key={technology.name}
          >
            <img loading="lazy" src={technology.icon} alt={technology.name} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
