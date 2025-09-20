'use client';

import { useEffect, useState } from 'react';

interface TextStreamingProps {
  text?: string;
}

export function TextStreaming({
  text = 'Whenever you read my words, my hope is that you imagine me speaking to you.',
}: TextStreamingProps) {
  const [progress, setProgress] = useState(0);
  const fadeWidth = 40;

  useEffect(() => {
    if (progress < 100) {
      const timeout = setTimeout(() => setProgress(progress + 2), 40);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const maskStop = `${progress}%`;
  const mask =
    progress < 100
      ? `linear-gradient(
          to right,
          black 0,
          black calc(${maskStop} - ${fadeWidth}px),
          transparent ${maskStop}
        )`
      : 'none';

  return (
    <div className="text-foreground-neutral-strong inline-block px-10">
      <span
        style={{
          maskImage: mask,
        }}
      >
        {text}
      </span>
    </div>
  );
}
