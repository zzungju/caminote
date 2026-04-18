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

import { INITIAL_DATA } from './data/initialData';

export const initializeDB = async () => {
  const routeCount = await db.routes.count();

  if (routeCount === 0) {
    console.log("Caminote: 초기 데이터를 로딩합니다...");
    try {
      await db.transaction('rw', [db.routes, db.destinations, db.accommodations, db.touristSpots, db.informations], async () => {
        await db.routes.bulkAdd(INITIAL_DATA.routes);
        await db.destinations.bulkAdd(INITIAL_DATA.destinations);
        await db.accommodations.bulkAdd(INITIAL_DATA.accommodations);
        await db.touristSpots.bulkAdd(INITIAL_DATA.touristSpots);
        await db.informations.bulkAdd(INITIAL_DATA.informations);
      });
    } catch {
      // 초기 시드가 이미 있거나 충돌하면 무시
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
      console.warn("Caminote: 숙소/관광지 데이터 복구 실패", e);
    }
  }

  if (process.env.NODE_ENV === "development") {
    try {
      await db.transaction("rw", [db.destinations, db.accommodations, db.touristSpots], async () => {
        await db.destinations.bulkPut(INITIAL_DATA.destinations);
        await db.accommodations.bulkPut(INITIAL_DATA.accommodations);
        await db.touristSpots.bulkPut(INITIAL_DATA.touristSpots);
      });
    } catch (error) {
      console.warn("Caminote: 시드 동기화 실패", error);
    }
  }
};
