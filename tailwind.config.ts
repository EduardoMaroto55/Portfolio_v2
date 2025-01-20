import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-blue': 'rgba(13, 110, 253, 0.9)',
        primary:{
          light: 'white',
          dark: '#1e293b'
        },
        text: {
          light: 'black',
          dark: 'white'
        },
        secondary: {
          light: 'rgba(13, 110, 253, 0.7)',
          dark: '#0a58ca'
        }
      },
    },
  },
  plugins: [],
};
export default config;
