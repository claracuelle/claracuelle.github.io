/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				title: ["Boldonse", "sans-serif"],
				body: ["Geist", "sans-serif"],
			},
			colors: {
				white: "#FDFDFF",
				orange: "#FFAC55",
				blue: "#0000FF",
			},
		},
	},
	plugins: [],
};
