import { getClient } from '@umami/api-client';

export const umami = getClient({
  apiEndpoint: process.env.UMAMI_API_CLIENT_ENDPOINT,
  apiKey: process.env.UMAMI_API_KEY,
});

export async function getPageVisitorCount() {
  const { data } = await umami.getWebsiteStats(process.env.UMAMI_WEBSITE_ID!, {
    startAt: 0,
    endAt: Date.now(),
  });

  return data?.visitors.value;
}
