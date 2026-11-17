import { ArrowRight } from 'lucide-react';

interface StrategyDeckBannerProps {
  tone?: 'dark' | 'light' | 'orange';
  onOpenProjects: () => void;
}

export function StrategyDeckBanner({
  tone = 'dark',
  onOpenProjects,
}: StrategyDeckBannerProps) {
  const containerClass =
    tone === 'dark'
      ? 'border-warm-ivory/22 bg-deep-pine/60 text-warm-ivory'
      : tone === 'orange'
        ? 'border-warm-ivory/25 bg-deep-pine/25 text-warm-ivory'
        : 'border-dark-charcoal/15 bg-deep-pine/[0.04] text-dark-charcoal';

  const statusClass =
    tone === 'light'
      ? 'text-burnt-orange'
      : tone === 'orange'
        ? 'text-warm-ivory'
        : 'text-mango-yellow';

  const buttonClass =
    tone === 'light'
      ? 'bg-deep-pine text-mango-yellow hover:bg-deep-pine/90'
      : 'bg-mango-yellow text-dark-charcoal hover:bg-mango-yellow/90';

  return (
    <div
      className={`no-print flex items-center justify-between gap-3 rounded-sm border px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs ${containerClass}`}
    >
      <span className={`font-semibold uppercase tracking-[0.14em] ${statusClass}`}>
        Coming Soon
      </span>

      <a
        href="/projects"
        onClick={(e) => {
          e.preventDefault();
          onOpenProjects();
        }}
        className={`inline-flex min-h-[34px] items-center gap-1.5 rounded-sm px-3 py-1 text-xs font-semibold whitespace-nowrap shrink-0 ${buttonClass}`}
      >
        <span>StrategyDeck</span>
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}
