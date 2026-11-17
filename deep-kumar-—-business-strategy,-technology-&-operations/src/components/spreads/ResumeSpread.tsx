import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { PRIMARY_NAV_ITEMS, PrimaryRoutePath, SITE_CONFIG } from '../../config/siteConfig';
import { RESUME_CONTENT } from '../../data/siteContent';
import { StrategyDeckBanner } from '../StrategyDeckBanner';

interface ResumeSpreadProps {
  onNavigateRoute: (route: PrimaryRoutePath) => void;
}

export function ResumeSpread({ onNavigateRoute }: ResumeSpreadProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Clipboard fallback not needed
    }
  };

  return (
    <section
      aria-label="Resume"
      className="mx-auto max-w-[1120px] py-2 md:py-4 text-dark-charcoal print-only-sheet"
    >
      {/* Top Resume Masthead + Direct PDF Download & Print Controls */}
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-3.5 border-b-2 border-deep-pine pb-3.5">
        <div>
          <p className="no-print text-xs font-medium tracking-[0.14em] uppercase text-burnt-orange">
            Curriculum Vitae
          </p>
          <h1 className="mt-0.5 font-serif text-3xl sm:text-4xl tracking-tight text-deep-pine">
            {RESUME_CONTENT.name}
          </h1>
          <p className="text-sm font-semibold text-burnt-orange mt-0.5">
            {RESUME_CONTENT.headline}
          </p>

          <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-2 items-center text-xs text-dark-charcoal/85">
            <span className="inline-flex items-center gap-2 leading-none">
              <MapPin className="h-3.5 w-3.5 text-burnt-orange shrink-0" aria-hidden="true" />
              <span>{RESUME_CONTENT.contactLine.location}</span>
            </span>

            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 leading-none hover:underline tabular-nums"
            >
              <Phone className="h-3.5 w-3.5 text-burnt-orange shrink-0" aria-hidden="true" />
              <span>{RESUME_CONTENT.contactLine.phone}</span>
            </a>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 leading-none hover:underline"
            >
              <Mail className="h-3.5 w-3.5 text-burnt-orange shrink-0" aria-hidden="true" />
              <span>{RESUME_CONTENT.contactLine.email}</span>
            </a>

            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 leading-none hover:underline"
            >
              <Linkedin className="h-3.5 w-3.5 text-burnt-orange shrink-0" aria-hidden="true" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="h-3 w-3 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="no-print flex flex-wrap items-center gap-2 shrink-0">
          <a
            href={SITE_CONFIG.resumePdfUrl}
            download="Deep_Kumar_Business_Analyst_Resume.pdf"
            className="inline-flex min-h-[42px] items-center gap-2 rounded-sm bg-deep-pine px-4 py-2 text-xs font-semibold text-mango-yellow hover:bg-deep-pine/90"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>Download Resume (PDF)</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex min-h-[42px] items-center gap-1.5 rounded-sm border border-deep-pine/30 px-3.5 py-2 text-xs font-medium text-deep-pine hover:bg-deep-pine/8"
          >
            {copiedEmail ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
          </button>
        </div>
      </header>

      {/* Summary & Core Skills */}
      <div className="mt-4 space-y-4">
        <section>
          <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-deep-pine border-b border-dark-charcoal/15 pb-1">
            Professional Summary
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-dark-charcoal/90">
            {RESUME_CONTENT.professionalSummary}
          </p>
        </section>

        <section>
          <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-deep-pine border-b border-dark-charcoal/15 pb-1">
            Core Skills
          </h2>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 text-xs sm:text-[13px]">
            {RESUME_CONTENT.coreSkills.map((skill) => (
              <p key={skill.group} className="leading-relaxed text-dark-charcoal/88">
                <span className="font-bold text-deep-pine">{skill.group}:</span> {skill.items}
              </p>
            ))}
          </div>
        </section>
      </div>

      {/* Experience + Education, Certifications & Leadership */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left: Professional & Additional Experience (Role line 1, Company line 2) */}
        <div className="lg:col-span-7 space-y-4">
          <section>
            <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-deep-pine border-b border-dark-charcoal/15 pb-1">
              Professional Experience
            </h2>
            <div className="mt-2.5 space-y-3.5">
              {RESUME_CONTENT.professionalExperience.map((job) => (
                <div key={`${job.company}-${job.period}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-bold text-deep-pine">{job.role}</h3>
                    <span className="text-xs text-dark-charcoal/70 tabular-nums">
                      {job.location} · {job.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold text-burnt-orange">
                    {job.company}
                  </p>
                  <ul className="mt-1.5 space-y-1 text-xs sm:text-[13px] leading-relaxed text-dark-charcoal/88">
                    {job.highlights.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span aria-hidden="true" className="text-burnt-orange font-bold">
                          •
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-deep-pine border-b border-dark-charcoal/15 pb-1">
              Additional Experience
            </h2>
            <div className="mt-2.5 space-y-3">
              {RESUME_CONTENT.additionalExperience.map((job) => (
                <div key={`${job.company}-${job.period}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-bold text-deep-pine">{job.role}</h3>
                    <span className="text-xs text-dark-charcoal/70 tabular-nums">
                      {job.location} · {job.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold text-burnt-orange">
                    {job.company}
                  </p>
                  <ul className="mt-1 space-y-0.5 text-xs sm:text-[13px] text-dark-charcoal/86">
                    {job.highlights.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span aria-hidden="true" className="text-burnt-orange font-bold">
                          •
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Education (On-going MBA Batch of 2028 PGDM ExP + B.Tech), Certifications & Leadership */}
        <div className="lg:col-span-5 space-y-4">
          <section>
            <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-deep-pine border-b border-dark-charcoal/15 pb-1">
              Education
            </h2>
            <div className="mt-2.5 space-y-3">
              {RESUME_CONTENT.education.map((edu) => (
                <div key={edu.degree}>
                  <h3 className="text-sm font-bold text-deep-pine">{edu.degree}</h3>
                  <p className="text-xs sm:text-[13px] text-dark-charcoal/88 mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-semibold text-burnt-orange mt-0.5 tabular-nums">
                    {edu.year} · {edu.grade}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-deep-pine border-b border-dark-charcoal/15 pb-1">
              Certifications
            </h2>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-[13px] text-dark-charcoal/88">
              {RESUME_CONTENT.certifications.map((cert) => (
                <li key={cert.title}>
                  <span className="font-semibold text-deep-pine">{cert.title}</span> — {cert.issuer}
                  {cert.subItems.length > 0 && (
                    <ul className="mt-0.5 pl-3 space-y-0.5 text-xs text-dark-charcoal/75">
                      {cert.subItems.map((sub) => (
                        <li key={sub}>– {sub}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-deep-pine border-b border-dark-charcoal/15 pb-1">
              Leadership &amp; Activities
            </h2>
            <ul className="mt-2 space-y-1 text-xs sm:text-[13px] text-dark-charcoal/88">
              {RESUME_CONTENT.leadership.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-deep-pine">{item.title}:</span> {item.detail}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* StrategyDeck CTA + Global Colophon Footer */}
      <div className="mt-5 space-y-2.5">
        <StrategyDeckBanner tone="light" onOpenProjects={() => onNavigateRoute('/projects')} />
        <footer className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs text-dark-charcoal/75">
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateRoute('/');
              }}
              className="text-deep-pine hover:text-burnt-orange hover:underline"
            >
              Home
            </a>
            {PRIMARY_NAV_ITEMS.map((item) => (
              <a
                key={item.route}
                href={item.route}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateRoute(item.route);
                }}
                className="text-deep-pine hover:text-burnt-orange hover:underline"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <span>© Deep Kumar. All rights reserved.</span>
        </footer>
      </div>
    </section>
  );
}
