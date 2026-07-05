'use client';

import { Link } from 'lucide-react';
import { useEffect } from 'react';

interface HeadingAnchorProps {
  id: string;
}

export function HeadingAnchor({ id }: HeadingAnchorProps) {
  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      document.getElementById(id)?.scrollIntoView();
    }
  }, [id]);

  const handleClick = () => {
    const url = `${window.location.href.split('#')[0]}#${id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className="text-foreground-neutral-faded hover:bg-background-neutral-subtle hover:text-foreground-neutral-default invisible absolute top-1/2 -left-6 -translate-y-1/2 rounded-md p-1 opacity-0 transition md:group-hover:visible md:group-hover:opacity-100"
      aria-label="Link to section"
    >
      <Link size={16} />
    </a>
  );
}
