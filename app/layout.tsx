export const revalidate = 60;

import '@/app/globals.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Metadata } from 'next';
import Script from 'next/script';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Gonçalo Dias – Software Designer',
  description: 'Making the world a better place, 1px at a time.',
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background-neutral-default text-foreground-neutral-default flex flex-col antialiased lg:flex-row lg:overscroll-none">
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
