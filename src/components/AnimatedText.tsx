/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck
import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Simplified animations for mobile
const mobileAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  // Detect mobile for performance optimization
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Use simplified animations on mobile
  const animations = useMemo(() => {
    return isMobile ? mobileAnimations : animation;
  }, [isMobile, animation]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const show = () => {
      controls.start('visible');
      if (repeatDelay && !isMobile) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
      // Only cycle text on desktop for better mobile performance
      if (!isMobile) {
        const timeoutId = setTimeout(() => {
          if (currentIndex < textArray.length - 1) {
            setCurrentIndex(currentIndex + 1);
          } else {
            setCurrentIndex(0);
          }
        }, 5000);

        return () => clearTimeout(timeoutId);
      }
    } else {
      controls.start('hidden');
    }

    return () => clearTimeout(timeout);
  }, [
    isInView,
    currentIndex,
    isMobile,
    controls,
    repeatDelay,
    textArray.length,
  ]);

  // On mobile, show all text without character-by-character animation
  if (isMobile) {
    return (
      <Wrapper className={className}>
        <motion.span
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={animations}
        >
          {textArray[currentIndex]}
        </motion.span>
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(' ')}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        <span className="block">
          {textArray[currentIndex]?.split(' ').map((word, wordIndex) => (
            <span className="inline-block" key={`${word}-${wordIndex}`}>
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${char}-${charIndex}`}
                  className="inline-block"
                  variants={animations}
                >
                  {char}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </span>
      </motion.span>
    </Wrapper>
  );
};
