import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { stack } from '@/data/stack';

export default function Stack() {
  return (
    <Container>
      <Intro title="Stack">A collection of my favorite working tools</Intro>
      <div className="grid gap-5 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        {stack.map((resource) => (
          <div
            key={resource.name}
            className="flex flex-col gap-4 rounded-xl border border-border-neutral-faded bg-background-neutral-faded p-4"
          >
            <div className="size-14">
              <img
                src={resource.image}
                className="rounded-xl border border-border-neutral-subtle"
              ></img>
            </div>
            <div className="grid gap-0.5">
              <span className="text-body-large-strong">{resource.name}</span>
              <p className="text-body-large-default text-foreground-neutral-subtle">
                {resource.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
