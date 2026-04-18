import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

/** `globals.css` --color-primary-500 과 동일 */
export const PWA_THEME_BG = '#056bda';

export async function renderPwaIcon(size: { width: number; height: number }, logoMax: number) {
  const path = join(process.cwd(), 'public', 'logo.png');
  const buf = await readFile(path);
  const src = `data:image/png;base64,${buf.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: PWA_THEME_BG,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse(Satori) 전용 */}
        <img
          src={src}
          alt=""
          width={logoMax}
          height={logoMax}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
