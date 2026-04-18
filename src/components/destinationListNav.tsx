'use client';

export type DestinationListNavSegmentProps = {
  index: number;
  total: number;
  isActive: boolean;
  onSelect: () => void;
};

export function DestinationListNavSegment({
  index,
  total,
  isActive,
  onSelect,
}: DestinationListNavSegmentProps) {
  const isLast = index >= total - 1;

  return (
    <div className="flex w-6 shrink-0 flex-col items-center self-stretch">
      {index > 0 && (
        <div
          className="-mt-2 mb-0 h-2 w-px shrink-0 bg-gray-100"
          aria-hidden
        />
      )}
      <div className="flex min-h-0 w-full flex-1 flex-col items-center pt-4">
        <button
          type="button"
          role="tab"
          aria-selected={isActive}
          aria-label={`${index + 1}번째 목적지`}
          className={`size-2.5 shrink-0 rounded-full transition-colors duration-200 ${
            isActive
              ? 'bg-primary-500 '
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          onClick={onSelect}
        />
        {!isLast && (
          <div
            className="mt-0 min-h-3 w-px flex-1 self-center bg-gray-100"
            aria-hidden
          />
        )}
      </div>
    </div>
  );
}
