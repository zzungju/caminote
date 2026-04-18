'use client';

import { MapContainer, Polyline, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { CAMINO_NODE_COORDS } from '@/db/data/caminoNodes';

const OSM_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const mapShellClass =
  'z-0 h-full w-full rounded-xl [&_.leaflet-control-attribution]:m-0 [&_.leaflet-control-attribution]:rounded-sm [&_.leaflet-control-attribution]:border-0 [&_.leaflet-control-attribution]:bg-transparent [&_.leaflet-control-attribution]:p-0 [&_.leaflet-control-attribution]:px-0.5 [&_.leaflet-control-attribution]:text-[8px] [&_.leaflet-control-attribution]:leading-tight [&_.leaflet-control-attribution]:text-gray-600 [&_.leaflet-control-attribution]:opacity-25 [&_.leaflet-control-attribution]:shadow-none [&_.leaflet-control-attribution]:transition-opacity [&_.leaflet-control-attribution]:duration-200 [&_.leaflet-control-attribution]:hover:opacity-100 [&_.leaflet-control-attribution_a]:text-inherit';

export default function RouteMap() {
  return (
    <MapContainer
      center={[42.5, -4.5]}
      zoom={6}
      className={mapShellClass}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution={OSM_ATTRIBUTION}
      />
      <Polyline positions={CAMINO_NODE_COORDS} color="#FFD700" weight={4} opacity={0.8} />
    </MapContainer>
  );
}
