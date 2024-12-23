'use client';

import { getGreetingFromHours } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Greeting() {
  const [greeting, setGreeting] = useState(
    getGreetingFromHours(new Date().getHours()),
  );

  useEffect(() => {
    const updateGreeting = () => {
      const hours = new Date().getHours();
      const greeting = getGreetingFromHours(hours);
      setGreeting(greeting);
    };

    updateGreeting();

    const interval = setInterval(updateGreeting, 3600000);

    return () => clearInterval(interval);
  }, []);

  return <h1 className="text-title-large-strong">{greeting},</h1>;
}
