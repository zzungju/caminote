'use client';

import { useEffect, useMemo, useState } from 'react';
import { LatLngBounds } from 'leaflet';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { getCaminoSegmentPath } from '@/db/data/caminoNodes';

const OSM_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const mapShellClass =
  'z-0 h-full w-full rounded-xl [&_.leaflet-control-attribution]:m-0 [&_.leaflet-control-attribution]:rounded-sm [&_.leaflet-control-attribution]:border-0 [&_.leaflet-control-attribution]:bg-transparent [&_.leaflet-control-attribution]:p-0 [&_.leaflet-control-attribution]:px-0.5 [&_.leaflet-control-attribution]:text-[8px] [&_.leaflet-control-attribution]:leading-tight [&_.leaflet-control-attribution]:text-gray-600 [&_.leaflet-control-attribution]:opacity-25 [&_.leaflet-control-attribution]:shadow-none [&_.leaflet-control-attribution]:transition-opacity [&_.leaflet-control-attribution]:duration-200 [&_.leaflet-control-attribution]:hover:opacity-100 [&_.leaflet-control-attribution_a]:text-inherit';

type DestinationSegmentMapProps = {
  destinationId: number;
  className?: string;
};

export default function DestinationSegmentMap({
  destinationId,
  className = '',
}: DestinationSegmentMapProps) {
  /** Leaflet은 클라이언트에서만 마운트 (Strict Mode·하이드레이션 시 appendChild 오류 방지) */
  const [mapReady, setMapReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMapReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const positions = useMemo(
    () => getCaminoSegmentPath(destinationId),
    [destinationId],
  );

  const bounds = useMemo(() => {
    if (positions.length < 2) return undefined;
    return new LatLngBounds(
      positions.map((p) => [p[0], p[1]] as [number, number]),
    );
  }, [positions]);

  const center = positions[0] ?? [42.5, -4.5];
  const zoom = 12;

  return (
    <div
      className={`relative h-[203px] w-full min-h-[203px] overflow-hidden rounded-xl bg-primary-50 ${className}`}
    >
      {!mapReady ? (
        <div
          className="h-full min-h-[203px] w-full animate-pulse bg-primary-100"
          aria-hidden
        />
      ) : positions.length === 0 ? (
        <div className="flex h-full min-h-[203px] items-center justify-center text-14 text-500 text-gray-500">
          구간 지도를 불러올 수 없습니다.
        </div>
      ) : (
        <MapContainer
          key={destinationId}
          className={mapShellClass}
          style={{ height: '100%', width: '100%', minHeight: 203 }}
          {...(bounds
            ? { bounds, boundsOptions: { padding: [28, 28] } as const }
            : { center, zoom })}
          scrollWheelZoom
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution={OSM_ATTRIBUTION}
          />
          <Polyline positions={positions} color="#FFD700" weight={4} opacity={0.85} />
        </MapContainer>
      )}
    </div>
  );
}
