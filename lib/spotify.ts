export interface Track {
  id: string;
  name: string;
  artists: string;
  artwork: string | null;
}

async function getAccessToken(): Promise<string | null> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error(`Spotify token refresh failed: ${response.status}`);
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

export async function getLastPlayed(): Promise<Track | null> {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) return null;

    const response = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as {
      items: Array<{
        track: {
          id: string | null;
          name: string;
          is_local?: boolean;
          artists: Array<{ name: string }>;
          album: { images: Array<{ url: string }> };
        };
      }>;
    };

    const track = data.items?.[0]?.track;
    if (!track || track.is_local || !track.id) return null;

    return {
      id: track.id,
      name: track.name,
      artists: track.artists.map((artist) => artist.name).join(', '),
      artwork: track.album.images[0]?.url ?? null,
    };
  } catch (error) {
    console.error('Failed to get last played track:', error);
    return null;
  }
}
