'use client';

import type { ReactNode } from 'react';

import CaretDownIcon from '@/assets/icons/Caret_Down_MD.svg?react';
import type { TouristSpot } from '@/db';

function Label({ children }: { children: ReactNode }) {
  return <p className="text-14 text-600 text-gray-600">{children}</p>;
}

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <Label>{label}</Label>
      <div className="text-16 text-500 leading-normal text-primary-500">{children}</div>
    </div>
  );
}

export type DestinationTouristSpotDetailProps = {
  item: TouristSpot;
  onBack: () => void;
};

export default function DestinationTouristSpotDetail({
  item,
  onBack,
}: DestinationTouristSpotDetailProps) {
  return (
    <div className="w-full min-w-0">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 flex items-center gap-1 text-16 text-600 text-primary-500 outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
      >
        <CaretDownIcon className="size-6 rotate-90 shrink-0" aria-hidden />
        <span>목록</span>
      </button>

      <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4">
        <div>
          <h3 className="text-20 text-600 leading-snug text-primary-500">{item.name_ko}</h3>
          <p className="mt-1 text-14 text-500 leading-snug text-primary-500">{item.name_en}</p>
        </div>

        <Block label="위치">{item.location}</Block>

        {item.description_ko ? (
          <div className="flex flex-col gap-1">
            <Label>소개</Label>
            <p className="whitespace-pre-wrap text-16 text-500 leading-normal text-primary-500">
              {item.description_ko}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
