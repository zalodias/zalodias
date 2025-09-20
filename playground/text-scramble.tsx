'use client';

import { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text?: string;
  glyphs?: string;
  duration?: number;
  interval?: number;
  className?: string;
}

export function TextScramble({
  text = 'design engineer',
  glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]()!@#$%^&*-+=_:;,.<>?/',
  duration = 800,
  interval = 20,
}: TextScrambleProps) {
  const [characters, setCharacters] = useState<string[]>(() =>
    Array.from(text),
  );
  const timeoutRef = useRef<number | null>(null);

  const triggerScramble = () => {
    let start = performance.now();
    let finished = Array(text.length).fill(false);

    function animateScramble(now: number) {
      let newCharacters = [...characters];
      let allDone = true;

      for (let i = 0; i < text.length; i++) {
        if (!finished[i]) {
          if (now - start > i * 60 + duration) {
            newCharacters[i] = text[i];
            finished[i] = true;
          } else {
            newCharacters[i] =
              glyphs[Math.floor(Math.random() * glyphs.length)];
            allDone = false;
          }
        }
      }
      setCharacters(newCharacters);

      if (!allDone) {
        timeoutRef.current = window.setTimeout(
          () => animateScramble(performance.now()),
          interval,
        );
      }
    }

    setCharacters(
      Array.from(text).map(
        () => glyphs[Math.floor(Math.random() * glyphs.length)],
      ),
    );

    animateScramble(performance.now());
  };

  useEffect(() => {
    triggerScramble();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="text-foreground-neutral-strong text-body-medium-subtle font-mono uppercase">
      {characters.map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
  );
}
