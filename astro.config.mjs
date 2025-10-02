import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://claracuelle.github.io/",
	base: "",
	integrations: [tailwind()],
	compressHTML: true,
});
