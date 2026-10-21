import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getContent } from '@/content/content';
import InteractiveArchitecture from '@/components/InteractiveArchitecture';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const content = getContent();
  return content.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getContent();
  const project = content.projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.outcome,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getContent();
  const projectIndex = content.projects.findIndex((p) => p.slug === slug);
  const project = content.projects[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projectIndex > 0 ? content.projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < content.projects.length - 1 ? content.projects[projectIndex + 1] : null;

  return (
    <div className="py-12 sm:py-24">
      <article className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <span>←</span>
            <span>Back to selected work</span>
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-6 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
            <span className="text-text font-semibold">{project.client}</span>
            <span className="text-border" aria-hidden="true">·</span>
            <span>{project.role}</span>
            <span className="text-border" aria-hidden="true">·</span>
            <span className="font-mono">{project.period}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-text leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-text leading-relaxed font-medium">
            {project.outcome}
          </p>

          <p className="text-base font-medium text-accent">
            {project.keyStats}
          </p>

          {/* 3-4 Mono Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-mono rounded-btn bg-surface border border-border text-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Problem */}
        <section className="space-y-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
            The problem
          </h2>
          <div className="space-y-4 text-[17px] text-text-muted leading-relaxed">
            <p>
              On high-throughput automotive wiring assembly lines (Volvo MEP1 program), intermittent crimping and wire-stripping defects caused costly scrap parts and complex post-assembly quality audits.
            </p>
            <p>
              Shop-floor technicians only received binary pass/fail signals after defects had already propagated, requiring up to 25 minutes of manual multimeter inspections and log correlation to diagnose the root cause.
            </p>
          </div>
        </section>

        {/* Constraints */}
        <section className="space-y-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
            Engineering constraints
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-card border border-border bg-surface p-6 space-y-2">
              <div className="text-sm font-semibold text-text">Zero line stoppage</div>
              <p className="text-[15px] text-text-muted leading-relaxed">
                Telemetry collectors must never block or degrade industrial PLC hardware cycle times.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-6 space-y-2">
              <div className="text-sm font-semibold text-text">High event velocity</div>
              <p className="text-[15px] text-text-muted leading-relaxed">
                50,000+ daily multi-sensor readings per line requiring sub-100ms ingestion and persistent indexing.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-6 space-y-2">
              <div className="text-sm font-semibold text-text">Explainability mandate</div>
              <p className="text-[15px] text-text-muted leading-relaxed">
                Operators cannot act on black-box probabilities; every alert had to detail the exact physical sensor delta.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-6 space-y-2">
              <div className="text-sm font-semibold text-text">Data privacy</div>
              <p className="text-[15px] text-text-muted leading-relaxed">
                Strict separation of production telemetry from internal client network parameters.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
            Architecture
          </h2>
          <p className="text-[17px] text-text-muted max-w-3xl leading-relaxed">
            Decoupled three-tier architecture: an asynchronous FastAPI ingestion gateway, an XGBoost with TreeSHAP inference engine, time-partitioned PostgreSQL storage, and a React supervision dashboard.
          </p>

          <InteractiveArchitecture />
        </section>

        {/* Key Decisions with Trade-offs */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
            Key decisions &amp; trade-offs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-card border border-border bg-surface p-7 space-y-3">
              <h3 className="text-lg font-semibold text-text">
                XGBoost with TreeSHAP over Deep Learning
              </h3>
              <p className="text-sm font-medium text-accent">
                Chosen: Gradient-boosted trees with local Shapley values
              </p>
              <p className="text-[15px] text-text-muted leading-relaxed">
                Tabular sensor logs have clear feature thresholds (pressure, temperature, depth). XGBoost achieved 85.5% precision with zero GPU requirements, and TreeSHAP computed feature contributions in 8ms so operators immediately knew which physical actuator drifted.
              </p>
            </div>

            <div className="rounded-card border border-border bg-surface p-7 space-y-3">
              <h3 className="text-lg font-semibold text-text">
                Composite PostgreSQL indexing over InfluxDB
              </h3>
              <p className="text-sm font-medium text-accent">
                Chosen: PostgreSQL with composite B-tree indexing and weekly partitions
              </p>
              <p className="text-[15px] text-text-muted leading-relaxed">
                At 50,000 records/day, PostgreSQL easily handled the volume when queries were properly indexed. Keeping relational metadata (operators, shift schedules, part numbers) in the same database eliminated cross-database consistency issues.
              </p>
            </div>

            <div className="rounded-card border border-border bg-surface p-7 space-y-3">
              <h3 className="text-lg font-semibold text-text">
                Async FastAPI microservice over monolithic Django
              </h3>
              <p className="text-sm font-medium text-accent">
                Chosen: Lightweight FastAPI ASGI microservice with typed Pydantic models
              </p>
              <p className="text-[15px] text-text-muted leading-relaxed">
                The ingestion gateway needed to accept high-concurrency sensor bursts with near-zero latency. FastAPI cut container startup time to 1.2s and consumed &lt;80MB RAM per worker replica.
              </p>
            </div>

            <div className="rounded-card border border-border bg-surface p-7 space-y-3">
              <h3 className="text-lg font-semibold text-text">
                Automated test suites with &gt;80% coverage
              </h3>
              <p className="text-sm font-medium text-accent">
                Chosen: Pytest unit tests for ML pipeline transformations + Jest integration tests
              </p>
              <p className="text-[15px] text-text-muted leading-relaxed">
                In an industrial manufacturing context, undetected regressions lead to false alarms and operator alert fatigue. Strict test gates in CI/CD ensured reliable telemetry ingestion.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
            Production results
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-card border border-border bg-surface p-6 space-y-1">
              <div className="text-2xl sm:text-3xl font-semibold text-accent">85.5%</div>
              <div className="text-sm font-medium text-text">Model precision</div>
              <p className="text-sm text-text-muted leading-relaxed">
                Classified scrap anomalies before parts reached final assembly inspection.
              </p>
            </div>

            <div className="rounded-card border border-border bg-surface p-6 space-y-1">
              <div className="text-2xl sm:text-3xl font-semibold text-accent">-55%</div>
              <div className="text-sm font-medium text-text">Query latency</div>
              <p className="text-sm text-text-muted leading-relaxed">
                Optimized shift queries down to 170ms via targeted composite indexing.
              </p>
            </div>

            <div className="rounded-card border border-border bg-surface p-6 space-y-1">
              <div className="text-2xl sm:text-3xl font-semibold text-accent">50,000+</div>
              <div className="text-sm font-medium text-text">Daily telemetry records</div>
              <p className="text-sm text-text-muted leading-relaxed">
                Processed continuously without line latency or packet drops.
              </p>
            </div>

            <div className="rounded-card border border-border bg-surface p-6 space-y-1">
              <div className="text-2xl sm:text-3xl font-semibold text-accent">&gt;80%</div>
              <div className="text-sm font-medium text-text">Test coverage</div>
              <p className="text-sm text-text-muted leading-relaxed">
                Full automated test coverage across prediction and ingestion modules.
              </p>
            </div>
          </div>
        </section>

        {/* What I'd Do Differently */}
        <section className="space-y-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
            What I would do differently
          </h2>
          <div className="space-y-3 text-[17px] text-text-muted leading-relaxed">
            <p>
              1. I would introduce an in-memory Redis ring buffer ahead of PostgreSQL to smooth out extreme burst traffic during shift changeovers.
            </p>
            <p>
              2. I would implement automated model drift monitoring to alert when physical crimper blades degrade beyond calibration thresholds.
            </p>
          </div>
        </section>

        {/* Prev / Next Navigation */}
        <nav className="border-t border-border pt-8 flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={prevProject.caseStudyUrl}
              className="text-left group"
            >
              <span className="text-sm text-text-muted block">← Previous project</span>
              <span className="text-base font-semibold text-text group-hover:text-accent transition-colors">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={nextProject.caseStudyUrl}
              className="text-right group"
            >
              <span className="text-sm text-text-muted block">Next project →</span>
              <span className="text-base font-semibold text-text group-hover:text-accent transition-colors">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </div>
  );
}
