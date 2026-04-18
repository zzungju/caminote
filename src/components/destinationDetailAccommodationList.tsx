'use client';

import CaretDownIcon from '@/assets/icons/Caret_Down_MD.svg?react';
import type { Accommodation } from '@/db';

function RowChevron() {
  return (
    <div className="flex size-6 shrink-0 items-center justify-center" aria-hidden>
      <CaretDownIcon className="size-6 -rotate-90 text-primary-500" />
    </div>
  );
}

type DestinationDetailAccommodationListProps = {
  items: Accommodation[] | undefined;
  /** 행 클릭 시 상세로 — 리스트 영역만 전환 */
  onSelectRow?: (id: number) => void;
};

export default function DestinationDetailAccommodationList({
  items,
  onSelectRow,
}: DestinationDetailAccommodationListProps) {
  if (items === undefined) {
    return (
      <p className="py-4 text-16 text-500 text-primary-500">숙소 정보를 불러오는 중…</p>
    );
  }

  if (items.length === 0) {
    return (
      <p className="py-4 text-16 text-500 text-primary-500">등록된 숙소가 없습니다.</p>
    );
  }

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(3.5rem,auto)_minmax(3rem,auto)_24px] items-center gap-x-3 border-b border-primary-500 bg-primary-500 px-4 py-3 text-white">
        <span className="text-16 text-600">숙소명</span>
        <span className="text-right text-16 text-600">가격</span>
        <span className="text-right text-16 text-600">침대</span>
        <span className="size-6 shrink-0 justify-self-end" aria-hidden />
      </div>
      {items.map((a) => {
        const key = a.id ?? `${a.name_ko}-${a.destinationId}`;
        const rowClass =
          'grid w-full grid-cols-[minmax(0,1fr)_minmax(3.5rem,auto)_minmax(3rem,auto)_24px] items-center gap-x-3 border-b border-gray-100 bg-white px-4 py-3 text-left';
        const interactive =
          onSelectRow && typeof a.id === 'number'
            ? 'cursor-pointer transition-colors hover:bg-gray-50 active:bg-gray-100'
            : '';

        if (onSelectRow && typeof a.id === 'number') {
          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelectRow(a.id!)}
              className={`${rowClass} ${interactive}`}
            >
              <p className="min-w-0 truncate text-16 text-500 text-primary-500">{a.name_ko}</p>
              <p className="text-right text-16 text-500 text-primary-500 tabular-nums">
                € {a.price}
              </p>
              <p className="text-right text-16 text-500 text-primary-500 tabular-nums">
                {a.bedCounts}
              </p>
              <div className="justify-self-end">
                <RowChevron />
              </div>
            </button>
          );
        }

        return (
          <div key={key} className={rowClass}>
            <p className="min-w-0 truncate text-16 text-500 text-primary-500">{a.name_ko}</p>
            <p className="text-right text-16 text-500 text-primary-500 tabular-nums">
              € {a.price}
            </p>
            <p className="text-right text-16 text-500 text-primary-500 tabular-nums">
              {a.bedCounts}
            </p>
            <div className="justify-self-end">
              <RowChevron />
            </div>
          </div>
        );
      })}
    </div>
  );
}
