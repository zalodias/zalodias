import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { fetchDatabaseContent } from '@/lib/notion';
import { extractFaviconFromUrl, formatDate } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export default async function Bookmarks() {
  const bookmarks = await fetchDatabaseContent(
    '12057c1e961280329ebad0ecdf335eb7',
  );

  return (
    <Container>
      <Intro title="Bookmarks">
        A curated list of my favorite resources on the web. Updated regularly.
      </Intro>
      <div className="flex flex-col gap-1">
        {bookmarks.map((bookmark) => (
          <div key={bookmark.id} className="flex flex-col gap-4">
            <a
              className="group flex items-center gap-2 rounded-lg p-2 hover:bg-background-neutral-faded"
              href={(bookmark.properties.Link as any).url}
              key={bookmark.id}
              target="_blank"
            >
              <div className="flex flex-grow items-center gap-1">
                <img
                  src={extractFaviconFromUrl(
                    (bookmark.properties.Link as any).url,
                    64,
                  )}
                  alt="favicon"
                  className="size-4"
                />
                <p className="line-clamp-1 text-body-large-strong">
                  {(bookmark.properties.Name as any).title[0].plain_text}
                </p>
                <ArrowUpRight
                  width={16}
                  className="scale-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
                />
              </div>
              <p className="text-body-medium-subtle text-foreground-neutral-faded">
                {formatDate(bookmark.created_time, {
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
}
