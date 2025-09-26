import { useEffect, useState } from 'react';
import NavItems from '../components/NavItems';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hasScrolled = useScrollAnimation();

  const toggleMenu = () => setIsOpen(prevIsOpen => !prevIsOpen);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        hasScrolled
          ? 'bg-black/80 shadow-lg shadow-black-200/30 border-b border-black-300/50'
          : 'bg-black/40'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 md:py-5 mx-auto c-space">
          <motion.a
            href="#home"
            style={{ fontFamily: 'myFont' }}
            className="text-white font-bold text-xl tracking-wide hover:text-gray-300 transition-colors"
            aria-label="Go to home section"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Abdelrahman
          </motion.a>
          
          <motion.button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex p-2 rounded-lg hover:bg-black-300/50 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle menu icon"
              className="w-6 h-6"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden bg-black-200/95 backdrop-blur-md border-t border-black-300/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <nav className="p-5">
              <NavItems />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
