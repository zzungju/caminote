'use client';

import { useCallback, useRef } from 'react';

export type DestinationCardNavProps = {
  count: number;
  activeIndex: number;
  onActiveChange: (index: number) => void;
};

export default function DestinationCardNav({
  count,
  activeIndex,
  onActiveChange,
}: DestinationCardNavProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback(
    (clientX: number) => {
      const el = trackRef.current;
      if (!el || count <= 1) return;
      const rect = el.getBoundingClientRect();
      const r = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      const idx = Math.round(r * (count - 1));
      onActiveChange(idx);
    },
    [count, onActiveChange],
  );

  if (count <= 1) return null;

  const pct = (activeIndex / (count - 1)) * 100;

  return (
    <div className="mx-1 w-full py-1">
      <div className="relative h-4 w-full">
        <div
          ref={trackRef}
          role="slider"
          aria-valuemin={1}
          aria-valuemax={count}
          aria-valuenow={activeIndex + 1}
          tabIndex={0}
          className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 cursor-pointer touch-none rounded-full bg-gray-200 select-none"
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            setFromClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
            setFromClientX(e.clientX);
          }}
          onPointerUp={(e) => {
            if (e.currentTarget.hasPointerCapture(e.pointerId)) {
              e.currentTarget.releasePointerCapture(e.pointerId);
            }
          }}
          onPointerCancel={(e) => {
            if (e.currentTarget.hasPointerCapture(e.pointerId)) {
              e.currentTarget.releasePointerCapture(e.pointerId);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              onActiveChange(Math.max(0, activeIndex - 1));
            } else if (e.key === 'ArrowRight') {
              e.preventDefault();
              onActiveChange(Math.min(count - 1, activeIndex + 1));
            }
          }}
        />
        <div
          className="pointer-events-none absolute top-1/2 left-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500 shadow-sm ring-2 ring-white"
          style={{ left: `${pct}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
