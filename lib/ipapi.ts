export async function getHoursFromTimezone(): Promise<{
  hours: number | string;
  logs: string;
}> {
  let logs = '';
  try {
    const response = await fetch('https://ipapi.co/json/', {
      next: { revalidate: 60 },
    });
    const data = await response.json();
    const timezone = data.timezone;

    logs += `Fetched timezone: ${timezone}\n`; // Log the fetched timezone

    const date = new Date().toLocaleString('en-US', { timeZone: timezone });
    const hours = new Date(date).getHours();

    logs += `Current time in fetched timezone: ${date}\n`; // Log the current time

    return { hours, logs };
  } catch (error) {
    logs += 'Failed to get hours from timezone\n';
    return { hours: logs, logs };
  }
}
