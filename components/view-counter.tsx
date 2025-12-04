'use client';

import { useEffect, useState } from 'react';
import { FetchReveal } from './fetch-reveal';

export function ViewCounter({ path }: { path: string }) {
  const [views, setViews] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/visitors?path=${encodeURIComponent(path)}`, {
      next: { revalidate: 60 },
    })
      .then((response) => response.json())
      .then((data) => {
        setViews(data.views ?? 0);
        setIsLoaded(true);
      })
      .catch(() => {
        setIsLoaded(true);
      });
  }, [path]);

  return (
    <p className="inline-flex items-center gap-1">
      <FetchReveal isLoaded={isLoaded}>{views ?? 0}</FetchReveal>
      <span>views</span>
    </p>
  );
}
