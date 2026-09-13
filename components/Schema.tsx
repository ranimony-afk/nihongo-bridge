export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nihongo Bridge',
    url: 'https://nihongobridge.com',
    description: 'Learn Japanese, prepare for JLPT, explore Japanese culture, and build your future in Japan.',
    sameAs: [
      'https://www.youtube.com/',
      'https://www.instagram.com/',
      'https://twitter.com/',
      'https://www.linkedin.com/',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nihongo Bridge',
    url: 'https://nihongobridge.com',
    description: 'Learn Japanese • Study in Japan • Build Your Career',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nihongobridge.com/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({
  title,
  description,
  date,
  image,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    image,
    url: `https://nihongobridge.com/blog/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'Nihongo Bridge',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nihongo Bridge',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://nihongobridge.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
