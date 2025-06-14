import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { shots } from '@/data/metadata';
import { fetchPhotos } from '@/lib/unsplash';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: shots.title,
  description: shots.description,
};

export default async function Shots() {
  const photos = await fetchPhotos();

  return (
    <Container>
      <Intro title="Shots">{shots.description}</Intro>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg"
          >
            <img
              src={photo.urls.regular}
              alt={photo.alt_description || photo.description || ''}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="from-background-neutral-faded/80 to-background-neutral-faded/80 text-body-small-subtle inset-shadow-foreground-neutral-default/10 absolute inset-x-0 bottom-0 flex translate-y-1/4 gap-2 bg-linear-to-b p-3 opacity-0 inset-shadow-xs transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex grow gap-1">
                <span className="text-foreground-neutral-faded">
                  {photo.exif?.make}
                </span>
                <span>{photo.exif?.model}</span>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-px">
                  <span className="text-foreground-neutral-faded">ƒ</span>
                  <span>{photo.exif?.aperture}</span>
                </div>
                <div className="flex gap-px">
                  <span>{photo.exif?.focal_length}</span>
                  <span className="text-foreground-neutral-faded">mm</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}
