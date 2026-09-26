import { UmamiClient } from '@umami/api-client';

const umami = new UmamiClient({
  baseUrl: process.env.UMAMI_API_CLIENT_ENDPOINT,
  apiKey: process.env.UMAMI_API_KEY,
});

export async function getTotalUniqueVisitors() {
  const stats = await umami.getWebsiteStats(process.env.UMAMI_WEBSITE_ID!, {
    startAt: 0,
    endAt: Date.now(),
  });

  return stats.visitors ?? 0;
}

export async function getVisitorCount(path: string) {
  const rows = await umami.getWebsiteMetrics(process.env.UMAMI_WEBSITE_ID!, {
    type: 'path',
    startAt: 0,
    endAt: Date.now(),
  });

  const paths = Object.fromEntries(rows.map(({ x, y }) => [x, y]));
  return paths[path] ?? 0;
}
