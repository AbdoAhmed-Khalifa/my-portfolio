import { motion } from 'framer-motion';

export default function Button({
  name,
  isBeam = false,
  containerClass,
}: {
  name: string;
  isBeam: boolean;
  containerClass: string;
}) {
  return (
    <motion.button 
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`btn ${containerClass} relative overflow-hidden`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 animate-gradient-x"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-4">
        {isBeam && (
          <span className="relative flex w-3 h-3">
            <span className="btn-ping" />
            <span className="btn-ping_dot" />
          </span>
        )}
        <span className="font-semibold">{name}</span>
      </div>
    </motion.button>
  );
}