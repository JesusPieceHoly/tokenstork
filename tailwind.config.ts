import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
  darkMode: 'media', // Use media strategy for dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        slate: colors.slate,
        // Add other colors as needed
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};

export default config;
