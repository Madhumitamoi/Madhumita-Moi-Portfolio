import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://madhumitamoi.com',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
