import '@/app/globals.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import Script from 'next/script';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="flex flex-col gap-5 bg-background-neutral-default text-foreground-neutral-default antialiased lg:flex-row lg:overscroll-none">
        <Header />
        <Footer />
        <Sidebar />
        <main className="flex flex-grow px-5 py-10">{children}</main>
      </body>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="49a480db-8f0e-4ed8-ac4e-3fd0036c097e"
      />
    </html>
  );
}
