/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: "#a17d61",
      },
      boxShadow: {
        "custom-shadow": "0px 2px 8px #f4f4f5",
      },
      maxWidth: {
        "4/5": "80%",
      },
      maxHeight: {
        "60vh": "60vh",
      },
    },
  },
  plugins: [],
};
