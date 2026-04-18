'use client';

import CaretDownIcon from '@/assets/icons/Caret_Down_MD.svg?react';
import type { TouristSpot } from '@/db';

function RowChevron() {
  return (
    <div className="flex size-6 shrink-0 items-center justify-center" aria-hidden>
      <CaretDownIcon className="size-6 -rotate-90 text-primary-500" />
    </div>
  );
}

type DestinationDetailTouristListProps = {
  items: TouristSpot[] | undefined;
  onSelectRow?: (id: number) => void;
};

/** 숙박 테이블과 같은 리듬 — 관광지명만, 위치 열 없음 */
export default function DestinationDetailTouristList({
  items,
  onSelectRow,
}: DestinationDetailTouristListProps) {
  if (items === undefined) {
    return (
      <p className="py-4 text-16 text-500 text-primary-500">관광지 정보를 불러오는 중…</p>
    );
  }

  if (items.length === 0) {
    return (
      <p className="py-4 text-16 text-500 text-primary-500">
        등록된 관광지가 없습니다.
      </p>
    );
  }

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div className="grid grid-cols-[minmax(0,1fr)_24px] items-center gap-x-3 border-b border-primary-500 bg-primary-500 px-4 py-3 text-white">
        <span className="text-16 text-600">관광지명</span>
        <span className="size-6 shrink-0" aria-hidden />
      </div>
      {items.map((s) => {
        const key = s.id ?? `${s.name_ko}-${s.destinationId}`;
        const rowClass =
          'grid w-full grid-cols-[minmax(0,1fr)_24px] items-center gap-x-3 border-b border-gray-100 bg-white px-4 py-3 text-left';
        const interactive =
          onSelectRow && typeof s.id === 'number'
            ? 'cursor-pointer transition-colors hover:bg-gray-50 active:bg-gray-100'
            : '';

        if (onSelectRow && typeof s.id === 'number') {
          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelectRow(s.id!)}
              className={`${rowClass} ${interactive}`}
            >
              <p className="min-w-0 truncate text-16 text-500 text-primary-500">{s.name_ko}</p>
              <RowChevron />
            </button>
          );
        }

        return (
          <div key={key} className={rowClass}>
            <p className="min-w-0 truncate text-16 text-500 text-primary-500">{s.name_ko}</p>
            <RowChevron />
          </div>
        );
      })}
    </div>
  );
}
