'use client';

import { motion, type Variants } from 'motion/react';

interface FetchRevealProps {
  isLoaded: boolean;
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 4,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
};

export function FetchReveal({
  isLoaded,
  children,
  duration = 0.4,
  delay = 0,
  className,
}: FetchRevealProps) {
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate={isLoaded ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.span>
  );
}
