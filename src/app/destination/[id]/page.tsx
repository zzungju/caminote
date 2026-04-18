'use client';

import { useLiveQuery } from 'dexie-react-hooks';
import dynamic from 'next/dynamic';
import { notFound, useParams } from 'next/navigation';
import { useMemo, useState } from 'react';

import DestinationAccommodationDetail from '@/components/destinationAccommodationDetail';
import DestinationDetailAccommodationList from '../../../components/destinationDetailAccommodationList';
import DestinationDetailTabNav, {
  type DestinationDetailTab,
} from '@/components/destinationDetailTabNav';
import DestinationDetailAdjacentNav from '@/components/destinationDetailAdjacentNav';
import DestinationDetailTouristList from '@/components/destinationDetailTouristList';
import DestinationTouristSpotDetail from '@/components/destinationTouristSpotDetail';
import type { Accommodation, Destination, TouristSpot } from '@/db';
import { db } from '@/db';

const DestinationSegmentMap = dynamic(
  () => import('@/components/destinationSegmentMap'),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-[203px] w-full animate-pulse rounded-xl bg-primary-100"
        aria-hidden
      />
    ),
  },
);

/** 탭·숙소/관광 상세 선택 상태 — `key={destId}`로 목적지 이동 시 초기화 */
function DestinationDetailPanels({
  destId,
  destination,
}: {
  destId: number;
  destination: Destination;
}) {
  const [tab, setTab] = useState<DestinationDetailTab>('description');
  const [selectedAccommodationId, setSelectedAccommodationId] = useState<number | null>(null);
  const [selectedTouristId, setSelectedTouristId] = useState<number | null>(null);

  const handleTabChange = (t: DestinationDetailTab) => {
    setSelectedAccommodationId(null);
    setSelectedTouristId(null);
    setTab(t);
  };

  const accommodationRows = useLiveQuery(
    () =>
      destId < 1
        ? Promise.resolve([] as Accommodation[])
        : db.accommodations.where('destinationId').equals(destId).toArray(),
    [destId],
  );

  const touristRows = useLiveQuery(
    () =>
      destId < 1
        ? Promise.resolve([] as TouristSpot[])
        : db.touristSpots.where('destinationId').equals(destId).toArray(),
    [destId],
  );

  const accommodations = useMemo(() => {
    if (accommodationRows === undefined) return undefined;
    return [...accommodationRows].sort((a, b) => a.name_ko.localeCompare(b.name_ko, 'ko'));
  }, [accommodationRows]);

  const touristSpots = useMemo(() => {
    if (touristRows === undefined) return undefined;
    return [...touristRows].sort((a, b) => a.name_ko.localeCompare(b.name_ko, 'ko'));
  }, [touristRows]);

  const selectedAccommodation = useMemo(() => {
    if (tab !== 'accommodation' || selectedAccommodationId == null || accommodations === undefined) {
      return undefined;
    }
    return accommodations.find((a) => a.id === selectedAccommodationId);
  }, [tab, selectedAccommodationId, accommodations]);

  const selectedTouristSpot = useMemo(() => {
    if (tab !== 'tourist' || selectedTouristId == null || touristSpots === undefined) {
      return undefined;
    }
    return touristSpots.find((s) => s.id === selectedTouristId);
  }, [tab, selectedTouristId, touristSpots]);

  return (
    <div className="flex min-h-0 w-full flex-col">
      <DestinationDetailTabNav active={tab} onChange={handleTabChange} />

      {/* 피그마: 탭 하단선과 본문 사이 16px 간격 */}
      <div className="mt-4 flex min-h-0 w-full min-w-0 flex-col pb-4">
        {tab === 'description' && (
          <div className="min-h-[120px]">
            <p className="whitespace-pre-wrap text-16 text-500 leading-normal text-primary-500">
              {destination.description_ko}
            </p>
          </div>
        )}

        {tab === 'accommodation' &&
          (selectedAccommodation ? (
            <DestinationAccommodationDetail
              item={selectedAccommodation}
              onBack={() => setSelectedAccommodationId(null)}
            />
          ) : (
            <DestinationDetailAccommodationList
              items={accommodations}
              onSelectRow={(id) => setSelectedAccommodationId(id)}
            />
          ))}

        {tab === 'tourist' &&
          (selectedTouristSpot ? (
            <DestinationTouristSpotDetail
              item={selectedTouristSpot}
              onBack={() => setSelectedTouristId(null)}
            />
          ) : (
            <DestinationDetailTouristList
              items={touristSpots}
              onSelectRow={(id) => setSelectedTouristId(id)}
            />
          ))}
      </div>
    </div>
  );
}

export default function DestinationDetailPage() {
  const params = useParams();
  const destId = useMemo(() => {
    const raw = params?.id;
    const n = Number(Array.isArray(raw) ? raw[0] : raw);
    return Number.isInteger(n) && n >= 1 ? n : -1;
  }, [params]);

  const routeDestinations = useLiveQuery(
    () => db.destinations.where('routeId').equals(1).toArray(),
    [],
  );

  const destination = useMemo(() => {
    if (!routeDestinations) return undefined;
    return [...routeDestinations]
      .sort((a, b) => (a.id ?? 0) - (b.id ?? 0))
      .find((d) => d.id === destId);
  }, [routeDestinations, destId]);

  const sortedRouteDestinations = useMemo(() => {
    if (!routeDestinations?.length) return [];
    return [...routeDestinations].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
  }, [routeDestinations]);

  const prevDestination = useMemo(() => {
    if (!destination || sortedRouteDestinations.length === 0) return undefined;
    const idx = sortedRouteDestinations.findIndex((d) => d.id === destination.id);
    return idx > 0 ? sortedRouteDestinations[idx - 1] : undefined;
  }, [sortedRouteDestinations, destination]);

  const nextDestination = useMemo(() => {
    if (!destination || sortedRouteDestinations.length === 0) return undefined;
    const idx = sortedRouteDestinations.findIndex((d) => d.id === destination.id);
    return idx >= 0 && idx < sortedRouteDestinations.length - 1
      ? sortedRouteDestinations[idx + 1]
      : undefined;
  }, [sortedRouteDestinations, destination]);

  if (destId < 0) {
    notFound();
  }

  if (routeDestinations !== undefined && !destination) {
    notFound();
  }

  if (!destination) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center px-4 pb-28 pt-4">
        <p className="text-14 text-600 text-gray-500">목적지를 불러오는 중…</p>
      </div>
    );
  }

  return (
    <div className="relative w-full min-w-0">
      <main className="flex max-h-[calc(100dvh-env(safe-area-inset-top,0px)-3.75rem)] min-h-0 w-full max-w-none flex-col gap-2 overflow-y-auto px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px)+1.25rem+3.25rem)] pt-2">
        <header className="flex flex-col gap-2 text-primary-500">
          <h1 className="w-full max-w-full text-balance break-words text-[48px] text-600 leading-[44px]">
            {destination.name_en}
          </h1>

          <div className="flex flex-col gap-0">
            <p className="text-16 text-500 leading-normal">
              {prevDestination ? (
                <>
                  <span className="text-16 text-800">{prevDestination.name_ko}</span>
                  <span>부터 </span>
                  <span className="text-16 text-800">{destination.name_ko}</span>
                  <span> 까지</span>
                </>
              ) : (
                <span className="text-16 text-800">{destination.name_ko}</span>
              )}
            </p>
            <p className="mt-1 text-16 text-500 leading-normal">
              거리: {destination.distance}km
            </p>
          </div>
        </header>

        <section aria-label="구간 지도" className="mt-2">
          <DestinationSegmentMap destinationId={destId} />
        </section>

        <section className="mt-2 flex min-h-0 flex-col" aria-label="목적지 상세">
          <DestinationDetailPanels key={destId} destId={destId} destination={destination} />
        </section>
      </main>

      <DestinationDetailAdjacentNav
        prevId={prevDestination?.id}
        nextId={nextDestination?.id}
      />
    </div>
  );
}
