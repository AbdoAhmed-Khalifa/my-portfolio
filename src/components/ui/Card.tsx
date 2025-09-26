import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const Card = ({ children, className = '', hover = true, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={`
        bg-black-200/50 backdrop-blur-sm border border-black-300/50 
        rounded-xl p-6 transition-all duration-300
        hover:border-white/20 hover:shadow-xl hover:shadow-black/20
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};