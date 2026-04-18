'use client';

import { useState } from 'react';

import ArrowCaretDownIcon from '@/assets/icons/Caret_Down_MD.svg?react';
import EditListIcon from '@/assets/icons/List_Unordered.svg?react';
import EditCardListIcon from '@/assets/icons/Cards.svg?react';

import DestinationSection from '@/components/destinationsSection';
import RouteMap from '@/components/routeMap';

export default function Home() {

  const [showCardList, setShowCardList] = useState(true);

  const handleShowCardList = () => {
    setShowCardList(!showCardList);
  };

  return (
    <div>
      <main className="flex max-h-[calc(100dvh-env(safe-area-inset-top,0px)-3.75rem)] min-h-0 w-full flex-col gap-6 overflow-y-auto px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px)+1.25rem)] pt-2">
        <div className="flex items-center gap-1">
          <h1 className="text-24 text-800 text-gray-900">프랑스 길</h1>
          <ArrowCaretDownIcon className="size-6 shrink-0" aria-hidden />
        </div>

        <section aria-label="전체 지도">
          <h2 className="text-20 text-600 text-gray-900">전체 지도</h2>
          <div className="relative mt-3 h-60 overflow-hidden rounded-xl bg-primary-50">
            <RouteMap />
          </div>
        </section>

        <section aria-label="주요 목적지" className="flex min-h-0 w-full flex-col gap-3">
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
