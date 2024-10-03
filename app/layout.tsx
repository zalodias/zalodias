import '@/app/globals.css';
import { Navigation } from '@/components/navigation';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="flex gap-5 overscroll-none bg-background-neutral-default text-foreground-neutral-default antialiased">
        <Navigation />
        <main className="flex flex-grow px-5 py-10">{children}</main>
      </body>
    </html>
  );
}
