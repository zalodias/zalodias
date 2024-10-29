import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function mergeTailwindClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentTime(timezone: string) {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
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
    return 'Good night';
  } else if (hours < 12) {
    return 'Good morning';
  } else if (hours < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}

export function getMonthName(month: number): string {
  const date = new Date(0, month - 1);

  return date.toLocaleString('default', { month: 'long' });
}

export function formatBookmarkDate(timestamp: string): string {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
}

export function extractFaviconFromUrl(url: string, size: number = 16): string {
  const faviconUrl = new URL(
    `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=${size}`,
  );

  return faviconUrl.toString();
}
