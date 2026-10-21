import { getContent } from '@/content/content';

// ponytail: Focused, confident contact section without card wrappers or gimmicks
export default function ContactSection() {
  const content = getContent();

  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 space-y-8 max-w-3xl">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-sm text-text-muted">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-text font-medium">{content.footer.statusNote}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text">
            Get in touch
          </h2>

          <p className="text-[17px] text-text-muted leading-relaxed">
            I am currently open to Junior AI Engineer and Full-Stack roles with relocation to Europe or remote collaboration. Send me an email or connect directly on LinkedIn.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-2 text-base">
          <a
            href={`mailto:${content.personal.email}`}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-btn bg-accent text-accent-contrast hover:opacity-90 transition-opacity"
          >
            {content.personal.email}
          </a>

          <a
            href={content.personal.cvUrl}
            download="CV_Adam_Benbouazza.pdf"
            className="text-text hover:text-accent font-medium text-sm transition-colors"
          >
            Download CV (PDF) ↗
          </a>

          <a
            href={content.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent font-medium text-sm transition-colors"
          >
            LinkedIn ↗
          </a>

          <a
            href={content.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent font-medium text-sm transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
