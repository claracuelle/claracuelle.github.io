/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        migra: ['Migra-Extrabold', 'sans-serif'],
        manrope: ['Manrope-Regular', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#151515',
          hover: '#585858',
          pressed: '#424242',
          disabled: '#B0B0B0',
        },
        white: {
          DEFAULT: '#FDFDFD',
        },
        'expo-primary': {
          DEFAULT: '#0085FF',
          hover: '#3EA2FF',
          pressed: '#0069E3',
          disabled: '#C4E1FC',
        },
        'expo-secondary': {
          DEFAULT: '#CCF0FB',
          hover: '#E5F9FF',
          pressed: '#B1E9FA',
          disabled: '#D2E1E6',
        },
      },
      rotate: {
        35: '35deg',
      },
    },
  },
  plugins: [],
};
