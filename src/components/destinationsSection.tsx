'use client';

import { useMemo, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '@/db';
import DestinationCardStrip from '@/components/destinationCardStrip';
import DestinationListStrip from '@/components/destinationListStrip';

const DEFAULT_ROUTE_ID = 1;

const DESTINATION_STRIP_HEIGHT_CLASS = 'h-[300px]';

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

  const safeActive = Math.min(activeIndex, Math.max(0, sorted.length - 1));

  if (rows === undefined) {
    const loadingShell =
      variant === 'list'
        ? `flex min-h-0 w-full min-w-0 flex-col items-center justify-center overflow-hidden rounded-2xl bg-white p-4 ${DESTINATION_STRIP_HEIGHT_CLASS}`
        : `flex w-full shrink-0 items-center justify-center ${DESTINATION_STRIP_HEIGHT_CLASS}`;
    return (
      <div className={loadingShell}>
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
      <div
        className={`flex min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white p-4 ${DESTINATION_STRIP_HEIGHT_CLASS}`}
      >
        <DestinationListStrip
          sorted={sorted}
          activeIndex={safeActive}
          onActiveChange={setActiveIndex}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-0 w-full shrink-0 ${DESTINATION_STRIP_HEIGHT_CLASS}`}>
      <DestinationCardStrip
        sorted={sorted}
        activeIndex={safeActive}
        onActiveChange={setActiveIndex}
      />
    </div>
  );
}

export default DestinationSection;
