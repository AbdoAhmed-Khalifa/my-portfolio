import { useEffect, useState, useMemo } from 'react';
import NavItems from '../components/NavItems';
import usePerformance from '../hooks/usePerformance';

// Throttle function to limit scroll event frequency
function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): T {
  let inThrottle: boolean;
  return ((...args: unknown[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as T;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollThrottle } = usePerformance();

  const onScroll = useMemo(
    () =>
      throttle(() => {
        setHasScrolled(window.scrollY > 4);
      }, scrollThrottle),
    [scrollThrottle]
  );

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const toggleMenu = () => setIsOpen(prevIsOpen => !prevIsOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60 ${
        hasScrolled
          ? 'shadow-lg shadow-black-200/30 border-b border-black-300'
          : 'bg-black/60'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 md:py-5 mx-auto c-space">
          <a
            href="#home"
            style={{ fontFamily: 'myFont' }}
            className="text-white font-bold text-xl tracking-wide"
            aria-label="Go to home section"
          >
            Abdelrahman
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle menu icon"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`${isOpen ? 'max-h-screen' : 'max-h-0'} nav-sidebar`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
}
