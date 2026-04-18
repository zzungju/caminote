import { renderPwaIcon } from './pwa-icon-shared';

export const runtime = 'nodejs';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default async function Icon() {
  return renderPwaIcon({ width: 512, height: 512 }, 360);
}
