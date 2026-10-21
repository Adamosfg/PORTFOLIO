import { MetadataRoute } from 'next';
import { getContent } from '@/content/content';

// ponytail: Native robots.txt generation
export default function robots(): MetadataRoute.Robots {
  const content = getContent();
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${content.meta.url}/sitemap.xml`,
  };
}
