/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryDarkBlue: '#1F2A3A',
        primaryGray: '#8C8C8C',
        primaryGreen: '#65A98F',
        whitePrimary: '#F5F5F5',
      },
      textColor: {
        grayDark: '#333333',
        grayPrimary: '#717171',
        grayLighter: '#BBBFBF',
        white: '#F5F5F5',
      },
    },
  },
  plugins: [],
};
