'use client';

import { useEffect } from 'react';

import BottomNav from '@/components/bottomNav';
import TopNav from '@/components/topNav';
import { initializeDB } from '@/db';

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeDB();
  }, []);

  return (
    <>
      <TopNav />
      {children}
      <BottomNav />
    </>
  );
}
