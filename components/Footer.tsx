import { getContent } from '@/content/content';

// ponytail: Lean footer with social links and location metadata
export default function Footer() {
  const content = getContent();

  return (
    <footer className="border-t border-border py-12 mt-16 md:mt-24">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm text-text-muted">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${content.personal.email}`}
              className="hover:text-text transition-colors"
            >
              {content.personal.email}
            </a>
            <a
              href={content.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={content.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              GitHub
            </a>
            <a
              href={content.personal.cvUrl}
              download="CV_Adam_Benbouazza.pdf"
              className="hover:text-text transition-colors"
            >
              CV (PDF)
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span>{content.personal.location}</span>
            <span>·</span>
            <span>© 2026 Adam Benbouazza</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
