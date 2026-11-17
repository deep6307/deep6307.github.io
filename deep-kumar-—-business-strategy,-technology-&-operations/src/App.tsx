import { useCallback, useEffect, useRef, useState } from 'react';
import {
  MAGAZINE_SPREADS,
  PRIMARY_NAV_ITEMS,
  PrimaryRoutePath,
} from './config/siteConfig';
import { MagazineFolioRail } from './components/MagazineFolioRail';
import { TopNav } from './components/TopNav';
import { AboutSpread } from './components/spreads/AboutSpread';
import { CoverSpread } from './components/spreads/CoverSpread';
import { DTalksSpread } from './components/spreads/DTalksSpread';
import { ProjectsSpread } from './components/spreads/ProjectsSpread';
import { ResumeSpread } from './components/spreads/ResumeSpread';

function isInteractiveTouchTarget(target: EventTarget | null): boolean {
  return (
    target instanceof Element &&
    target.closest('a, button, input, textarea, select, [role="button"], [data-no-swipe]') !== null
  );
}

function parseLocation(): number {
  if (typeof window === 'undefined') {
    return 0;
  }
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (pathname === '/') {
    return 0;
  }
  if (pathname === '/research' || pathname === '/articles' || pathname === '/case-studies') {
    return 3;
  }
  if (pathname === '/contact') {
    return 4;
  }

  const navMatch = PRIMARY_NAV_ITEMS.find((item) => item.route === pathname);
  return navMatch ? navMatch.targetSpreadIndex : 0;
}

function updateMetaTag(selector: string, content: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute('content', content);
}

export default function App() {
  const [spreadIndex, setSpreadIndex] = useState<number>(() => parseLocation());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolledInside, setIsScrolledInside] = useState(false);

  const spreadScrollRef = useRef<HTMLDivElement | null>(null);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const wheelLockUntilRef = useRef<number>(0);

  const currentSpread = MAGAZINE_SPREADS[spreadIndex] || MAGAZINE_SPREADS[0];
  const activeRoute: PrimaryRoutePath = currentSpread.route;

  // Sync browser back/forward history
  useEffect(() => {
    const onPopState = () => {
      setSpreadIndex(parseLocation());
      setIsScrolledInside(false);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Update SEO document title and OpenGraph/Twitter tags dynamically
  useEffect(() => {
    document.title = currentSpread.seoTitle;
    updateMetaTag('meta[name="description"]', currentSpread.seoDescription);
    updateMetaTag('meta[property="og:title"]', currentSpread.seoTitle);
    updateMetaTag('meta[property="og:description"]', currentSpread.seoDescription);
    updateMetaTag('meta[name="twitter:title"]', currentSpread.seoTitle);
    updateMetaTag('meta[name="twitter:description"]', currentSpread.seoDescription);
  }, [currentSpread]);

  const goToSpread = useCallback((targetIndex: number, pushHistory = true) => {
    const clamped = Math.max(0, Math.min(MAGAZINE_SPREADS.length - 1, targetIndex));
    setSpreadIndex(clamped);
    setIsScrolledInside(false);

    if (spreadScrollRef.current) {
      spreadScrollRef.current.scrollTop = 0;
    }

    if (pushHistory && typeof window !== 'undefined') {
      const targetRoute = MAGAZINE_SPREADS[clamped].route;
      if (window.location.pathname !== targetRoute) {
        window.history.pushState({}, '', targetRoute);
      }
    }
  }, []);

  const navigateRoute = useCallback(
    (route: PrimaryRoutePath) => {
      if (route === '/') {
        goToSpread(0, true);
        return;
      }
      const match = PRIMARY_NAV_ITEMS.find((n) => n.route === route);
      goToSpread(match ? match.targetSpreadIndex : 0, true);
    },
    [goToSpread]
  );

  const turnNext = useCallback(() => {
    if (spreadIndex < MAGAZINE_SPREADS.length - 1) {
      goToSpread(spreadIndex + 1, true);
    }
  }, [spreadIndex, goToSpread]);

  const turnPrev = useCallback(() => {
    if (spreadIndex > 0) {
      goToSpread(spreadIndex - 1, true);
    }
  }, [spreadIndex, goToSpread]);

  // Desktop keyboard navigation (ArrowLeft / ArrowRight / PageUp / PageDown)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mobileMenuOpen) return;
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        turnNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        turnPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, turnNext, turnPrev]);

  // Desktop horizontal wheel / trackpad & boundary vertical wheel switching
  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (mobileMenuOpen) return;
      const now = Date.now();
      if (now < wheelLockUntilRef.current) return;

      const el = spreadScrollRef.current;
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      if (absX > 28 && absX > absY * 1.15) {
        wheelLockUntilRef.current = now + 260;
        if (e.deltaX > 0) turnNext();
        else turnPrev();
        return;
      }

      if (el && absY > 34) {
        const atTop = el.scrollTop <= 2;
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4;
        if (e.deltaY > 0 && atBottom) {
          wheelLockUntilRef.current = now + 280;
          turnNext();
        } else if (e.deltaY < 0 && atTop) {
          wheelLockUntilRef.current = now + 280;
          turnPrev();
        }
      }
    },
    [mobileMenuOpen, turnNext, turnPrev]
  );

  // Mobile touch swipe navigation. Interactive controls must retain their taps:
  // otherwise a small finger movement can trigger a page turn before a link's click.
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (
      mobileMenuOpen ||
      e.touches.length !== 1 ||
      isInteractiveTouchTarget(e.target)
    ) {
      touchStartRef.current = null;
      return;
    }
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now(),
    };
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isInteractiveTouchTarget(e.target)) {
      touchStartRef.current = null;
      return;
    }
    if (mobileMenuOpen || !touchStartRef.current || e.changedTouches.length !== 1) {
      touchStartRef.current = null;
      return;
    }
    const start = touchStartRef.current;
    touchStartRef.current = null;

    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    const elapsed = Date.now() - start.time;
    if (elapsed > 750) return;

    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (absX > 46 && absX > absY * 1.15) {
      if (dx < 0) turnNext();
      else turnPrev();
      return;
    }

    const el = spreadScrollRef.current;
    if (el && absY > 52 && absY > absX * 1.15) {
      const atTop = el.scrollTop <= 4;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 6;
      if (dy < 0 && atBottom) {
        turnNext();
      } else if (dy > 0 && atTop) {
        turnPrev();
      }
    }
  };

  const renderSpread = () => {
    switch (currentSpread.id) {
      case 'home':
        return <CoverSpread onNavigateRoute={navigateRoute} />;
      case 'about':
        return <AboutSpread onNavigateRoute={navigateRoute} />;
      case 'projects':
        return <ProjectsSpread />;
      case 'd-talks':
        return <DTalksSpread onNavigateRoute={navigateRoute} />;
      case 'resume':
        return <ResumeSpread onNavigateRoute={navigateRoute} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="print-root-shell relative h-dvh w-screen overflow-hidden"
      style={{ backgroundColor: currentSpread.bgHex }}
    >
      <TopNav
        currentSpread={currentSpread}
        activeRoute={activeRoute}
        isScrolledInside={isScrolledInside}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={setMobileMenuOpen}
        onNavigateRoute={navigateRoute}
      />

      {/* Instant Full-Screen Spread Stage (zero transition animations) */}
      <main
        className="print-root-shell h-full w-full relative overflow-hidden"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          key={currentSpread.id}
          style={{ backgroundColor: currentSpread.bgHex }}
          className="print-root-shell absolute inset-0 h-full w-full"
        >
          <div
            ref={spreadScrollRef}
            onScroll={(e) => {
              const top = e.currentTarget.scrollTop;
              setIsScrolledInside(top > 12);
            }}
            className="spread-scroll h-full w-full overflow-y-auto overscroll-contain pt-13 md:pt-16 pb-11 md:pb-12 px-3 sm:px-6 lg:px-10 print-only-sheet"
          >
            {renderSpread()}
          </div>
        </div>
      </main>

      <MagazineFolioRail
        currentIndex={spreadIndex}
        currentSpread={currentSpread}
        onGoToSpread={(idx) => goToSpread(idx, true)}
        onPrev={turnPrev}
        onNext={turnNext}
      />
    </div>
  );
}
