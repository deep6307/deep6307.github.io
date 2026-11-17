import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { HOME_CONTENT } from '../../data/siteContent';

const STRATEGY_DECK_PILLARS = [
  {
    title: 'Ideas to Slides',
    detail: 'Takes in raw ideas and turns them into structured slides.',
  },
  {
    title: 'Fully Editable',
    detail: 'Download editable decks you can refine and customize.',
  },
  {
    title: 'Free & No Watermark',
    detail: 'Built to export clean slides without any watermark.',
  },
] as const;

export function ProjectsSpread() {
  return (
    <section
      aria-label="Projects and StrategyDeck"
      className="mx-auto flex min-h-full max-w-[1280px] flex-col justify-between gap-3 sm:gap-5 py-1 md:py-4 text-dark-charcoal"
    >
      {/* Header Row */}
      <div className="shrink-0 border-b border-dark-charcoal/18 pb-2.5 sm:pb-4">
        <p className="text-[10px] sm:text-xs font-medium tracking-[0.14em] uppercase text-deep-pine">
          Projects · Applied Work &amp; Tools
        </p>
        <h1 className="mt-0.5 font-serif text-xl sm:text-4xl lg:text-[2.75rem] text-deep-pine leading-[1.1]">
          Applied initiatives.
        </h1>
      </div>

      {/* Full-Stage Two-Card Layout Occupying the Canvas */}
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 items-stretch">
        {/* Primary StrategyDeck Showcase Card */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4 rounded-sm border border-warm-ivory/15 bg-deep-pine p-4 sm:p-8 lg:p-10 text-warm-ivory">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-mango-yellow">
              {HOME_CONTENT.strategyDeck.label}
            </p>
            <h2 className="mt-1.5 sm:mt-3 max-w-xl font-serif text-xl sm:text-4xl lg:text-[2.6rem] leading-[1.1] text-warm-ivory">
              {HOME_CONTENT.strategyDeck.heading}
            </h2>
            <p className="mt-2 sm:mt-4 max-w-[50ch] text-xs sm:text-base leading-snug sm:leading-relaxed text-muted-sage">
              {HOME_CONTENT.strategyDeck.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-warm-ivory/15 pt-3 sm:pt-5">
            <span className="inline-flex min-h-[40px] sm:min-h-[44px] items-center rounded-sm bg-mango-yellow px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-dark-charcoal whitespace-nowrap">
              {HOME_CONTENT.strategyDeck.status}
            </span>
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent('StrategyDeck')}`}
              className="inline-flex min-h-[40px] items-center gap-1.5 text-xs sm:text-sm font-medium text-warm-ivory underline underline-offset-4 decoration-warm-ivory/40 hover:text-mango-yellow hover:decoration-mango-yellow whitespace-nowrap"
            >
              <span>Share an idea</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Companion Overview Card */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-2.5 sm:gap-4 rounded-sm border border-dark-charcoal/14 bg-warm-ivory p-4 sm:p-7 lg:p-8">
          <div className="border-b border-dark-charcoal/12 pb-2 sm:pb-3">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-burnt-orange">
              What To Expect
            </p>
            <h3 className="mt-0.5 font-serif text-lg sm:text-2xl text-deep-pine leading-tight">
              Built for clear thinking.
            </h3>
          </div>

          <div className="flex flex-1 flex-col justify-evenly divide-y divide-dark-charcoal/10">
            {STRATEGY_DECK_PILLARS.map((pillar) => (
              <div key={pillar.title} className="py-1.5 sm:py-3 first:pt-0 last:pb-0">
                <p className="text-xs sm:text-sm font-bold text-deep-pine">{pillar.title}</p>
                <p className="mt-0.5 text-[11.5px] sm:text-sm leading-snug text-dark-charcoal/82">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
