import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { getContent } from '@/content/content';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const content = getContent();

export const metadata: Metadata = {
  metadataBase: new URL(content.meta.url),
  title: {
    default: content.meta.title,
    template: `%s | ${content.personal.name}`,
  },
  description: content.meta.description,
  keywords: [
    'Adam Benbouazza',
    'AI Engineer',
    'Full-Stack Developer',
    'Machine Learning',
    'FastAPI',
    'React',
    'TypeScript',
    'Next.js',
    'XGBoost',
    'Morocco',
    'Europe Relocation',
  ],
  authors: [{ name: content.personal.name }],
  creator: content.personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: content.meta.url,
    title: content.meta.title,
    description: content.meta.description,
    siteName: content.personal.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ponytail: Flash-preventing inline script that checks localStorage then prefers-color-scheme
const themeInitScript = `
  (function() {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else if (stored === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    } catch (_) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: content.personal.name,
    jobTitle: content.personal.role,
    email: content.personal.email,
    telephone: content.personal.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'Morocco',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Université Hassan II de Casablanca (FSAC)',
      },
    ],
    sameAs: [content.personal.github, content.personal.linkedin],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} min-h-screen flex flex-col font-sans bg-[#13141f] text-[#cdd6f4] antialiased selection:bg-[#cba6f7] selection:text-[#11111b]`}
      >
        <main className="flex-1 min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}
