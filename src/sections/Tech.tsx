import { technologies } from '../constants';
import { motion } from 'framer-motion';

const Tech = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="c-space my-20 background-pattern" id="technologies">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="head-text mb-4">Technologies I Use</p>
        <p className="text-gray-300 text-lg">
          My toolkit for building modern, scalable applications
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-row flex-wrap justify-center sm:gap-12 gap-8 mt-12"
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1, 
              y: -10,
              transition: { duration: 0.2 }
            }}
            className="tech-logo-tech group relative"
          >
            <img 
              loading="lazy" 
              src={technology.icon} 
              alt={technology.name}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
            
            {/* Tooltip */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="bg-black/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg border border-white/20 whitespace-nowrap">
                {technology.name}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45 border-l border-t border-white/20"></div>
              </div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Tech;