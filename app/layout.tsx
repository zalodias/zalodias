export const revalidate = 60;

import '@/app/globals.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { home } from '@/data/metadata';
import { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { PropsWithChildren } from 'react';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background-neutral-default text-foreground-neutral-default flex min-h-dvh flex-col antialiased lg:flex-row lg:overscroll-none">
        <Header />
        <Footer />
        <Sidebar />
        {children}
      </body>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="49a480db-8f0e-4ed8-ac4e-3fd0036c097e"
      />
    </html>
  );
}
