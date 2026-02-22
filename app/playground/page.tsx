import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { PlaygroundCard } from '@/components/playground-card';
import { playground as meta } from '@/data/metadata';
import { AvatarStack } from '@/playground/avatar-stack/avatar-stack';
import { BorderTrail } from '@/playground/border-trail';
import { DirectionalHover } from '@/playground/directional-hover';
import { HoldDelete } from '@/playground/hold-delete';
import { TextScramble } from '@/playground/text-scramble';
import { TextShimmer } from '@/playground/text-shimmer';
import { TextStreaming } from '@/playground/text-streaming';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function Playground() {
  return (
    <Container>
      <Intro title={meta.title}>{meta.description}</Intro>
      <div className="gap-5 space-y-5 md:columns-2">
        <PlaygroundCard title="Avatar Stack">
          <AvatarStack />
        </PlaygroundCard>
        <PlaygroundCard title="Text Shimmer">
          <TextShimmer />
        </PlaygroundCard>
        <PlaygroundCard title="Hold to Delete">
          <HoldDelete />
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
