import Image from 'next/image';
import Link from 'next/link';

import arrowFull from '@/assets/images/Arrow_Full.png';
import arrowEmpty from '@/assets/images/Arrow_Empty.png';
import { Destination } from '@/db/index';

function DestinationCard({
    destination,
    orderLabel,
    active,
    detailHref,
  }: {
    destination: Destination;
    orderLabel: string;
    active: boolean;
    detailHref: string;
  }) {
    const activeCls = active ? 'text-white' : 'text-primary-500';
  
    return (
      <Link
        href={detailHref}
        className={`relative flex h-[252px] w-[154px] min-w-0 shrink-0 snap-start cursor-pointer flex-col rounded-xl border p-4 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 ${
          active
            ? 'border-transparent bg-primary-500 text-white'
            : 'border-gray-100 bg-white text-primary-500'
        }`}
      >
        <p
          className={`absolute right-4 top-4 text-right text-20 text-700 leading-none ${activeCls}`}
        >
          {orderLabel}
        </p>
        <div className="mt-10 flex min-w-0 w-full flex-col gap-1 pr-6">
          <p className={`min-w-0 text-16 text-600 leading-snug break-keep ${activeCls}`}>{destination.name_ko}</p>
          <p
            lang="en"
            className={`min-w-0 text-12 text-700 leading-snug break-words [overflow-wrap:anywhere] ${activeCls}`}
          >
            {destination.name_en}
          </p>
        </div>
        <div
          className="mt-auto h-[46px] w-full flex items-center justify-center"
          aria-hidden
        >
          {active ? (
            <Image src={arrowFull} alt="arrow" width={40} height={24} className="h-8 w-auto object-contain select-none" draggable={false} aria-hidden />
          ) : (
            <Image src={arrowEmpty} alt="arrow" width={40} height={24} className="h-8 w-auto object-contain select-none" draggable={false} aria-hidden />
          )}
        </div>
        <p className={`mt-4 text-12 text-300 leading-none ${activeCls}`}>{destination.distance} km</p>
      </Link>
    );
  }

  export default DestinationCard;
  