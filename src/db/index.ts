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
  location_ko: string;
  location_en: string;
  price: number;
  bedCounts: number;
  contactNumber: string;
  mail: string;
  openTime: string;
  closeTime: string;
  operatingPeriod: string[];
  information_ko: string;
  information_en: string;
}

export interface TourSpot {
  id?: number;
  destinationId: number;
  name_ko: string;
  name_en: string;
  location_ko: string;
  location_en: string;
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

export class CaminoteDB extends Dexie {
  routes!: Table<Route>;
  destinations!: Table<Destination>;
  accommodations!: Table<Accommodation>;
  tourSpots!: Table<TourSpot>;
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
      await db.transaction('rw', [db.routes, db.destinations, db.accommodations, db.tourSpots, db.informations], async () => {
        await db.routes.bulkAdd(INITIAL_DATA.routes);
        await db.destinations.bulkAdd(INITIAL_DATA.destinations);
        await db.accommodations.bulkAdd(INITIAL_DATA.accommodations);
        await db.tourSpots.bulkAdd(INITIAL_DATA.touristSpots);
        await db.informations.bulkAdd(INITIAL_DATA.informations);
      });
    } catch (error) {
    }
  }
};
