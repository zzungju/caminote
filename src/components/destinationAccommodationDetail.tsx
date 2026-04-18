'use client';

import type { ReactNode } from 'react';

import CaretDownIcon from '@/assets/icons/Caret_Down_MD.svg?react';
import type { Accommodation } from '@/db';

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

export type DestinationAccommodationDetailProps = {
  item: Accommodation;
  onBack: () => void;
};

const DAY_LABEL: Record<string, string> = {
  MON: '월',
  TUE: '화',
  WED: '수',
  THU: '목',
  FRI: '금',
  SAT: '토',
  SUN: '일',
};

export default function DestinationAccommodationDetail({
  item,
  onBack,
}: DestinationAccommodationDetailProps) {
  const period =
    item.operatingPeriod?.length > 0
      ? item.operatingPeriod.map((d) => DAY_LABEL[d] ?? d).join(', ')
      : null;
  const hours =
    item.openTime || item.closeTime
      ? [item.openTime, item.closeTime].filter(Boolean).join(' ~ ')
      : null;

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

        <div className="grid grid-cols-2 gap-4">
          <Block label="가격">
            <span className="tabular-nums">€ {item.price}</span>
          </Block>
          <Block label="침대">
            <span className="tabular-nums">{item.bedCounts}</span>
          </Block>
        </div>

        {hours ? <Block label="입실 · 퇴실">{hours}</Block> : null}
        {period ? <Block label="운영 요일">{period}</Block> : null}

        {item.contactNumber ? (
          <Block label="연락처">{item.contactNumber}</Block>
        ) : null}
        {item.mail ? <Block label="메일">{item.mail}</Block> : null}

        {item.information_ko ? (
          <div className="flex flex-col gap-1">
            <Label>안내</Label>
            <p className="whitespace-pre-wrap text-16 text-500 leading-normal text-primary-500">
              {item.information_ko}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
