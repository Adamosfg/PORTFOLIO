import { MetadataRoute } from 'next';
import { getContent } from '@/content/content';

// ponytail: Native zero-dependency sitemap generation
export default function sitemap(): MetadataRoute.Sitemap {
  const content = getContent();
  const baseUrl = content.meta.url;

  const projectUrls = content.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
