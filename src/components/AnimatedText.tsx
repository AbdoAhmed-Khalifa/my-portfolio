/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck
import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index of text
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const show = () => {
      controls.start('visible');
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
      // Increment the index after the animation is visible
      const timeoutId = setTimeout(() => {
        if (currentIndex < textArray.length - 1) {
          setCurrentIndex(currentIndex + 1); // Move to the next element
        } else {
          setCurrentIndex(0);
        }
      }, 5000); // Adjust the timeout to match your animation duration

      return () => clearTimeout(timeoutId);
    } else {
      controls.start('hidden');
    }

    return () => clearTimeout(timeout);
  }, [isInView, currentIndex]); // Re-run effect when currentIndex changes

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
        {/* Only render the current element at currentIndex */}
        <span className="block">
          {textArray[currentIndex]?.split(' ').map((word, wordIndex) => (
            <span className="inline-block" key={`${word}-${wordIndex}`}>
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${char}-${charIndex}`}
                  className="inline-block"
                  variants={animation}
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
