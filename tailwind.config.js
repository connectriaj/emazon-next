/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#540eed',

          secondary: '#7dd84b',

          accent: '#b550e0',

          neutral: '#131320',

          'base-100': '#FAFAFA',

          info: '#879AD9',

          success: '#199448',

          warning: '#EFCA6B',

          error: '#FB5B7B',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
