import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://claracuelle.github.io',
  base: 'portfolio',
  integrations: [tailwind()],
  compressHTML: true,
});
