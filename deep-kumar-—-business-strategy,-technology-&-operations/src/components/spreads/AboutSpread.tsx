import { Linkedin, Mail } from 'lucide-react';
import { PrimaryRoutePath, SITE_CONFIG } from '../../config/siteConfig';
import { ABOUT_CONTENT } from '../../data/siteContent';
import { EditorialImage } from '../EditorialImage';
import { StrategyDeckBanner } from '../StrategyDeckBanner';

interface AboutSpreadProps {
  onNavigateRoute: (route: PrimaryRoutePath) => void;
}

export function AboutSpread({ onNavigateRoute }: AboutSpreadProps) {
  return (
    <section
      aria-label="About Me"
      className="mx-auto flex min-h-full max-w-[1280px] flex-col justify-between gap-1.5 sm:gap-5 py-0.5 md:py-4 text-dark-charcoal"
    >
      {/* Header */}
      <div className="shrink-0 border-b border-dark-charcoal/15 pb-1.5 sm:pb-4">
        <p className="text-[10px] sm:text-xs font-medium tracking-[0.14em] uppercase text-burnt-orange">
          {ABOUT_CONTENT.eyebrow}
        </p>
        <h1 className="mt-0.5 max-w-4xl font-serif text-[17px] sm:text-4xl lg:text-[2.6rem] leading-[1.12] text-deep-pine">
          {ABOUT_CONTENT.heading}
        </h1>
      </div>

      {/* Main Content: Fits cleanly inside 1 mobile scroll while distributing across full stage */}
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-6 lg:gap-10 items-stretch py-0.5 sm:py-2">
        {/* Left: Trajectory, Questions, IMT ExP & Stance */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-1.5 sm:gap-4 py-0.5 sm:py-1">
          <p className="text-[11px] sm:text-[15px] lg:text-base leading-[1.32] sm:leading-relaxed text-dark-charcoal/90">
            {ABOUT_CONTENT.summary}
          </p>

          <ul className="space-y-0.5 sm:space-y-2 text-[11px] sm:text-[15px] leading-[1.28] sm:leading-snug text-dark-charcoal/92 border-y border-dark-charcoal/12 py-1.5 sm:py-3.5">
            {ABOUT_CONTENT.coreQuestions.map((question) => (
              <li key={question} className="flex items-start gap-1.5 sm:gap-2.5">
                <span aria-hidden="true" className="text-burnt-orange font-bold">
                  —
                </span>
                <span>{question}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-1 sm:space-y-2.5">
            <p className="text-[11px] sm:text-[15px] leading-[1.32] sm:leading-relaxed text-dark-charcoal/88">
              {ABOUT_CONTENT.mbaNote}
            </p>
            <p className="text-[11px] sm:text-[15px] font-semibold leading-[1.3] sm:leading-snug text-deep-pine">
              {ABOUT_CONTENT.closingLine}
            </p>
          </div>
        </div>

        {/* Right: Conversation Invitation Card */}
        <div className="lg:col-span-6 flex items-center">
          <div className="flex w-full flex-col justify-between gap-1.5 sm:gap-4 rounded-sm bg-deep-pine px-3 py-2 sm:p-7 lg:p-8 text-warm-ivory">
            <div className="flex items-center sm:items-start gap-2.5 sm:gap-4">
              <EditorialImage
                src={SITE_CONFIG.assets.headshotUrl}
                alt="Deep Kumar"
                className="h-9 w-8 sm:h-16 sm:w-14 shrink-0 rounded-sm object-cover object-top border border-warm-ivory/25 brightness-[0.95] contrast-[1.04] saturate-[0.86]"
                fallbackLabel="DK"
              />
              <div className="min-w-0">
                <p className="text-[9.5px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-sage">
                  <span className="sm:hidden">{SITE_CONFIG.location}</span>
                  <span className="hidden sm:inline">Open Conversation</span>
                </p>
                <h2 className="sm:mt-0.5 font-serif text-[15px] sm:text-2xl lg:text-3xl text-mango-yellow leading-tight">
                  {ABOUT_CONTENT.ctaHeading}
                </h2>
                <p className="mt-0.5 sm:mt-1.5 text-[11px] sm:text-sm lg:text-base leading-[1.25] sm:leading-relaxed text-warm-ivory/90">
                  {ABOUT_CONTENT.ctaBody}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 border-t border-warm-ivory/15 pt-1.5 sm:pt-4">
              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="inline-flex min-h-[32px] sm:min-h-[42px] items-center gap-1.5 rounded-sm bg-mango-yellow px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-sm font-semibold text-dark-charcoal hover:bg-mango-yellow/90 whitespace-nowrap"
              >
                <span>{ABOUT_CONTENT.linkedinCta}</span>
                <Linkedin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex min-h-[32px] sm:min-h-[42px] items-center gap-1.5 rounded-sm border border-warm-ivory/35 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-sm font-medium text-warm-ivory hover:bg-warm-ivory/10 whitespace-nowrap"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{ABOUT_CONTENT.writeCta}</span>
              </a>

              <span className="hidden sm:inline text-xs text-muted-sage ml-auto">
                {SITE_CONFIG.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom StrategyDeck CTA */}
      <div className="shrink-0">
        <StrategyDeckBanner tone="light" onOpenProjects={() => onNavigateRoute('/projects')} />
      </div>
    </section>
  );
}
