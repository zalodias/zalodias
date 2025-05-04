import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { PlaygroundCard } from '@/components/playground-card';
import { playground } from '@/data/metadata';
import { AvatarStack } from '@/playground/avatar-stack/avatar-stack';
import { TextShimmer } from '@/playground/text-shimmer/text-shimmer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: playground.title,
  description: playground.description,
};

export default function Playground() {
  return (
    <Container>
      <Intro title="Playground">
        A laboratory of UI experiments, crafted with code.
      </Intro>
      <div className="gap-5 space-y-5 md:columns-2">
        <PlaygroundCard title="Avatar Stack" date="May 2025">
          <AvatarStack />
        </PlaygroundCard>
        <PlaygroundCard title="Text Shimmer" date="May 2025">
          <TextShimmer>Generating code</TextShimmer>
        </PlaygroundCard>
      </div>
    </Container>
  );
}
