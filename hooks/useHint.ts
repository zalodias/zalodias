'use client';

import { useEffect, useRef, useState } from 'react';

export function useHint(delay = 400) {
  const [isHeld, setIsHeld] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Meta' && !e.repeat) {
        timer.current = setTimeout(() => setIsHeld(true), delay);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Meta') {
        if (timer.current) {
          clearTimeout(timer.current);
          timer.current = null;
        }
        setIsHeld(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [delay]);

  return isHeld;
}
