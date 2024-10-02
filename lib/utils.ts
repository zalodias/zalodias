import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function mergeTailwindClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getCurrentCity() {
  try {
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const ip = ipData.ip;

    const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
    const location = await locationResponse.json();

    return location.city;
  } catch (error) {
    console.error('Error fetching IP or location data:', error);
  }
}

export function getCurrentTime() {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  return now.toLocaleString('en-US', options);
}
