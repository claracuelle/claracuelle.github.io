import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://claracuelle.github.io',
  base: 'portfolio',
  integrations: [tailwind(), svelte()],
  compressHTML: true
});