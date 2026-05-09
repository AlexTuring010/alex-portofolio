import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gkiafis.gr';
  const lastModified = new Date();
  return [
    {
      url: base,
      lastModified,
      alternates: {
        languages: {
          el: base,
          en: `${base}/en`
        }
      }
    },
    {
      url: `${base}/en`,
      lastModified
    }
  ];
}
