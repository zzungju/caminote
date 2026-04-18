import type { Metadata, Viewport } from 'next';

import './globals.css';

import RootLayoutClient from './RootLayoutClient';

export const metadata: Metadata = {
  applicationName: 'Santiago Way',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'Santiago Way',
  },
  icons: {
    icon: [{ url: '/logo.png', sizes: '512x512', type: 'image/png' }],
    apple: '/logo.png',
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
