import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Copy, Mail, Phone, X } from 'lucide-react';
import { PrimaryRoutePath, SITE_CONFIG } from '../../config/siteConfig';
import { HOME_CONTENT } from '../../data/siteContent';
import { EditorialImage } from '../EditorialImage';
import { StrategyDeckBanner } from '../StrategyDeckBanner';

interface CoverSpreadProps {
  onNavigateRoute: (route: PrimaryRoutePath) => void;
}

export function CoverSpread({ onNavigateRoute }: CoverSpreadProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Ignore clipboard failures
    }
  };

  return (
    <section
      aria-label="Home"
      className="mx-auto flex h-full max-w-[1320px] flex-col justify-center py-1 md:py-2"
    >
      {/* Hero container: clearly visible portrait with strong bottom-left scrim for high text contrast */}
      <div className="relative flex w-full flex-1 flex-col justify-end overflow-hidden rounded-sm border border-warm-ivory/20 bg-deep-pine p-5 sm:p-8 lg:p-12">
        {/* Layer 1: Top-Right Portrait Image + Diagonal Top-Right (Transparent) to Bottom-Left (Opaque) Gradient */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 h-[64%] sm:h-[80%] lg:h-full w-[78%] sm:w-[62%] lg:w-[54%]">
            <EditorialImage
              src={SITE_CONFIG.assets.heroPortraitUrl}
              alt="Deep Kumar"
              className="h-full w-full object-cover object-[48%_14%] opacity-95 brightness-[0.95] contrast-[1.06] saturate-[0.92]"
              fallbackLabel="Deep Kumar"
            />
            {/* Soft perimeter feathers so portrait frame blends seamlessly into Deep Pine */}
            <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-deep-pine to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-deep-pine to-transparent" />
          </div>

          {/* Diagonal gradient from top-right (transparent) to bottom-left (opaque Deep Pine) */}
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent from-22% via-deep-pine/82 via-52% to-deep-pine to-76%" />
        </div>

        {/* Layer 2: Bottom-Left Personal Introduction & Redesigned CTA Stack */}
        <div className="relative z-10 flex w-full flex-col gap-4">
          <div className="max-w-2xl">
            <h1 className="font-serif text-[1.9rem] sm:text-5xl lg:text-[3.5rem] leading-[1.06] tracking-tight text-warm-ivory">
              {HOME_CONTENT.headline}
            </h1>

            <p className="mt-3 max-w-[48ch] text-sm sm:text-base leading-snug sm:leading-relaxed text-warm-ivory">
              {HOME_CONTENT.subline}
            </p>

            {/* Redesigned Two-Tier CTA Hierarchy */}
            <div className="mt-5 space-y-3">
              <div>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-sm bg-mango-yellow px-7 py-3 text-sm sm:text-base font-semibold text-dark-charcoal hover:bg-mango-yellow/90 whitespace-nowrap"
                >
                  <span>{HOME_CONTENT.primaryCta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-y-1 text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => onNavigateRoute('/d-talks')}
                  className="inline-flex min-h-[40px] items-center gap-1.5 pr-4 border-r border-warm-ivory/30 font-medium text-warm-ivory underline underline-offset-4 decoration-warm-ivory/45 hover:text-mango-yellow hover:decoration-mango-yellow whitespace-nowrap"
                >
                  <span>{HOME_CONTENT.thinkingCta}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigateRoute('/about')}
                  className="inline-flex min-h-[40px] items-center gap-1.5 pl-4 font-medium text-warm-ivory underline underline-offset-4 decoration-warm-ivory/45 hover:text-mango-yellow hover:decoration-mango-yellow whitespace-nowrap"
                >
                  <span>{HOME_CONTENT.aboutCta}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <p className="mt-3 text-xs font-medium text-muted-sage">
              {HOME_CONTENT.descriptor}
            </p>
          </div>

          <StrategyDeckBanner tone="dark" onOpenProjects={() => onNavigateRoute('/projects')} />
        </div>
      </div>

      {/* Contact / Let's Talk Modal */}
      {contactOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Let's Talk"
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-charcoal/80 p-4"
        >
          <div className="w-full max-w-md rounded-sm bg-warm-ivory p-5 sm:p-7 text-dark-charcoal border border-dark-charcoal/15 space-y-4">
            <div className="flex items-start justify-between gap-4 border-b border-dark-charcoal/15 pb-3">
              <div>
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-burnt-orange">
                  Contact
                </p>
                <h2 className="mt-0.5 font-serif text-2xl text-deep-pine">
                  Let&apos;s Talk
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                aria-label="Close contact dialog"
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center text-deep-pine hover:text-burnt-orange"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm leading-relaxed text-dark-charcoal/88">
              Working on a business problem, testing an idea, or exploring a perspective? Reach out directly.
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-deep-pine px-4 py-2 text-xs sm:text-sm font-semibold text-mango-yellow hover:bg-deep-pine/90"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Email Me</span>
              </a>

              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-sm border border-deep-pine/30 px-4 py-2 text-xs sm:text-sm font-semibold text-deep-pine hover:bg-deep-pine/10"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-sm border border-dark-charcoal/20 px-3.5 py-2 text-xs font-medium text-dark-charcoal hover:bg-dark-charcoal/5"
              >
                {copiedEmail ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedEmail ? 'Copied' : SITE_CONFIG.email}</span>
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-dark-charcoal/12 pt-3 text-xs text-dark-charcoal/75">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1 hover:underline tabular-nums"
              >
                <Phone className="h-3 w-3 text-burnt-orange" aria-hidden="true" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
