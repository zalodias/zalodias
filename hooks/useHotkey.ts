'use client';

import { useEffect, useRef } from 'react';

type Shortcut = { combo: string; handler: () => void };

function isEditableTarget(element: Element | null): boolean {
  const tag = element?.tagName.toLowerCase();
  return (
    tag === 'input' ||
    tag === 'textarea' ||
    tag === 'select' ||
    element?.getAttribute('contenteditable') === 'true'
  );
}

export function useHotkey(shortcuts: Shortcut[]) {
  const ref = useRef(shortcuts);

  useEffect(() => {
    ref.current = shortcuts;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isEditableTarget(document.activeElement)) return;

      for (const { combo, handler } of ref.current) {
        const parts = combo.split('+');
        const key = parts.at(-1)!;
        const needsMeta = parts.includes('meta');
        if (needsMeta && !(e.metaKey || e.ctrlKey)) continue;
        if (e.key === key) {
          e.preventDefault();
          handler();
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
