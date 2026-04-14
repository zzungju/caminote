'use client';

import { useState } from 'react';

import ArrowCaretDownIcon from '@/assets/icons/Caret_Down_MD.svg?react';
import EditListIcon from '@/assets/icons/List_Unordered.svg?react';
import EditCardListIcon from '@/assets/icons/Cards.svg?react';

import DestinationSection from '@/components/destinationsSection';

export default function Home() {

  const [showCardList, setShowCardList] = useState(true);

  const handleShowCardList = () => {
    setShowCardList(!showCardList);
  };

  return (
    <div>
      <main className="h-screen flex flex-1 flex-col gap-5 px-4 pb-28 pt-2">
      <div className="flex items-center gap-1">
          <h1 className="text-24 text-800 text-gray-900">프랑스 길</h1>
          <ArrowCaretDownIcon className="size-6 shrink-0" aria-hidden />
        </div>

        <section aria-label="전체 지도">
          <h2 className="text-20 text-600 text-gray-900">전체 지도</h2>
          <div className="relative mt-2 h-[183px] overflow-hidden rounded-xl bg-primary-50" />
        </section>

        <section aria-label="주요 목적지">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-20 text-600 text-gray-900">주요 목적지</h2>
            <button type="button" onClick={handleShowCardList}>
              {showCardList ? (
                <EditListIcon className="size-4 shrink-0 text-gray-900" aria-hidden />
              ) : (
                <EditCardListIcon className="size-4 shrink-0 text-gray-900" aria-hidden />
              )}
            </button>
          </div>
          <div className="-mx-1 pb-2 pt-1">
            <DestinationSection variant={showCardList ? 'card' : 'list'} routeId={1} />
          </div>
        </section>
      </main>
    </div>
  );
}
