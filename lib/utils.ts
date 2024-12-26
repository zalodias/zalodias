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

export function formatDate(
  timestamp: string,
  options?: Intl.DateTimeFormatOptions,
): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', options);
}

export function getRelativeTimeString(
  date: Date | number,
  language = 'en',
): string {
  const time = typeof date === 'number' ? date : date.getTime();
  const delta = Math.round((time - Date.now()) / 1000);

  const cutoffs = [
    60,
    3600,
    86400,
    86400 * 7,
    86400 * 30,
    86400 * 365,
    Infinity,
  ];

  const units: Intl.RelativeTimeFormatUnit[] = [
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
  ];

  const unitIndex = cutoffs.findIndex((cutoff) => cutoff > Math.abs(delta));

  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

  const rtf = new Intl.RelativeTimeFormat(language, { numeric: 'auto' });

  return rtf.format(Math.floor(delta / divisor), units[unitIndex]);
}

export function extractFaviconFromUrl(url: string, size: number = 16): string {
  const faviconUrl = new URL(
    `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=${size}`,
  );

  return faviconUrl.toString();
}

export function generateSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function removeProtocolFromUrl(url: string): string {
  return url.replace(/^https?:\/\//, '');
}
