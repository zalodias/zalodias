'use client';

import { useEffect, useState } from 'react';

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
      });
  }, [path]);

  return <p>{views ?? 0} views</p>;
}
