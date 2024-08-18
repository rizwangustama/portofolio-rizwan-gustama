import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        default: ['Inter', 'sans-serif'],
      },
      colors: {
        'ColorBgPrimary': '#000319',
        'ColorPrimary': '#CBACF9',
        'ColorBgLinearPrimary': '#04071D',
        'ColorBgLinearSecondary': '#0C0E23',
        'ColorLinePrimary': '#6971A2',
        'ColorButtonPrimary': '#161A31',
        'ColorButtonSecondary': '#06091F'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
