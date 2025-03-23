import { Scene } from '@/assets/shaders/turbulence/scene';
import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Playground() {
  return (
    <Container>
      <Intro title="Playground">
        A laboratory of digital experiments. Crafting and tinkering with code.
      </Intro>
      <div className="grid gap-10 md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
        <div className='relative aspect-[4/3] bg-background-neutral-faded border border-border-neutral-faded rounded-lg overflow-hidden isolate after:absolute after:inset-x-0 after:bg-gradient-to-t after:from-background-neutral-default after:to-transparent after:h-1/4 after:bottom-0'>
          <Scene /> 
          <div className='absolute flex z-20 justify-between inset-x-4 bottom-4'>
            <span className='text-body-medium-subtle'>Turbulence Shader</span>
            <span className='text-body-medium-subtle text-foreground-neutral-subtle'>March 2025</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
