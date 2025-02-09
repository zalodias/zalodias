'use client';

import { scrollToElement } from '@/lib/utils';
import { Link } from 'lucide-react';
import { useEffect } from 'react';

interface HeadingAnchorProps {
  id: string;
}

export function HeadingAnchor({ id }: HeadingAnchorProps) {
  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      scrollToElement(id);
    }
  }, [id]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = `${window.location.href.split('#')[0]}#${id}`;
    navigator.clipboard.writeText(url);

    window.history.pushState({}, '', `#${id}`);
    scrollToElement(id);
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className="invisible absolute -left-6 top-1/2 -translate-y-1/2 rounded-md p-1 text-foreground-neutral-faded opacity-0 transition hover:bg-background-neutral-subtle hover:text-foreground-neutral-default group-hover:visible group-hover:opacity-100"
      aria-label="Link to section"
    >
      <Link size={16} />
    </a>
  );
}
