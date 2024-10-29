import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { getBookmarks } from '@/lib/notion';
import {
  extractFaviconFromUrl,
  formatBookmarkDate,
  getMonthName,
} from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export default async function Bookmarks() {
  const bookmarks = await getBookmarks();
  console.log(bookmarks);

  const groupedBookmarks = bookmarks.reduce(
    (acc, item) => {
      const date = new Date(item.created_time);
      const monthYear = `${getMonthName(date.getMonth() + 1)} ${date.getFullYear()}`;

      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(item);
      return acc;
    },
    {} as Record<string, typeof bookmarks>,
  );

  return (
    <Container>
      <section className="flex flex-col gap-20">
        <Intro
          title="Bookmarks"
          description="A curated list of my favorite resources on the web. Updated regularly."
        />
        {Object.entries(groupedBookmarks).map(([monthYear, items]) => (
          <div key={monthYear} className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h2 className="text-title-small-strong">{monthYear}</h2>
              <p className="text-body-medium-subtle text-foreground-neutral-subtle">
                {items.length} bookmarks
              </p>
            </div>
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <a
                  className="group flex items-center gap-2 rounded-lg p-2 hover:bg-background-neutral-faded"
                  href={item.properties.Link.url}
                  key={item.id}
                  target="_blank"
                >
                  <div className="flex flex-grow items-center gap-1">
                    <img
                      src={extractFaviconFromUrl(item.properties.Link.url, 64)}
                      alt="favicon"
                      className="size-4"
                    />
                    <p className="text-body-large-strong">
                      {item.properties.Name.title[0].plain_text}
                    </p>
                    <ArrowUpRight
                      width={16}
                      className="scale-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
                    />
                  </div>
                  <p className="text-body-medium-subtle text-foreground-neutral-faded">
                    {formatBookmarkDate(item.created_time)}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}
