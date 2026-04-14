import Image from 'next/image';

import arrowEmpty from '@/assets/images/Arrow_Empty.png';
import arrowFull from '@/assets/images/Arrow_Full.png';
import type { Destination } from '@/db/index';

type DestinationListProps = {
  destination: Destination;
  orderLabel: string;
  active: boolean;
  onSelect: () => void;
};

function DestinationList({
  destination,
  orderLabel,
  active,
  onSelect,
}: DestinationListProps) {
  const activeCls = active ? 'text-white' : 'text-primary-500';

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`relative flex h-[123px] w-[255px] shrink-0 cursor-pointer flex-col rounded-xl border p-4 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 ${
        active
          ? 'border-transparent bg-primary-500 text-white'
          : 'border-gray-100 bg-white text-primary-500'
      }`}
    >
      <div className="flex min-h-0 flex-1 flex-col justify-between">
        <div className="relative min-w-0 pr-10">
          <div className="flex flex-col gap-1">
            <p className={`text-16 text-600 leading-snug break-keep ${activeCls}`}>
              {destination.name_ko}
            </p>
            <p className={`text-12 text-700 leading-snug break-keep ${activeCls}`}>
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
    </article>
  );
}

export default DestinationList;
