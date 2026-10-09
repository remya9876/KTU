/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ktu: {
          deep: '#174A7E',
          primary: '#2878C8',
          hover: '#1e62a8',
          light: '#EAF3FC',
          lightest: '#F5F8FC',
          dark: '#0e2f52',
          text: '#243247',
          muted: '#64748B',
          border: '#DCE6F1',
          gold: '#D97706',
          emerald: '#059669',
          crimson: '#DC2626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 10px 25px -5px rgba(23, 74, 126, 0.1), 0 8px 10px -6px rgba(23, 74, 126, 0.06)',
        'header': '0 2px 8px rgba(14, 47, 82, 0.08)',
      }
    },
  },
  plugins: [],
}
