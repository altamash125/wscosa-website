// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Replace with your extracted colors
        primary: '#1A3A2D', // Example: deep green from logo
        accent: '#E6B17A',  // Example: gold/wood tone from logo
        'accent-foreground': '#1A3A2D',
        'muted-foreground': '#6B7280',
      },
      fontFamily: {
        sans: ["Sora", "Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
}
