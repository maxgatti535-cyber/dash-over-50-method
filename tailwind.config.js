/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#1B847C',
        brandPrimaryDark: '#0F3E35',
        brandPrimaryTint: '#E6F4F1',
        brandAccent: '#9FD7C5',
        creamBg: '#F7F3E9',
        surface: '#FFFFFF',
        border: '#E5E7EB',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        textMuted: '#64748B',
        danger: '#B91C1C',
        warning: '#F59E0B',
        success: '#16A34A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: []
}
