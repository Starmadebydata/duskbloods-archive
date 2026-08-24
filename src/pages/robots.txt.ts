import type { APIRoute } from 'astro';
export const prerender = false;
export const GET: APIRoute = ({ url, site }) => {
  if (url.hostname.endsWith('workers.dev')) {
    return new Response('User-agent: *\nDisallow: /\n', {
      headers: { 'content-type': 'text/plain; charset=utf-8', 'x-robots-tag': 'noindex, nofollow' }
    });
  }
  const sitemap = new URL('sitemap-index.xml', site ?? 'https://duskbloodsarchive.com');
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`, {
    headers: { 'content-type': 'text/plain; charset=utf-8' }
  });
};
