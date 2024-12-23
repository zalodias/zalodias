'use client';

import { getGreetingFromHours } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchTimezone = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const timezone = data.timezone;

        const date = new Date().toLocaleString('en-US', { timeZone: timezone });
        const hours = new Date(date).getHours();
        const greeting = getGreetingFromHours(hours);

        setGreeting(greeting);
      } catch (error) {
        console.error('Failed to fetch timezone:', error);
      }
    };

    fetchTimezone();
  }, []);

  return <h1 className="text-title-large-strong">{greeting},</h1>;
}
