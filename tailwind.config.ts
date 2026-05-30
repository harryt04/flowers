import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sunshine-yellow": "#F4D03F",
        cream: "#FFFDD0",
        "warm-white": "#F5F5F0",
        "soft-green": "#A8C686",
        "warm-charcoal": "#3F3A2F",
        "warm-gray": "#6B6354",
      },
    },
  },
};

export default config;
