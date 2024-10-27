export async function getHoursFromTimezone(): Promise<number | string> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const timezone = data.timezone;

    const date = new Date().toLocaleString('en-US', { timeZone: timezone });
    const time = new Date(date).getHours();

    return time;
  } catch (error) {
    return 'Failed to fetch time';
  }
}
