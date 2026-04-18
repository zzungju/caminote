'use client';

import { useCallback, useEffect, useRef } from 'react';

import type { Destination } from '@/db';
import DestinationList from '@/components/destinationList';
import { DestinationListNavSegment } from '@/components/destinationListNav';

export type DestinationListStripProps = {
  sorted: Destination[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
};

/** 스크롤 컨테이너의 세로 중앙에 어떤 슬롯이 걸리는지 기준으로 활성 인덱스 계산 */
function resolveActiveIndexFromScroll(container: HTMLDivElement): number {
  const slots = container.querySelectorAll<HTMLElement>('[data-list-slot]');
  const n = slots.length;
  if (n === 0) return 0;

  const { scrollTop, clientHeight, scrollHeight } = container;

  if (scrollTop <= 1) {
    return 0;
  }
  if (scrollTop + clientHeight >= scrollHeight - 1) {
    return n - 1;
  }

  const rect = container.getBoundingClientRect();
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < n; i++) {
    const r = slots[i].getBoundingClientRect();
    if (centerY >= r.top && centerY <= r.bottom) {
      return i;
    }
  }

  let best = 0;
  let bestDist = Infinity;
  for (let i = 0; i < n; i++) {
    const r = slots[i].getBoundingClientRect();
    const mid = r.top + r.height / 2;
    const d = Math.abs(mid - centerY);
    if (d < bestDist - 0.5) {
      bestDist = d;
      best = i;
    } else if (Math.abs(d - bestDist) <= 0.5 && i < best) {
      best = i;
    }
  }
  return best;
}

export default function DestinationListStrip({
  sorted,
  activeIndex,
  onActiveChange,
}: DestinationListStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ignoreScrollRef = useRef(false);
  const n = sorted.length;

  const scrollItemIntoView = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const slots = container.querySelectorAll<HTMLElement>('[data-list-slot]');
    const slot = slots[index];
    if (!slot) return;
    ignoreScrollRef.current = true;
    slot.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    window.setTimeout(() => {
      ignoreScrollRef.current = false;
    }, 450);
  }, []);

  const handleDotSelect = useCallback(
    (i: number) => {
      onActiveChange(i);
      requestAnimationFrame(() => scrollItemIntoView(i));
    },
    [onActiveChange, scrollItemIntoView],
  );

  const handleListSelect = useCallback(
    (i: number) => {
      onActiveChange(i);
      requestAnimationFrame(() => scrollItemIntoView(i));
    },
    [onActiveChange, scrollItemIntoView],
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || n === 0) return;

    const onScroll = () => {
      if (ignoreScrollRef.current) return;
      onActiveChange(resolveActiveIndexFromScroll(el));
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, [n, onActiveChange]);

  return (
    <div
      ref={scrollRef}
      className="scrollbar-hide pb-bottom-nav-safe flex max-h-[min(calc(100dvh-15.5rem-6rem-env(safe-area-inset-bottom,0px)),400px)] min-h-0 min-w-0 w-full flex-col gap-2 overflow-y-auto"
    >
      {sorted.map((destination, i) => (
        <div
          key={destination.id ?? i}
          className="flex min-w-0 gap-2"
          data-list-slot
        >
          <DestinationListNavSegment
            index={i}
            total={n}
            isActive={i === activeIndex}
            onSelect={() => handleDotSelect(i)}
          />
          <DestinationList
            destination={destination}
            orderLabel={String(i + 1)}
            active={i === activeIndex}
            onSelect={() => handleListSelect(i)}
          />
        </div>
      ))}
    </div>
  );
}
