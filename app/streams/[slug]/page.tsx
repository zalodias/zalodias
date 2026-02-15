import { ChatBubble, Message } from '@/components/chat-bubble';
import { Container } from '@/components/container';
import { ViewCounter } from '@/components/view-counter';
import {
  fetchBlockContent,
  fetchDatabaseContent,
  fetchPageContent,
} from '@/lib/notion';
import { formatDate, generateSlug } from '@/lib/utils';

export async function generateStaticParams() {
  const streams = await fetchDatabaseContent(
    process.env.NOTION_STREAMS_DATABASE_ID!,
    { filter: { property: 'Status', status: { equals: 'Live' } } },
  );

  return streams
    .map((stream) => {
      const title = (stream.properties as any).Name?.title?.[0]?.plain_text;

      return {
        slug: generateSlug(title),
      };
    })
    .filter(Boolean) as { slug: string }[];
}

async function getPageData(slug: string) {
  const database = await fetchDatabaseContent(
    process.env.NOTION_STREAMS_DATABASE_ID!,
  );

  const id = database.find(
    (stream) =>
      generateSlug((stream.properties.Name as any).title[0].plain_text) ===
      slug,
  )?.id;

  const page = await fetchPageContent(id!);

  return { page, id };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { page } = await getPageData(slug);

  return {
    title: (page.properties.Name as any).title[0].plain_text,
  };
}

export default async function Stream({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { page, id } = await getPageData(slug);
  const blocks = await fetchBlockContent(id!);

  const messages: Message[] = blocks.map((block) => {
    const isQuote = block.type === 'quote';
    const variant = isQuote ? 'right' : 'left';
    return { variant, block };
  });

  return (
    <Container>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-title-large-strong">
            {(page.properties.Name as any).title[0].plain_text}
          </h1>
          <div className="text-body-medium-default text-foreground-neutral-subtle flex items-center gap-2">
            {(page.properties.Date as any)?.date?.start && (
              <>
                <p>
                  {formatDate((page.properties.Date as any).date.start, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <span className="text-title-small-strong text-foreground-neutral-subtle">
                  ·
                </span>
              </>
            )}
            <ViewCounter path={`/streams/${slug}`} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {messages.map((message, index) => (
            <ChatBubble key={index} message={message} />
          ))}
        </div>
      </section>
    </Container>
  );
}
