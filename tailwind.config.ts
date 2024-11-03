import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ensure these custom properties are defined somewhere in your CSS
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#2C2C2C',
        customGrey: '#C8C8C8',

      },
      keyframes: {
        glow: {
          '0%, 100%': { color: 'black', textShadow: 'none' },
          '20%': {
            color: '#ffffff',
            textShadow: '0 0 2px rgba(255, 255, 255, 0.1), 0 0 4px rgba(255, 255, 255, 0.13)', 
          },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        glow: 'glow 9s linear infinite', 
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
