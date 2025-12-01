'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { mergeTailwindClassNames as cn } from '@/lib/utils';
import { useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
}

export function VideoPlayer({
  src,
  className,
  controls = false,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'metadata',
}: VideoPlayerProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLVideoElement>({
    threshold: 0.1,
    freezeOnceVisible: false,
  });

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch((error) => {
        console.error(error);
      });
    } else {
      video.pause();
    }
  }, [isVisible, ref]);

  return (
    <video
      ref={ref}
      controls={controls}
      className={cn('w-full rounded-xl', className)}
      preload={preload}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
    >
      <source src={src} />
    </video>
  );
}
