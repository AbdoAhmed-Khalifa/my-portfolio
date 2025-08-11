import fs from 'fs';
import path from 'path';

const domain = 'https://www.abdelrahmankhalifa.com'; // Replace with your actual domain
const currentDate = new Date().toISOString().split('T')[0];

const pages = [
  { url: '/', priority: '1.0', changefreq: 'monthly' },
  { url: '/#about', priority: '0.8', changefreq: 'monthly' },
  { url: '/#projects', priority: '0.8', changefreq: 'monthly' },
  { url: '/#experience', priority: '0.7', changefreq: 'monthly' },
  { url: '/#tech', priority: '0.7', changefreq: 'monthly' },
  { url: '/#contact', priority: '0.6', changefreq: 'monthly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    page => `  <url>
    <loc>${domain}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log('✅ Sitemap generated successfully!');
console.log(`📅 Last updated: ${currentDate}`);
console.log(`📍 Location: ${sitemapPath}`);
