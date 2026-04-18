import Dexie, { type Table } from 'dexie';

export interface Route {
  id?: number;
  name: string;
}

export interface Destination {
  id?: number;
  routeId: number;
  name_ko: string;
  name_en: string;
  distance: number;
  description_ko: string;
  description_en: string;
}

export interface Accommodation {
  id?: number;
  destinationId: number;
  name_ko: string;
  name_en: string;
  location: string;
  price: number;
  bedCounts: number;
  contactNumber: string | null;
  mail: string | null;
  openTime: string | null;
  closeTime: string | null;
  operatingPeriod: string[];
  information_ko: string;
  information_en: string;
}

export interface TouristSpot {
  id?: number;
  destinationId: number;
  name_ko: string;
  name_en: string;
  location: string;
  description_ko: string;
  description_en: string;
}

export interface Information {
  id?: number;
  title_ko: string;
  title_en: string;
  imageURLs: string[];
  description_ko: string;
  description_en: string;
}

/** 프랑스 길 지도 폴리라인용 거점 (DB 목적지 id와 정렬해 사용) */
export interface CaminoNode {
  id: number;
  name_ko: string;
  name_en: string;
  coords: [number, number];
}

export class CaminoteDB extends Dexie {
  routes!: Table<Route>;
  destinations!: Table<Destination>;
  accommodations!: Table<Accommodation>;
  touristSpots!: Table<TouristSpot>;  
  informations!: Table<Information>;

  constructor() {
    super('CaminoteDB');

    this.version(1).stores({
      routes: '++id, name',
      destinations: '++id, routeId, name_ko', 
      accommodations: '++id, destinationId, name_ko',
      touristSpots: '++id, destinationId, name_ko',
      informations: '++id, title_ko'
    });
  }
}

export const db = new CaminoteDB();

import { INITIAL_DATA, SEED_DATA_VERSION } from './data/initialData';

const SEED_VERSION_STORAGE_KEY = 'caminote:seedDataVersion';

function readStoredSeedVersion(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = window.localStorage.getItem(SEED_VERSION_STORAGE_KEY);
    const n = raw == null ? 0 : Number(raw);
    return Number.isFinite(n) ? n : 0;
  } catch {
    return 0;
  }
}

function writeStoredSeedVersion(version: number): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(SEED_VERSION_STORAGE_KEY, String(version));
  } catch {
    /* private mode 등 */
  }
}

/** 번들에 포함된 시드로 IndexedDB를 덮어씁니다 (id 기준 upsert). */
async function applyBundleSeed(): Promise<void> {
  await db.transaction(
    'rw',
    [db.routes, db.destinations, db.accommodations, db.touristSpots, db.informations],
    async () => {
      await db.routes.bulkPut(INITIAL_DATA.routes);
      await db.destinations.bulkPut(INITIAL_DATA.destinations);
      await db.accommodations.bulkPut(INITIAL_DATA.accommodations);
      await db.touristSpots.bulkPut(INITIAL_DATA.touristSpots);
      await db.informations.bulkPut(INITIAL_DATA.informations);
    }
  );
  writeStoredSeedVersion(SEED_DATA_VERSION);
}

export const initializeDB = async () => {
  const routeCount = await db.routes.count();
  const storedVersion = readStoredSeedVersion();

  const needsFullSeed =
    routeCount === 0 ||
    storedVersion < SEED_DATA_VERSION ||
    process.env.NODE_ENV === 'development';

  if (needsFullSeed) {
    try {
      if (routeCount === 0) {
        console.log('Caminote: 초기 데이터를 로딩합니다...');
      } else if (storedVersion < SEED_DATA_VERSION) {
        console.log('Caminote: 시드 데이터 버전 갱신 중...');
      }
      await applyBundleSeed();
    } catch (e) {
      console.warn('Caminote: 시드 적용 실패', e);
    }
    return;
  }

  /** 목적지는 있는데 숙소/관광지 테이블만 비어 있는 경우(예: 예전 버전에서 목적지만 동기화됨) 복구 */
  const destCount = await db.destinations.count();
  const accCount = await db.accommodations.count();
  const spotCount = await db.touristSpots.count();
  if (destCount > 0 && (accCount === 0 || spotCount === 0)) {
    try {
      await db.transaction('rw', [db.accommodations, db.touristSpots], async () => {
        if (accCount === 0) {
          await db.accommodations.bulkPut(INITIAL_DATA.accommodations);
        }
        if (spotCount === 0) {
          await db.touristSpots.bulkPut(INITIAL_DATA.touristSpots);
        }
      });
    } catch (e) {
      console.warn('Caminote: 숙소/관광지 데이터 복구 실패', e);
    }
  }
};
