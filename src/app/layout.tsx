import React from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Providers } from '@/providers';
import type { Metadata } from 'next';
import '../styles/globals.css';
import Head from 'next/head';

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <body>
        <Providers>
          <main className="flex w-full flex-col items-center bg-background-primary">{children}</main>
          <ReactQueryDevtools initialIsOpen={false} />
        </Providers>
      </body>
    </html>
  );
}
