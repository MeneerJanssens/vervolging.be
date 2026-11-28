// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Nederlandstalige site op vervolging.be.
// De Franse versie komt later onder /fr/ en wordt via netlify.toml op persecution.be geserveerd.
export default defineConfig({
  site: 'https://vervolging.be',
  trailingSlash: 'never',
  build: { format: 'file' },
  // De bedankpagina hoort niet in zoekmachines.
  integrations: [sitemap({ filter: (page) => !page.endsWith('/bedankt') })],
});
