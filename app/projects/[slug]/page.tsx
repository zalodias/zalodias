import { Container } from '@/components/container';
import { ProjectMetadata } from '@/components/project-metadata';
import Image from 'next/image';

export default function Project({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <header className="flex items-start justify-between gap-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-title-large-strong">
              Paving the way for a new system of collaboration
            </h1>
            <p className="text-body-large-default text-foreground-neutral-subtle">
              Kübe is a newly created co-work space in Lisbon. The identity
              concept displays the desire to present this space as dynamic and
              inclusive, combined with a technological and modern vision. Its
              symbol is a versatile representation, flexible to content.
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-neutral-faded bg-background-neutral-faded px-3 py-2 text-body-medium-subtle text-foreground-neutral-faded hover:bg-background-neutral-subtle hover:text-foreground-neutral-default disabled:pointer-events-none disabled:opacity-50">
            Share
          </button>
        </header>
        <section className="flex gap-20">
          <ProjectMetadata title="Year" description="2024" />
          <ProjectMetadata title="Role" description="Product Design" />
          <ProjectMetadata title="Deliverable" description="Mobile App" />
        </section>
        <div className="flex flex-col gap-10">
          <Image
            src="https://framerusercontent.com/images/sEbxQ4942NuQ3nev9zvvPxvpn0.jpg"
            alt="Project"
            className="rounded-xl"
            width={960}
            height={640}
          />
        </div>
      </div>
    </Container>
  );
}
