import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/_vercel/',
        ],
      },
    ],
    sitemap: 'https://www.ediloaz.com/sitemap.xml',
  }
}

