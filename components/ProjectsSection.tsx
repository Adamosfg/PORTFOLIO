import { getContent } from '@/content/content';
import ProjectCard from './ProjectCard';

// ponytail: Selected work section with full-width featured LEONI card + two side-by-side cards
export default function ProjectsSection() {
  const content = getContent();
  const [featuredProject, ...otherProjects] = content.projects;

  return (
    <section id="projects" className="py-16 md:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
        {/* Section Heading: Plain sentence case, no terminal "//" */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text">
            Selected work
          </h2>
          <p className="text-[17px] text-text-muted max-w-2xl">
            Production machine learning pipelines and distributed systems built for manufacturing, healthcare, and national broadcasting.
          </p>
        </div>

        {/* 1. Large Featured Card (Full Width): LEONI */}
        {featuredProject && (
          <div>
            <ProjectCard project={featuredProject} featured={true} />
          </div>
        )}

        {/* 2. Side-by-side cards below it: Healthcare & SNRT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
