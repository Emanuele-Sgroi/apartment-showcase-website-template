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
      fontSize: {
        xxs: "12px",
        xs: "13px",
        sm: "14px",
        base: "16px",
        md: "18px",
        lg: "21px",
        xl: "30px",
        "2xl": "43px",
        "3xl": "70px",
        "4xl": "120px",
      },
    },
  },
  plugins: [],
};
