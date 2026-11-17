import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MAGAZINE_SPREADS, SpreadMeta } from '../config/siteConfig';

interface MagazineFolioRailProps {
  currentIndex: number;
  currentSpread: SpreadMeta;
  onGoToSpread: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export function MagazineFolioRail({
  currentIndex,
  currentSpread,
  onGoToSpread,
  onPrev,
  onNext,
}: MagazineFolioRailProps) {
  const isDark = currentSpread.isDark;
  const total = MAGAZINE_SPREADS.length;

  const railClass = (() => {
    if (currentSpread.theme === 'pine') {
      return 'bg-deep-pine border-t border-warm-ivory/15 text-warm-ivory';
    }
    if (currentSpread.theme === 'burntOrange') {
      return 'bg-burnt-orange border-t border-warm-ivory/18 text-warm-ivory';
    }
    if (currentSpread.theme === 'sage') {
      return 'bg-muted-sage border-t border-dark-charcoal/15 text-dark-charcoal';
    }
    return 'bg-warm-ivory border-t border-dark-charcoal/12 text-dark-charcoal';
  })();

  return (
    <footer
      aria-label="Page navigation"
      className={`no-print fixed bottom-0 left-0 right-0 z-30 h-10 md:h-11 ${railClass}`}
    >
      <div className="mx-auto flex h-full max-w-[1380px] items-center justify-between gap-3 px-3 sm:px-6 lg:px-10">
        {/* Left: Active Section */}
        <div className="flex items-center min-w-0">
          <span className="text-xs font-medium tracking-wide truncate">
            {currentSpread.sectionTag}
          </span>
        </div>

        {/* Center: Desktop Section Switcher */}
        <div className="hidden md:flex items-center gap-1.5" role="tablist" aria-label="Pages">
          {MAGAZINE_SPREADS.map((spread, idx) => {
            const active = idx === currentIndex;
            return (
              <button
                key={spread.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={spread.label}
                onClick={() => onGoToSpread(idx)}
                className={`px-3 py-1 text-[11px] font-medium whitespace-nowrap shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-mango-yellow ${
                  active
                    ? isDark
                      ? 'bg-mango-yellow text-dark-charcoal font-semibold'
                      : 'bg-deep-pine text-warm-ivory font-semibold'
                    : 'opacity-75 hover:opacity-100'
                }`}
              >
                {spread.label}
              </button>
            );
          })}
        </div>

        {/* Right: Prev / Next Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <span className="hidden sm:inline md:hidden text-[11px] opacity-70 mr-1">
            Swipe to navigate
          </span>
          <button
            type="button"
            onClick={onPrev}
            disabled={currentIndex === 0}
            aria-label="Previous page"
            className="inline-flex min-h-[40px] min-w-[40px] md:min-h-[34px] md:min-w-[34px] items-center justify-center rounded-sm disabled:opacity-25 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-mango-yellow"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={currentIndex === total - 1}
            aria-label="Next page"
            className="inline-flex min-h-[40px] min-w-[40px] md:min-h-[34px] md:min-w-[82px] items-center justify-center gap-1 px-2 rounded-sm text-xs font-medium disabled:opacity-25 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-mango-yellow"
          >
            <span className="hidden md:inline">Next page</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
