import Link from 'next/link';
import { Project } from '@/content/content';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

// ponytail: Flattened card with zero nested boxes, no fake canvas panels, and inline stats
export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const displayTags = project.tags.slice(0, 4);

  return (
    <article
      className={`project-card rounded-card border border-border bg-surface p-7 sm:p-9 flex flex-col justify-between ${
        featured ? 'min-h-[260px]' : 'min-h-[240px]'
      }`}
    >
      <div className="space-y-4">
        {/* Meta Line: Company & Date (Mono font ONLY for dates) */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-text-muted">
          <span className="text-text font-semibold">{project.client}</span>
          <span className="font-mono text-sm">{project.period}</span>
        </div>

        {/* Title */}
        <h3
          className={`font-semibold tracking-tight text-text ${
            featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}
        >
          <Link
            href={project.caseStudyUrl}
            className="hover:text-accent transition-colors"
          >
            {project.title}
          </Link>
        </h3>

        {/* One-Line Outcome */}
        <p className="text-[17px] text-text leading-relaxed">
          {project.outcome}
        </p>

        {/* Inline Stats (Single text line, max 2 numbers, NO nested boxes) */}
        <p className="text-sm font-medium text-accent">
          {project.keyStats}
        </p>
      </div>

      {/* Bottom Row: Tags + Link */}
      <div className="pt-6 mt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
        {/* 3-4 Mono tech tags */}
        <div className="flex flex-wrap gap-2">
          {displayTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-sm font-mono rounded-btn bg-background border border-border text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Direct Link */}
        <Link
          href={project.caseStudyUrl}
          className="text-sm font-medium text-text hover:text-accent transition-colors inline-flex items-center gap-1.5"
        >
          <span>Read case study</span>
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}
