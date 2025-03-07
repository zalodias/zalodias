'use client';

import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 0.2,
  delay = 0,
}: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const number = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      delay: delay,
      type: 'spring',
      stiffness: 100,
      damping: 40,
    });
    return controls.stop;
  }, [to, count, duration, delay]);

  return (
    <motion.span className="text-body-large-strong text-foreground-neutral-default">
      {number}
    </motion.span>
  );
}
