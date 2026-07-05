import { createApi } from 'unsplash-js';

export const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

export async function fetchPhotos() {
  try {
    const { data, error } = await unsplash.GET('/users/{username}/photos', {
      params: {
        path: { username: process.env.UNSPLASH_USERNAME! },
      },
    });

    if (error || !data) {
      throw new Error('Failed to fetch photos');
    }

    const photos = await Promise.all(
      data.map(async (p) => {
        const { data } = await unsplash.GET('/photos/{assetSlug}', {
          params: {
            path: { assetSlug: p.id },
          },
        });

        return data;
      }),
    );

    return photos.filter((photo) => photo !== undefined);
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
}

export async function fetchStats(photoId: string) {
  try {
    const { data } = await unsplash.GET('/photos/{assetSlug}/statistics', {
      params: {
        path: { assetSlug: photoId },
      },
    });

    return data ?? null;
  } catch (error) {
    console.error('Error fetching stats:', error);
    return null;
  }
}

export async function fetchUser() {
  try {
    const { data } = await unsplash.GET('/users/{username}', {
      params: {
        path: { username: process.env.UNSPLASH_USERNAME! },
      },
    });

    return data ?? null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}
