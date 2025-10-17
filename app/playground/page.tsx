import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { PlaygroundCard } from '@/components/playground-card';
import { playground } from '@/data/metadata';
import { AvatarStack } from '@/playground/avatar-stack/avatar-stack';
import { BorderTrail } from '@/playground/border-trail';
import { DeleteButton } from '@/playground/delete-button';
import { DirectionalHover } from '@/playground/directional-hover';
import { TextScramble } from '@/playground/text-scramble';
import { TextShimmer } from '@/playground/text-shimmer';
import { TextStreaming } from '@/playground/text-streaming';
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
        <PlaygroundCard title="Avatar Stack">
          <AvatarStack />
        </PlaygroundCard>
        <PlaygroundCard title="Text Shimmer">
          <TextShimmer />
        </PlaygroundCard>
        <PlaygroundCard title="Delete Button">
          <DeleteButton />
        </PlaygroundCard>
        <PlaygroundCard title="Text Scramble" restart>
          <TextScramble />
        </PlaygroundCard>
        <PlaygroundCard title="Directional Hover">
          <DirectionalHover />
        </PlaygroundCard>
        <PlaygroundCard title="Text Streaming" restart>
          <TextStreaming />
        </PlaygroundCard>
        <PlaygroundCard title="Border Trail">
          <BorderTrail />
        </PlaygroundCard>
      </div>
    </Container>
  );
}
