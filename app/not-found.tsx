import { Container } from '@/components/container';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container className="min-h-[calc(100vh-var(--size-height-footer))] items-center justify-center lg:h-auto">
      <div className="flex flex-col items-center gap-5">
        <div className="grid gap-2 text-center">
          <h1 className="text-title-large-strong">404</h1>
          <p className="text-foreground-neutral-subtle">
            This page is just as lost as you are.
          </p>
        </div>
        <Link
          href="/"
          className="rounded-lg border border-border-neutral-subtle px-3 py-2 text-body-medium-subtle transition hover:bg-background-neutral-faded"
        >
          Go to Home
        </Link>
      </div>
    </Container>
  );
}
