import type { CaminoNode } from '../index';
import { INITIAL_DESTINATIONS } from './destination';

/** 프랑스 길(Camino Francés) 주요 거점 좌표 — `INITIAL_DESTINATIONS` id 1–37과 동일한 순서 */
const COORDS: [number, number][] = [
  [43.1635, -1.2358],
  [43.0092, -1.3201],
  [42.9308, -1.5042],
  [42.8125, -1.6458],
  [42.6719, -1.8133],
  [42.6715, -2.0304],
  [42.5683, -2.1915],
  [42.5152, -2.3371],
  [42.4627, -2.4449],
  [42.4168, -2.7303],
  [42.4402, -2.9537],
  [42.4194, -3.1903],
  [42.3781, -3.4358],
  [42.3439, -3.6969],
  [42.3122, -4.0458],
  [42.2589, -4.4452],
  [42.3384, -4.6015],
  [42.3712, -5.0294],
  [42.4239, -5.2215],
  [42.4984, -5.4158],
  [42.5989, -5.5677],
  [42.5164, -5.7667],
  [42.4589, -6.0561],
  [42.4815, -6.2831],
  [42.5375, -6.5204],
  [42.5455, -6.5937],
  [42.6072, -6.8101],
  [42.7078, -7.0425],
  [42.7561, -7.2425],
  [42.7769, -7.4164],
  [42.8075, -7.6167],
  [42.8731, -7.8689],
  [42.9152, -8.0167],
  [42.9272, -8.1639],
  [42.9069, -8.3614],
  [42.8806, -8.5466],
  [42.9078, -9.2611],
];

export const CAMINO_NODES: CaminoNode[] = INITIAL_DESTINATIONS.map((d, i) => ({
  id: d.id!,
  name_ko: d.name_ko,
  name_en: d.name_en,
  coords: COORDS[i]!,
}));

export const CAMINO_NODE_COORDS: [number, number][] = CAMINO_NODES.map((n) => n.coords);

/** 목적지 `destinationId`(1-based, 노드 순과 동일)까지의 구간 폴리라인 — 첫 구간은 1→2 노드 */
export function getCaminoSegmentPath(destinationId: number): [number, number][] {
  const coords = CAMINO_NODE_COORDS;
  if (coords.length === 0) return [];
  const id = Math.floor(destinationId);
  if (id < 1) return [];
  if (id === 1) {
    return coords.length >= 2 ? [coords[0]!, coords[1]!] : [coords[0]!];
  }
  if (id > coords.length) return [];
  const prev = coords[id - 2];
  const curr = coords[id - 1];
  if (!prev || !curr) return [];
  return [prev, curr];
}
