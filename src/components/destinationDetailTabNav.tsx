'use client';

export type DestinationDetailTab = 'description' | 'accommodation' | 'tourist';

type DestinationDetailTabNavProps = {
  active: DestinationDetailTab;
  onChange: (tab: DestinationDetailTab) => void;
};

const TABS: { id: DestinationDetailTab; label: string }[] = [
  { id: 'description', label: '주요설명' },
  { id: 'accommodation', label: '숙박' },
  { id: 'tourist', label: '관광지' },
];

/**
 * 목적지 상세 — 탭 스트립 (피그마 104-1408: 균등 3분할, 하단 2px 인디케이터, 48px 터치)
 */
export default function DestinationDetailTabNav({
  active,
  onChange,
}: DestinationDetailTabNavProps) {
  return (
    <nav
      className="w-full border-b border-gray-200 bg-white"
      aria-label="목적지 상세 탭"
    >
      <div className="flex w-full min-w-0 items-stretch">
        {TABS.map(({ id, label }) => {
          const isOn = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className={`relative flex min-h-12 flex-1 min-w-0 items-center justify-center px-1 text-16 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 ${
                isOn
                  ? 'font-800 text-primary-500 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary-500'
                  : 'font-600 text-gray-600 hover:text-primary-500'
              } `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
