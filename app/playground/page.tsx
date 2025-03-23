import { Scene } from '@/assets/shaders/scene';
import { Container } from '@/components/container';
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
      <Scene />
    </Container>
  );
}
