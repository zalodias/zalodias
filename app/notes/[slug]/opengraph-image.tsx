import { Thumbnail } from '@/components/thumbnail';
import { generateTitleFromSlug } from '@/lib/utils';
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const inter = await readFile(join(process.cwd(), 'assets/fonts/Inter.ttf'));

  return new ImageResponse(
    <Thumbnail title={generateTitleFromSlug(params.slug)} size={80} />,
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: inter,
        },
      ],
    },
  );
}
