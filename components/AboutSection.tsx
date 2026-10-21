import Image from 'next/image';
import { getContent } from '@/content/content';
import FadeUp from './FadeUp';

// ponytail: Human, first-person about section strictly within 60-80 words with zero "passionate" fluff
export default function AboutSection() {
  const content = getContent();

  return (
    <section id="about" className="py-16 md:py-28 border-b border-border/60">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                06 // Background
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text">
                Engineering Approach
              </h2>
            </div>
            <p className="text-sm font-mono text-text-muted max-w-md">
              Bridging machine learning models and high-reliability web architecture.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="rounded-card border border-border bg-surface p-6 sm:p-10 card-hover">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              {/* Photo with 1px border and 12px radius */}
              <div className="relative shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-card overflow-hidden border border-border bg-background">
                  <Image
                    src="/avatar.jpg"
                    alt="Adam Benbouazza"
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-surface border border-border text-[9px] font-mono text-accent">
                  AB
                </span>
              </div>

              {/* Bio: Exactly 73 words, confident, calm, zero fluff */}
              <div className="space-y-4 max-w-2xl">
                <p className="text-base sm:text-lg text-text leading-relaxed">
                  I am an engineer who connects machine learning pipelines with production web software. With a Master&apos;s degree in Computer Science &amp; AI and direct experience in high-volume industrial environments, I focus on software that solves operational bottlenecks without unnecessary complexity.
                </p>
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  At LEONI, I trained XGBoost models to isolate manufacturing anomalies and built real-time telemetry platforms. I am based in Morocco and actively seeking full-time AI Engineer or Full-Stack roles with relocation to Europe.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
                  <span className="text-accent">Available for: Full-Time / Relocation</span>
                  <span className="text-border" aria-hidden="true">·</span>
                  <span className="text-text-muted">Target: Europe &amp; Global Teams</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
