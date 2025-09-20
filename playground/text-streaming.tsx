'use client';

import { useEffect, useState } from 'react';

interface TextStreamingProps {
  text?: string;
}

export function TextStreaming({
  text = 'There’s this gentle pull towards understanding things, even what seems unexplainable? Like the vastness of space, or the sheer luck of being here at all. It doesn’t need a grand answer. Just the willingness to keep wondering, and maybe even find comfort in not knowing.',
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
