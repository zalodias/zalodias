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
        <section className="grid gap-20 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
          {projects
            .filter(
              (project) =>
                (project.properties.Status as any).select.name === 'Ready',
            )
            .reverse()
            .map((project) => (
              <Link
                key={project.id}
                className="flex flex-col gap-4"
                href={`/projects/${generateSlug((project.properties.Name as any).title[0].plain_text)}`}
              >
                <div className="relative block w-full overflow-clip rounded-xl bg-background-neutral-faded">
                  <Image
                    src={(project.cover as any).file.url}
                    alt={(project.properties.Name as any).title[0].plain_text}
                    width={1920}
                    height={1440}
                    className="object-cover duration-200 hover:scale-105"
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
