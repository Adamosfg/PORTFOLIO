import { getContent } from '@/content/content';

// ponytail: Plain grouped text lines with zero card borders or percentage bars
export default function StackSection() {
  const content = getContent();

  return (
    <section id="stack" className="py-16 md:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
        {/* Section Heading: Plain sentence case */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text">
            Stack
          </h2>
          <p className="text-[17px] text-text-muted max-w-2xl">
            Core technologies and tools I use in production and defend in technical interviews.
          </p>
        </div>

        {/* Plain grouped text lines (No cards, no borders) */}
        <div className="space-y-6 max-w-3xl pt-2">
          {content.stackGroups.map((group) => (
            <div key={group.name} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 text-[17px]">
              <span className="font-semibold text-text whitespace-nowrap sm:w-48 shrink-0">
                {group.name}
              </span>
              <span className="text-text-muted leading-relaxed font-mono text-sm">
                {group.items.join(' · ')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
