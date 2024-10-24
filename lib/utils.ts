import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function mergeTailwindClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentTime(timezone: string) {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: timezone,
  };

  return now.toLocaleString('en-US', options);
}

export function getWikiFromLocation(location: string): string {
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(location)}`;
}

export function getGreetingFromHours(hours: number): string {
  if (hours < 6) {
    return 'Good night,';
  } else if (hours < 12) {
    return 'Good morning,';
  } else if (hours < 18) {
    return 'Good afternoon,';
  } else {
    return 'Good evening,';
  }
}
