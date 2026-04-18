'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '@/db';
import DestinationCardStrip from '@/components/destinationCardStrip';
import DestinationListStrip from '@/components/destinationListStrip';

const DEFAULT_ROUTE_ID = 1;

export type DestinationSectionProps = {
  variant: 'card' | 'list';
  routeId?: number;
};

function DestinationSection({
  variant,
  routeId = DEFAULT_ROUTE_ID,
}: DestinationSectionProps) {
  const rows = useLiveQuery(
    () => db.destinations.where('routeId').equals(routeId).toArray(),
    [routeId],
  );

  const sorted = useMemo(() => {
    if (!rows?.length) return [];
    return [...rows].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
  }, [rows]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sorted.length === 0) return;
    setActiveIndex((i) => Math.min(i, sorted.length - 1));
  }, [sorted.length]);

  const safeActive = Math.min(activeIndex, Math.max(0, sorted.length - 1));

  if (rows === undefined) {
    return (
      <div className="flex w-full flex-col gap-2 py-2">
        <p className="text-14 text-600 text-gray-500">목적지를 불러오는 중…</p>
      </div>
    );
  }

  if (sorted.length === 0) {
    return (
      <div className="flex w-full flex-col gap-2">
        <p className="text-14 text-600 text-gray-500">이 길에 등록된 목적지가 없습니다.</p>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl bg-white p-4">
        <DestinationListStrip
          sorted={sorted}
          activeIndex={safeActive}
          onActiveChange={setActiveIndex}
        />
      </div>
    );
  }

  return (
    <DestinationCardStrip
      sorted={sorted}
      activeIndex={safeActive}
      onActiveChange={setActiveIndex}
    />
  );
}

export default DestinationSection;
