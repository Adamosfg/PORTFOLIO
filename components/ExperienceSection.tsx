import { getContent } from '@/content/content';

// ponytail: Compact experience timeline with combined education & certifications block (no cards/borders)
export default function ExperienceSection() {
  const content = getContent();

  return (
    <section id="experience" className="py-16 md:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Work Experience */}
        <div className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text">
              Experience
            </h2>
            <p className="text-[17px] text-text-muted max-w-2xl">
              Engineering work in industrial manufacturing, private healthcare, and national media.
            </p>
          </div>

          <div className="space-y-10 max-w-3xl">
            {content.experience.map((exp) => (
              <div key={exp.company} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg font-semibold text-text">
                    {exp.role} <span className="text-text-muted font-normal">at {exp.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-text-muted whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <div className="text-sm text-text-muted font-normal">
                  {exp.location}
                </div>

                <ul className="space-y-1.5 pt-1 text-[17px] text-text-muted leading-relaxed">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-accent text-sm mt-1 shrink-0">―</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Combined Education & Top 2 Certifications Block (No cards, plain text block) */}
        <div className="max-w-3xl pt-6 space-y-8">
          <h3 className="text-2xl font-semibold tracking-tight text-text">
            Education &amp; certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[17px]">
            {/* Education */}
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-wider text-text">
                Degrees
              </div>
              {content.education.map((edu) => (
                <div key={edu.degree} className="space-y-0.5">
                  <div className="font-medium text-text text-base">{edu.degree}</div>
                  <div className="text-sm text-text-muted">{edu.institution}</div>
                  <div className="text-sm font-mono text-text-muted">{edu.period} · {edu.location}</div>
                </div>
              ))}
            </div>

            {/* Top 2 Certifications Only */}
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-wider text-text">
                Certifications
              </div>
              {content.certifications.slice(0, 2).map((cert) => (
                <div key={cert.title} className="space-y-0.5">
                  <div className="font-medium text-text text-base">{cert.title}</div>
                  <div className="text-sm text-text-muted">{cert.issuer}</div>
                  <div className="text-sm font-mono text-accent">{cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
