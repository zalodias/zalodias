export async function getHoursFromTimezone(): Promise<number | string> {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      next: { revalidate: 60 },
    });
    const data = await response.json();
    const timezone = data.timezone;

    console.log('Fetched timezone:', timezone); // Log the fetched timezone

    const date = new Date().toLocaleString('en-US', { timeZone: timezone });
    const hours = new Date(date).getHours();

    console.log('Current time in fetched timezone:', date); // Log the current time

    return hours;
  } catch (error) {
    return 'Failed to get hours from timezone';
  }
}
