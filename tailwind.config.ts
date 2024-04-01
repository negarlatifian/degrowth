import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['var(--font-suissIntl)'],
        display: ['var(--font-monumentGrotesk)'],
      },
    },
    colors: {
      green: '#3CB668',
    },
  },
  plugins: [],
};
export default config;
