import Image from 'next/image';
import { getContent } from '@/content/content';

// ponytail: Clean, high-impact Hero with desktop photo-right / mobile photo-top layout and adjacent social icons
export default function Hero() {
  const content = getContent();

  return (
    <section className="pt-12 pb-24 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 md:gap-14">
          {/* Left Column: Text & CTAs */}
          <div className="flex-1 space-y-6 max-w-2xl">
            {/* Status Line */}
            <div className="inline-flex items-center gap-2 rounded-btn border border-border bg-surface px-3 py-1.5 text-sm text-text-muted">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span>{content.personal.statusLine}</span>
            </div>

            {/* H1 around 72px desktop */}
            <h1 className="hero-title text-text">
              {content.personal.name}
            </h1>

            {/* Tagline max 2 lines text-wrap: balance */}
            <p className="text-xl sm:text-2xl text-text font-medium leading-snug [text-wrap:balance]">
              {content.hero.tagline}
            </p>

            {/* Proof line */}
            <p className="text-[17px] text-text-muted leading-relaxed">
              {content.hero.proofLine}
            </p>

            {/* CTAs + Adjacent Social Icons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={content.hero.ctaPrimary.href}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-btn bg-accent text-accent-contrast hover:opacity-90 transition-opacity"
              >
                {content.hero.ctaPrimary.label}
                <span className="ml-1.5 font-sans">↓</span>
              </a>

              <a
                href={content.hero.ctaSecondary.href}
                download="CV_Adam_Benbouazza.pdf"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-btn border border-border bg-surface text-text hover:border-accent transition-colors"
              >
                {content.hero.ctaSecondary.label}
                <span className="ml-1.5 font-sans">↗</span>
              </a>

              {/* Small icon links beside the CTAs */}
              <div className="flex items-center gap-2 pl-1">
                {/* GitHub icon */}
                <a
                  href={content.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-btn border border-border bg-surface text-text-muted hover:text-text hover:border-accent transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>

                {/* LinkedIn icon */}
                <a
                  href={content.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-btn border border-border bg-surface text-text-muted hover:text-text hover:border-accent transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Email icon */}
                <a
                  href={`mailto:${content.personal.email}`}
                  className="p-2.5 rounded-btn border border-border bg-surface text-text-muted hover:text-text hover:border-accent transition-colors"
                  aria-label={`Email ${content.personal.email}`}
                  title={`Email ${content.personal.email}`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Desktop) / Top (Mobile): Photo rounded square ~180px */}
          <div className="shrink-0 self-start md:self-center">
            <div className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] rounded-[16px] overflow-hidden border border-border bg-surface shadow-sm">
              <Image
                src="/avatar.jpg"
                alt={content.personal.name}
                width={180}
                height={180}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
