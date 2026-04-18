'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';

import type { Destination } from '@/db';
import DestinationCard from '@/components/destinationCard';
import DestinationCardNav from '@/components/destinationCardNav';

export type DestinationCardStripProps = {
  sorted: Destination[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
};

function resolveActiveIndexFromHorizontalScroll(container: HTMLDivElement): number {
  const slots = container.querySelectorAll<HTMLElement>('[data-card-slot]');
  const n = slots.length;
  if (n === 0) return 0;

  const { scrollLeft, clientWidth, scrollWidth } = container;

  if (scrollLeft <= 1) {
    return 0;
  }
  if (scrollLeft + clientWidth >= scrollWidth - 1) {
    return n - 1;
  }

  const rect = container.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;

  for (let i = 0; i < n; i++) {
    const r = slots[i].getBoundingClientRect();
    if (centerX >= r.left && centerX <= r.right) {
      return i;
    }
  }

  let best = 0;
  let bestDist = Infinity;
  for (let i = 0; i < n; i++) {
    const r = slots[i].getBoundingClientRect();
    const mid = r.left + r.width / 2;
    const d = Math.abs(mid - centerX);
    if (d < bestDist - 0.5) {
      bestDist = d;
      best = i;
    } else if (Math.abs(d - bestDist) <= 0.5 && i < best) {
      best = i;
    }
  }
  return best;
}

export default function DestinationCardStrip({
  sorted,
  activeIndex,
  onActiveChange,
}: DestinationCardStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ignoreScrollRef = useRef(false);
  /** 스크롤로 active만 바뀐 경우, 아래 useLayoutEffect의 scrollTo는 생략 */
  const skipNextCenterScrollRef = useRef(false);
  const activeIndexRef = useRef(activeIndex);

  const n = sorted.length;

  useLayoutEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useLayoutEffect(() => {
    if (skipNextCenterScrollRef.current) {
      skipNextCenterScrollRef.current = false;
      return;
    }

    const container = scrollRef.current;
    if (!container || n === 0) return;
    const slot = slotRefs.current[activeIndex];
    if (!slot) return;

    ignoreScrollRef.current = true;

    if (activeIndex === 0) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      const inner = slot.firstElementChild as HTMLElement | null;
      const target = inner ?? slot;
      const centerOffset =
        target.offsetLeft + target.offsetWidth / 2 - container.clientWidth / 2;
      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
      container.scrollTo({
        left: Math.min(maxScroll, Math.max(0, centerOffset)),
        behavior: 'smooth',
      });
    }

    window.setTimeout(() => {
      ignoreScrollRef.current = false;
    }, 450);
  }, [activeIndex, n]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || n <= 1) return;

    const onScroll = () => {
      if (ignoreScrollRef.current) return;
      const next = resolveActiveIndexFromHorizontalScroll(el);
      if (next !== activeIndexRef.current) {
        skipNextCenterScrollRef.current = true;
        onActiveChange(next);
      }
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, [n, onActiveChange]);

  return (
    <div className="flex flex-col gap-2">
      <div
        ref={scrollRef}
        className="scrollbar-hide -mx-1 flex gap-3 overflow-x-auto pb-1 pt-1"
      >
        {sorted.map((destination, i) => (
          <div
            key={destination.id ?? i}
            data-card-slot
            ref={(el) => {
              slotRefs.current[i] = el;
            }}
            className="shrink-0"
          >
            <DestinationCard
              destination={destination}
              orderLabel={String(i + 1)}
              active={i === activeIndex}
              detailHref={`/destination/${destination.id ?? i + 1}`}
            />
          </div>
        ))}
      </div>
      <DestinationCardNav
        count={n}
        activeIndex={activeIndex}
        onActiveChange={onActiveChange}
      />
    </div>
  );
}
