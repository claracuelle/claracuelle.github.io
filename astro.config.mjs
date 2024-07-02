import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://claracuelle.github.io/portfolio',
  integrations: [tailwind()],
});
