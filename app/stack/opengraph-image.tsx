import { Thumbnail } from '@/components/thumbnail';
import { stack } from '@/data/metadata';
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  const inter = await readFile(join(process.cwd(), 'assets/fonts/Inter.ttf'));

  return new ImageResponse(<Thumbnail title={stack.title} />, {
    ...size,
    fonts: [
      {
        name: 'Inter',
        data: inter,
      },
    ],
  });
}
