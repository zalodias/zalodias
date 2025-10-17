import { getClient } from '@umami/api-client';

export const umami = getClient({
  apiEndpoint: process.env.UMAMI_API_CLIENT_ENDPOINT,
  apiKey: process.env.UMAMI_API_KEY,
});

export async function getTotalUniqueVisitors() {
  const { data } = await umami.getWebsiteStats(process.env.UMAMI_WEBSITE_ID!, {
    startAt: 0,
    endAt: Date.now(),
  });

  const visitors = data?.visitors as number | { value: number } | undefined;
  return (typeof visitors === 'number' ? visitors : visitors?.value) ?? 0;
}

export async function getVisitorCount(path: string) {
  const { data } = await umami.getWebsiteMetrics(
    process.env.UMAMI_WEBSITE_ID!,
    {
      type: 'url',
      startAt: 0,
      endAt: Date.now(),
    },
  );

  const paths = Object.fromEntries(
    data.map(({ x, y }: { x: string; y: number }) => [x, y]),
  );
  return paths[path] ?? 0;
}
