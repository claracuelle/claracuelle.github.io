import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://claracuelle.github.io/",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: true,
});
