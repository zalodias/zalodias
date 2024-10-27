export async function getHoursFromTimezone(): Promise<number | string> {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      next: { revalidate: 3600 },
    });
    const data = await response.json();
    const timezone = data.timezone;

    const date = new Date().toLocaleString('en-US', { timeZone: timezone });
    const hours = new Date(date).getHours();

    return hours;
  } catch (error) {
    return 'Failed to get hours from timezone';
  }
}
