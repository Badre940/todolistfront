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
        customli: "#FFFFFF",
        h1custom:"#3F1B4B", // Ajoute la couleur personnalisée
      },
    },
  },
  plugins: [],
};
export default config;
