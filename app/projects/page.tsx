import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { fetchDatabaseContent } from '@/lib/notion';
import { generateSlug } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
  const projects = await fetchDatabaseContent(
    '13157c1e961280e99dfffd55147e74b3',
  );

  return (
    <Container>
      <section className="flex flex-col gap-20">
        <Intro
          title="Projects"
          description="Showcase of my work on thoughtful design solutions."
        />
        <section className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-20">
          {projects.map((project) => (
            <Link
              key={project.id}
              className="flex flex-col gap-4"
              href={`/projects/${generateSlug((project.properties.Name as any).title[0].plain_text)}`}
            >
              <div className="relative block h-80 w-full">
                <Image
                  src={''}
                  alt={(project.properties.Name as any).title[0].plain_text}
                  fill
                  className="rounded-xl bg-background-neutral-faded object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-title-small-strong">
                  {(project.properties.Name as any).title[0].plain_text}
                </h2>
                <p className="text-body-large-default text-foreground-neutral-faded">
                  {
                    (project.properties.Description as any).rich_text[0]
                      .plain_text
                  }
                </p>
              </div>
            </Link>
          ))}
        </section>
      </section>
    </Container>
  );
}
