'use client';

import { useEffect } from 'react';
import { initializeDB } from '@/db';
import "./globals.css";

import TopNav from '@/components/topNav';
import BottomNav from '@/components/bottomNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeDB();
  }, []);

  return (
    <html lang="ko">
      <TopNav />
      <body>{children}</body>
      <BottomNav />
    </html>
  );
}