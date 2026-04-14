'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '@/db';
import DestinationCard from '@/components/destinationCard';
import DestinationList from '@/components/destinationList';

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
      <div className="flex w-full flex-col gap-2 py-2">
        <p className="text-14 text-600 text-gray-500">이 길에 등록된 목적지가 없습니다.</p>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className="-mx-1 flex max-h-[min(60vh,420px)] flex-col gap-3 overflow-y-auto pb-1 pt-1 [scrollbar-width:thin]">
        {sorted.map((destination, i) => (
          <DestinationList
            key={destination.id ?? i}
            destination={destination}
            orderLabel={String(i + 1)}
            active={i === safeActive}
            onSelect={() => setActiveIndex(i)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="-mx-1 flex gap-3 overflow-x-auto pb-1 pt-1 [scrollbar-width:thin]">
      {sorted.map((destination, i) => (
        <DestinationCard
          key={destination.id ?? i}
          destination={destination}
          orderLabel={String(i + 1)}
          active={i === safeActive}
          onSelect={() => setActiveIndex(i)}
        />
      ))}
    </div>
  );
}

export default DestinationSection;
