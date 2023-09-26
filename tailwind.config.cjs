/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'
import theme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...theme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ...colors,
        white: "#F8F7F7",
        foreground: "#F8F7F7",
        background: "#000000",
        "primary-btn": "#146FE6",
        "secondary-btn": "#FDF1E3",
        accent: "#0C4288",
      },
      screens: {
        ...theme.screens,
        '5xl': "1024px"
      }
    },
  },
  plugins: [],
}
