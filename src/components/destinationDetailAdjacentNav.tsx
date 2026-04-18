'use client';

import Image from 'next/image';
import Link from 'next/link';

import arrowEmpty from '@/assets/images/Arrow_Empty.png';
import arrowFull from '@/assets/images/Arrow_Full.png';

export type DestinationDetailAdjacentNavProps = {
  prevId?: number | null;
  nextId?: number | null;
};

const arrowClass =
  'h-8 w-auto max-w-[40px] object-contain object-center select-none';

/** 목적지 상세 하단 고정 — 바텀 네비(z-50) 바로 위, 본문 스크롤 위에 겹침 */
const barClass =
  'pointer-events-none fixed inset-x-0 bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] z-[45] flex items-center justify-between px-6 py-2';

const hitClass =
  'pointer-events-auto inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 active:opacity-70';

export default function DestinationDetailAdjacentNav({
  prevId,
  nextId,
}: DestinationDetailAdjacentNavProps) {
  const hasPrev = typeof prevId === 'number' && prevId >= 1;
  const hasNext = typeof nextId === 'number' && nextId >= 1;

  return (
    <nav className={barClass} aria-label="이전·다음 목적지">
      {hasPrev ? (
        <Link
          href={`/destination/${prevId}`}
          className={hitClass}
          aria-label="이전 목적지"
        >
          <Image
            src={arrowFull}
            alt=""
            width={40}
            height={24}
            className={`${arrowClass} -scale-x-100`}
            draggable={false}
          />
        </Link>
      ) : (
        <span className={`${hitClass} cursor-default opacity-60`} aria-hidden>
          <Image
            src={arrowEmpty}
            alt=""
            width={40}
            height={24}
            className={`${arrowClass} -scale-x-100`}
            draggable={false}
          />
        </span>
      )}

      {hasNext ? (
        <Link
          href={`/destination/${nextId}`}
          className={hitClass}
          aria-label="다음 목적지"
        >
          <Image
            src={arrowFull}
            alt=""
            width={40}
            height={24}
            className={arrowClass}
            draggable={false}
          />
        </Link>
      ) : (
        <span className={`${hitClass} cursor-default opacity-60`} aria-hidden>
          <Image
            src={arrowEmpty}
            alt=""
            width={40}
            height={24}
            className={arrowClass}
            draggable={false}
          />
        </span>
      )}
    </nav>
  );
}
