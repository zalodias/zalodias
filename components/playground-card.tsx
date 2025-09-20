'use client';

import { RotateCw } from 'lucide-react';
import { Children, cloneElement, isValidElement, useState } from 'react';

interface PlaygroundCardProps {
  title: string;
  children: React.ReactNode;
  restart?: boolean;
}

export function PlaygroundCard({
  title,
  children,
  restart = false,
}: PlaygroundCardProps) {
  const [key, setKey] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleRestart = () => {
    setKey((key) => key + 1);
    setRotation((rotation) => rotation + 360);
  };

  return (
    <div className="bg-background-neutral-faded border-border-neutral-faded after:from-background-neutral-default relative isolate grid aspect-[4/3] place-items-center overflow-hidden rounded-lg border after:absolute after:inset-x-0 after:bottom-0 after:h-1/4 after:bg-gradient-to-t after:to-transparent">
      {restart && (
        <button
          onClick={handleRestart}
          className="bg-background-neutral-default text-foreground-neutral-faded hover:text-foreground-neutral-default border-border-neutral-faded group absolute top-1 right-1 cursor-pointer rounded-lg border p-2 transition active:scale-95"
        >
          <RotateCw
            className="size-4 transition-transform duration-400"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </button>
      )}
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { key });
        }
        return child;
      })}
      <div className="absolute inset-x-4 bottom-4 z-20 flex justify-between">
        <span className="text-body-medium-subtle">{title}</span>
      </div>
    </div>
  );
}
