import { useEffect } from 'react';
import { ArrowUpRight, Linkedin, Menu, X } from 'lucide-react';
import {
  PRIMARY_NAV_ITEMS,
  PrimaryRoutePath,
  SITE_CONFIG,
  SpreadMeta,
} from '../config/siteConfig';

interface TopNavProps {
  currentSpread: SpreadMeta;
  activeRoute: PrimaryRoutePath;
  isScrolledInside: boolean;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: (open: boolean) => void;
  onNavigateRoute: (route: PrimaryRoutePath) => void;
}

export function TopNav({
  currentSpread,
  activeRoute,
  isScrolledInside,
  mobileMenuOpen,
  onToggleMobileMenu,
  onNavigateRoute,
}: TopNavProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        onToggleMobileMenu(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileMenuOpen, onToggleMobileMenu]);

  const isDarkSurface = currentSpread.isDark;

  const headerSurfaceClass = (() => {
    if (!isScrolledInside) {
      return isDarkSurface
        ? 'bg-transparent text-warm-ivory border-b border-transparent'
        : 'bg-transparent text-dark-charcoal border-b border-transparent';
    }
    if (currentSpread.theme === 'pine') {
      return 'bg-deep-pine text-warm-ivory border-b border-warm-ivory/15';
    }
    if (currentSpread.theme === 'burntOrange') {
      return 'bg-burnt-orange text-warm-ivory border-b border-warm-ivory/18';
    }
    if (currentSpread.theme === 'sage') {
      return 'bg-muted-sage text-dark-charcoal border-b border-dark-charcoal/15';
    }
    return 'bg-warm-ivory text-dark-charcoal border-b border-dark-charcoal/12';
  })();

  const linkedinButtonClass = isDarkSurface
    ? 'bg-mango-yellow text-dark-charcoal hover:bg-mango-yellow/90'
    : 'bg-deep-pine text-warm-ivory hover:bg-deep-pine/90';

  return (
    <>
      <header
        className={`no-print fixed top-0 left-0 right-0 z-40 h-12 md:h-14 ${headerSurfaceClass}`}
      >
        <div className="mx-auto flex h-full max-w-[1380px] items-center justify-between gap-4 md:gap-8 px-4 sm:px-6 lg:px-10">
          {/* Zone 1: Single-line Brand Wordmark (lands on Home) */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateRoute('/');
              onToggleMobileMenu(false);
            }}
            aria-current={activeRoute === '/' ? 'page' : undefined}
            className="font-serif text-lg md:text-xl tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mango-yellow"
          >
            {SITE_CONFIG.brandName}
          </a>

          {/* Zone 2: Desktop Primary Pages */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium"
          >
            {PRIMARY_NAV_ITEMS.map((item) => {
              const isActive = activeRoute === item.route;
              return (
                <a
                  key={item.route}
                  href={item.route}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateRoute(item.route);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mango-yellow ${
                    isActive ? 'opacity-100 font-semibold' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 right-0 -bottom-0.5 h-[2px] ${
                        isDarkSurface ? 'bg-mango-yellow' : 'bg-deep-pine'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Dedicated Connect on LinkedIn Button (Mobile + Desktop) & Mobile Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className={`inline-flex min-h-[36px] md:min-h-[38px] items-center gap-1.5 rounded-sm px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mango-yellow ${linkedinButtonClass}`}
            >
              <span>Connect on</span>
              <Linkedin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => onToggleMobileMenu(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-magazine-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mango-yellow"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-magazine-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="no-print fixed inset-0 z-50 flex flex-col justify-between bg-deep-pine text-warm-ivory px-5 pt-4 pb-6 overflow-y-auto md:hidden"
        >
          <div>
            <div className="flex items-center justify-between border-b border-warm-ivory/15 pb-3">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateRoute('/');
                  onToggleMobileMenu(false);
                }}
                className="font-serif text-xl tracking-tight text-warm-ivory"
              >
                {SITE_CONFIG.brandName}
              </a>
              <button
                type="button"
                onClick={() => onToggleMobileMenu(false)}
                aria-label="Close navigation menu"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-warm-ivory hover:text-mango-yellow"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-xs tracking-[0.14em] uppercase text-muted-sage">
              {SITE_CONFIG.positioning}
            </p>

            <nav aria-label="Mobile pages" className="mt-3 divide-y divide-warm-ivory/12">
              {PRIMARY_NAV_ITEMS.map((item) => {
                const isActive = activeRoute === item.route;
                return (
                  <a
                    key={item.route}
                    href={item.route}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateRoute(item.route);
                      onToggleMobileMenu(false);
                    }}
                    className="flex min-h-[50px] items-center justify-between py-2.5 text-left"
                  >
                    <span
                      className={`font-serif text-2xl ${
                        isActive ? 'text-mango-yellow' : 'text-warm-ivory'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="text-xs text-muted-sage">Open →</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="mt-5 space-y-2.5 border-t border-warm-ivory/15 pt-4">
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onToggleMobileMenu(false)}
              className="flex min-h-[44px] w-full items-center justify-between rounded-sm bg-mango-yellow px-4 py-2.5 text-sm font-semibold text-dark-charcoal"
            >
              <span className="inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                Connect on LinkedIn
              </span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigateRoute('/projects');
                onToggleMobileMenu(false);
              }}
              className="flex min-h-[44px] w-full items-center justify-between rounded-sm border border-warm-ivory/25 px-4 py-2.5 text-sm font-medium text-warm-ivory"
            >
              <span>StrategyDeck · Coming Soon</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <p className="pt-1 text-xs text-muted-sage/85">
              {SITE_CONFIG.location} · {SITE_CONFIG.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
