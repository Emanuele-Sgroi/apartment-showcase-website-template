/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-light": "var(--background-light)",
        "background-dark": "var(--background-dark)",
        "foreground-light": "var(--foreground-light)",
        "foreground-dark": "var(--foreground-dark)",
        "foreground-accent": "var(--foreground-dark)",
      },
    },
  },
  plugins: [],
};
