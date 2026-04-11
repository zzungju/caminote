'use client';

import { useEffect } from 'react';
import { initializeDB } from '@/db';
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeDB();
  }, []);

  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}