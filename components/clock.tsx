import { profile } from '@/data/profile';
import { getCurrentTime } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Clock() {
  const [currentTime, setCurrentTime] = useState(
    getCurrentTime(profile.timezone),
  );

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(getCurrentTime(profile.timezone));
    };

    const now = new Date();
    const nextMinute = new Date(now.getTime() + (60 - now.getSeconds()) * 1000);
    const timeUntilNextMinute = nextMinute.getTime() - now.getTime();

    const timeout = setTimeout(() => {
      updateCurrentTime();
      const interval = setInterval(updateCurrentTime, 60000);

      return () => clearInterval(interval);
    }, timeUntilNextMinute);

    return () => clearTimeout(timeout);
  }, []);

  return <span>{currentTime}</span>;
}
