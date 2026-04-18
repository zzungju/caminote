'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import ArrowCaretDownIcon from '@/assets/icons/Caret_Down_MD.svg?react';
import EditListIcon from '@/assets/icons/List_Unordered.svg?react';
import EditCardListIcon from '@/assets/icons/Cards.svg?react';

import DestinationSection from '@/components/destinationsSection';

const RouteMap = dynamic(() => import('@/components/routeMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-[120px] w-full animate-pulse rounded-xl bg-primary-100" aria-hidden />
  ),
});

export default function Home() {

  const [showCardList, setShowCardList] = useState(true);

  const handleShowCardList = () => {
    setShowCardList(!showCardList);
  };

  return (
    <div className="w-full min-w-0">
      <main className="flex h-[calc(100dvh-env(safe-area-inset-top,0px)-3.75rem-5.5rem-env(safe-area-inset-bottom,0px))] min-h-0 w-full max-w-none flex-col gap-6 overflow-hidden px-4 pt-2">
        <div className="shrink-0">
          <div className="flex items-center gap-1">
            <h1 className="text-24 text-800 text-gray-900">프랑스 길</h1>
            <ArrowCaretDownIcon className="size-6 shrink-0" aria-hidden />
          </div>
        </div>

        <section
          aria-label="전체 지도"
          className="flex min-h-0 min-w-0 flex-1 flex-col gap-3"
        >
          <h2 className="shrink-0 text-20 text-600 text-gray-900">전체 지도</h2>
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl bg-primary-50">
            <RouteMap />
          </div>
        </section>

        <section
          aria-label="주요 목적지"
          className="flex w-full min-w-0 shrink-0 flex-col gap-3"
        >
          <div className="flex shrink-0 items-center justify-between">
            <h2 className="text-20 text-600 text-gray-900">주요 목적지</h2>
            <button type="button" onClick={handleShowCardList}>
              {showCardList ? (
                <EditListIcon className="size-6 shrink-0 text-gray-900" aria-hidden />
              ) : (
                <EditCardListIcon className="size-6 shrink-0 text-gray-900" aria-hidden />
              )}
            </button>
          </div>
          <div className="min-h-0 min-w-0 w-full">
            <DestinationSection variant={showCardList ? 'card' : 'list'} routeId={1} />
          </div>
        </section>
      </main>
    </div>
  );
}
