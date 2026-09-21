/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Tell Tailwind to scan all HTML and TypeScript files for classes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2", // Example: Custom primary color
        secondary: "#14171A", // Example: Custom secondary color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example: Custom font family
      },
    },
  },
  plugins: [],
};