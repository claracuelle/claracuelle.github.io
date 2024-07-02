import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { getEnv } from 'astro/env/runtime';

export default defineConfig({
  site: 'https://claracuelle.github.io',
  base: import.meta.env.PROD ? 'portfolio' : '',
  integrations: [tailwind()],
});
