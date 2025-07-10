import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { PlaygroundCard } from '@/components/playground-card';
import { playground } from '@/data/metadata';
import { AvatarStack } from '@/playground/avatar-stack/avatar-stack';
import { DeleteButton } from '@/playground/delete-button';
import { RichTextToolbar } from '@/playground/rich-text-toolbar';
import { TextScramble } from '@/playground/text-scramble';
import { TextShimmer } from '@/playground/text-shimmer';
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
        <PlaygroundCard title="Delete Button" date="May 2025">
          <DeleteButton />
        </PlaygroundCard>
        <PlaygroundCard title="Text Scramble" date="May 2025">
          <TextScramble />
        </PlaygroundCard>
        <PlaygroundCard title="Rich Text Toolbar" date="July 2025">
          <RichTextToolbar />
        </PlaygroundCard>
      </div>
    </Container>
  );
}
