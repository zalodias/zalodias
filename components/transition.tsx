'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function Transition({
  duration = 0.4,
  delay = 0,
  offset = 20,
  children,
}: {
  duration?: number;
  delay?: number;
  offset?: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: offset },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ease: 'easeOut', duration, delay }}
    >
      {children}
    </motion.div>
  );
}
