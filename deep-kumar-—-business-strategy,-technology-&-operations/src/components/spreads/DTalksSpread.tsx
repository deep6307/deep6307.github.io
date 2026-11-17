import { PrimaryRoutePath } from '../../config/siteConfig';
import { D_TALKS_CONTENT } from '../../data/siteContent';
import { StrategyDeckBanner } from '../StrategyDeckBanner';

interface DTalksSpreadProps {
  onNavigateRoute: (route: PrimaryRoutePath) => void;
}

export function DTalksSpread({ onNavigateRoute }: DTalksSpreadProps) {
  return (
    <section
      aria-label="D-Talks"
      className="mx-auto flex h-full max-w-[1280px] flex-col justify-between gap-3 sm:gap-5 py-1 md:py-3 text-warm-ivory"
    >
      {/* Editorial Header */}
      <div className="border-b border-warm-ivory/25 pb-2.5 sm:pb-4">
        <p className="text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase text-mango-yellow">
          {D_TALKS_CONTENT.eyebrow}
        </p>
        <div className="mt-1 flex flex-col lg:flex-row lg:items-end justify-between gap-1.5 sm:gap-4">
          <h1 className="font-serif text-3xl sm:text-5xl leading-[1.06] text-warm-ivory">
            {D_TALKS_CONTENT.heading}
          </h1>
          <p className="max-w-[54ch] text-xs sm:text-base leading-snug sm:leading-relaxed text-warm-ivory/92">
            {D_TALKS_CONTENT.intro}
          </p>
        </div>
      </div>

      {/* Space-Optimized Editorial Grid */}
      <div className="grid flex-1 grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 items-stretch">
        {D_TALKS_CONTENT.sections.map((section) => (
          <article
            key={section.title}
            className="flex flex-col justify-between rounded-sm bg-deep-pine border border-warm-ivory/15 p-4 sm:p-7"
          >
            <div>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-mango-yellow">
                {section.status}
              </span>
              <h2 className="mt-1.5 sm:mt-3 font-serif text-xl sm:text-3xl text-warm-ivory leading-tight">
                {section.title}
              </h2>
            </div>

            <p className="mt-2 sm:mt-4 text-xs sm:text-[15px] leading-snug sm:leading-relaxed text-muted-sage">
              {section.description}
            </p>
          </article>
        ))}
      </div>

      {/* Bottom StrategyDeck CTA */}
      <StrategyDeckBanner tone="orange" onOpenProjects={() => onNavigateRoute('/projects')} />
    </section>
  );
}
