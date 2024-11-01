import { Container } from '@/components/container';
import { fetchBlockContent } from '@/lib/notion';

export default async function Note({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const blocks = await fetchBlockContent('0331d48a1387493b8b68141b7ee4d8d0');

  return (
    <Container>
      <section className="flex flex-col gap-10">
        <h1 className="text-title-large-strong">{slug}</h1>
        <div className="flex flex-col gap-2">
          {blocks.map((block: any) => {
            return (
              <p key={block.id}>
                {block.paragraph.rich_text.map(
                  (text: any) => text.text.content,
                )}
              </p>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
