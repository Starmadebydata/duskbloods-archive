import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://duskbloodsarchive.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes("/privacy-policy") && !page.includes("/terms") })],
  adapter: cloudflare({
    imageService: 'compile',
    prerenderEnvironment: 'node'
  }),
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  },
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
