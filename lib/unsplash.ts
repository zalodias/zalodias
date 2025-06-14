import { createApi } from 'unsplash-js';

export const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

interface Photo {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string | null;
  description: string | null;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  user: {
    name: string;
    username: string;
  };
  exif?: {
    make: string | null;
    model: string | null;
    exposure_time: string | null;
    aperture: string | null;
    focal_length: string | null;
    iso: number | null;
  };
}

export async function fetchPhotos() {
  try {
    const result = await unsplash.users.getPhotos({
      username: process.env.UNSPLASH_USERNAME!,
    });

    if (!result.response) {
      throw new Error('Failed to fetch photos');
    }

    const photos = await Promise.all(
      result.response.results.map(async (p) => {
        const photo = await unsplash.photos.get({ photoId: p.id });
        return photo.response as Photo;
      }),
    );

    return photos;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
}

export async function fetchPhotoStats(photoId: string) {
  try {
    const result = await unsplash.photos.getStats({
      photoId,
    });

    return result.response;
  } catch (error) {
    console.error('Error fetching photo stats:', error);
    return null;
  }
}

export async function fetchUserProfile() {
  try {
    const result = await unsplash.users.get({
      username: process.env.UNSPLASH_USERNAME!,
    });

    return result.response;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}
