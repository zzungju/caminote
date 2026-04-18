import { INITIAL_ROUTES } from './routes';
import { INITIAL_DESTINATIONS } from './destination';
import { INITIAL_ACCOMMODATIONS } from './accommodation';
import { INITIAL_TOURIST_SPOTS } from './touristSpot';
import { INITIAL_INFORMATIONS } from './information';

/** 시드 데이터(목적지·숙소 등)를 바꾼 뒤 배포할 때마다 1 올리면, 프로덕션 사용자 IndexedDB도 갱신됩니다. */
export const SEED_DATA_VERSION = 1;

export const INITIAL_DATA = {
  routes: INITIAL_ROUTES,
  destinations: INITIAL_DESTINATIONS,
  accommodations: INITIAL_ACCOMMODATIONS,
  touristSpots: INITIAL_TOURIST_SPOTS,
  informations: INITIAL_INFORMATIONS,
};