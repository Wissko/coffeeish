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
        cream: "#F5E6D3",
        "dusty-rose": "#996666",
        "warm-camel": "#C9A882",
        terracotta: "#C1574D",
        "sage-green": "#B5C4B1",
        "dore-caramel": "#C4954A",
        noir: "#1A1A1A",
        "deep-brown": "#6B3A3A",
        "beige-rose": "#E8DDD4",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
