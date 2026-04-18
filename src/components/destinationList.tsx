import Image from 'next/image';
import Link from 'next/link';

import arrowEmpty from '@/assets/images/Arrow_Empty.png';
import arrowFull from '@/assets/images/Arrow_Full.png';
import type { Destination } from '@/db/index';

type DestinationListProps = {
  destination: Destination;
  orderLabel: string;
  active: boolean;
  detailHref: string;
};

/** 리스트 뷰 카드 — 주요 목적지(Figma 99-577) 기준 전체 너비·라운드 패널 안에서 사용 */
function DestinationList({
  destination,
  orderLabel,
  active,
  detailHref,
}: DestinationListProps) {
  const activeCls = active ? 'text-white' : 'text-primary-500';

  return (
    <Link
      href={detailHref}
      className={`relative flex min-h-[123px] w-full min-w-0 max-w-full cursor-pointer flex-col rounded-xl border p-4 outline-none transition-[box-shadow,colors,background-color,border-color] focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 ${
        active
          ? 'border-transparent bg-primary-500 text-white shadow-md'
          : 'border-gray-200 bg-white text-primary-500 shadow-[0_1px_2px_0_rgb(0_0_0/0.05)]'
      }`}
    >
      <div className="flex min-h-0 flex-1 flex-col justify-between">
        <div className="relative min-w-0 pr-10">
          <div className="flex flex-col gap-1">
            <p className={`text-16 text-600 leading-snug break-keep ${activeCls}`}>
              {destination.name_ko}
            </p>
            <p
              lang="en"
              className={`text-12 text-700 leading-snug break-words [overflow-wrap:anywhere] ${activeCls}`}
            >
              {destination.name_en}
            </p>
          </div>
          <p
            className={`absolute right-0 top-0 text-right text-20 text-700 leading-none ${activeCls}`}
          >
            {orderLabel}
          </p>
        </div>

        <div className="flex w-full min-w-0 items-end justify-between gap-2">
          <p className={`text-12 text-300 leading-none ${activeCls} shrink-0`}>
            {destination.distance} km
          </p>
          <div
            className="relative isolate h-10 w-6 shrink-0 overflow-hidden"
            aria-hidden
          >
            <Image
              src={active ? arrowFull : arrowEmpty}
              alt=""
              width={40}
              height={24}
              draggable={false}
              className="absolute left-1/2 top-1/2 h-6 w-auto max-w-[40px] -translate-x-1/2 -translate-y-1/2 rotate-90 object-contain"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DestinationList;
