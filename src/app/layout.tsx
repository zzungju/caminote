import type { Metadata, Viewport } from 'next';

import './globals.css';

import RootLayoutClient from './RootLayoutClient';

function resolveMetadataBase(): URL {
  const site = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (site) {
    try {
      return new URL(site.endsWith('/') ? site : `${site}/`);
    } catch {
      /* fall through */
    }
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}/`);
  }
  return new URL('http://localhost:3000/');
}

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  applicationName: 'Santiago Way',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'Santiago Way',
    statusBarStyle: 'default',
  },
};

export const viewport: Viewport = {
  themeColor: '#056bda',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
