import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kanagawa: {
          bg: 'var(--color-dragon-bg)',
          fg: 'var(--color-dragon-fg)',
          black: 'var(--color-dragon-black)',
          red: 'var(--color-dragon-red)',
          green: 'var(--color-dragon-green)',
          yellow: 'var(--color-dragon-yellow)',
          blue: 'var(--color-dragon-blue)',
          magenta: 'var(--color-dragon-magenta)',
          cyan: 'var(--color-dragon-cyan)',
          white: 'var(--color-dragon-white)',
          'bright-black': 'var(--color-dragon-bright-black)',
          'bright-red': 'var(--color-dragon-bright-red)',
          'bright-green': 'var(--color-dragon-bright-green)',
          'bright-yellow': 'var(--color-dragon-bright-yellow)',
          'bright-blue': 'var(--color-dragon-bright-blue)',
          'bright-magenta': 'var(--color-dragon-bright-magenta)',
          'bright-cyan': 'var(--color-dragon-bright-cyan)',
          'bright-white': 'var(--color-dragon-bright-white)',
          selection: {
            bg: 'var(--color-dragon-selection-bg)',
            fg: 'var(--color-dragon-selection-fg)',
          },
          accent1: 'var(--color-dragon-accent1)',
          accent2: 'var(--color-dragon-accent2)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
