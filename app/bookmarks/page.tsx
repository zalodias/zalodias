import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { Search } from '@/components/search';
import { fetchDatabaseContent } from '@/lib/notion';
import { extractFaviconFromUrl, removeProtocolFromUrl } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default async function Bookmarks({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { q, c } = await searchParams;

  const bookmarks = await fetchDatabaseContent(
    process.env.NOTION_BOOKMARKS_DATABASE_ID!,
  );

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    const name = (
      bookmark.properties.Name as any
    ).title[0].plain_text.toLowerCase();
    const link = (bookmark.properties.Link as any).url.toLowerCase();
    const query = q?.toString().toLowerCase() || '';
    const matchesQuery = name.includes(query) || link.includes(query);
    const matchesCategory = c
      ? (
          bookmark.properties.Category as any
        )?.multi_select[0]?.name.toLowerCase() === c
      : true;

    return matchesQuery && matchesCategory;
  });

  const categories = [
    ...new Set(
      bookmarks
        .map(
          (bookmark) =>
            (bookmark.properties.Category as any)?.multi_select[0]?.name,
        )
        .filter(Boolean),
    ),
  ];

  return (
    <Container>
      <header className="flex flex-col gap-10">
        <Intro title="Bookmarks">
          A curated list of my favorite resources on the web. Updated regularly.
        </Intro>
        <section className="flex flex-col gap-5">
          <Search placeholder="Search bookmarks" />
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = c === category.toLowerCase();

              return (
                <Link
                  key={category}
                  href={{
                    pathname: '/bookmarks',
                    query: {
                      q,
                      c: isActive ? undefined : category.toLowerCase(),
                    },
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  className="rounded-lg bg-background-neutral-faded px-3 py-2 text-body-medium-subtle hover:bg-background-neutral-subtle active:scale-95 aria-[current='true']:bg-background-neutral-inverse aria-[current='true']:text-foreground-neutral-inverse"
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </section>
      </header>
      <div className="flex flex-col gap-1">
        {filteredBookmarks.map((bookmark) => (
          <div key={bookmark.id} className="flex flex-col gap-4">
            <a
              className="group flex flex-col gap-2 rounded-lg p-2 hover:bg-background-neutral-faded"
              href={(bookmark.properties.Link as any).url}
              target="_blank"
            >
              <div className="flex flex-grow items-center gap-2">
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
              <p className="line-clamp-1 text-body-medium-subtle text-foreground-neutral-faded">
                {removeProtocolFromUrl((bookmark.properties.Link as any).url)}
              </p>
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
}
