'use client';

import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db';

export default function Home() {
  const routes = useLiveQuery(() => db.routes.toArray());

  if (!routes) return <div>정보 불러오는 중</div>;
  return (
    <div>
      <h1>Buen Camino!</h1>
    </div>
  );
}
