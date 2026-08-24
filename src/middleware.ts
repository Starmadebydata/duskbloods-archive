import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const host = context.url.hostname;
  const path = context.url.pathname;
  const proto = context.request.headers.get('x-forwarded-proto') || context.url.protocol.replace(':','');
  if (proto === 'http' && (host === 'duskbloodsarchive.com' || host === 'www.duskbloodsarchive.com')) {
    const target = new URL(context.request.url);
    target.protocol = 'https:';
    target.hostname = 'duskbloodsarchive.com';
    return new Response(null, { status: 301, headers: { Location: target.toString() } });
  }
  if (host === 'www.duskbloodsarchive.com') {
    const target = new URL(context.url);
    target.hostname = 'duskbloodsarchive.com';
    target.protocol = 'https:';
    return new Response(null, { status: 301, headers: { Location: target.toString() } });
  }
  if (path === '/index.html' || path === '/index') {
    return context.rewrite('/');
  }
  const aliases: Record<string, string> = {
    '/privacy-policy': '/privacy/',
    '/privacy-policy/': '/privacy/',
    '/terms': '/disclaimer/',
    '/terms/': '/disclaimer/',
    '/disclaimer': '/disclaimer/',
  };
  if (aliases[path]) {
    const target = new URL(aliases[path], context.url.origin);
    return new Response(null, { status: 301, headers: { Location: target.toString() } });
  }
  const response = await next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'; script-src 'self' 'sha256-ehAbcGULcwQHxa6eKx00xgjxTUgjBObwNAO/Mu/AlF8='; frame-ancestors 'none'; base-uri 'self'; form-action 'none'"
  );
  if (host.endsWith('.workers.dev')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  if (host === 'duskbloodsarchive.com') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  const type = response.headers.get('content-type') ?? '';
  if (type.includes('text/html')) {
    response.headers.set('Cache-Control', 'no-cache, must-revalidate');
  }
  return response;
});
