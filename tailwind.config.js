/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        surface: '#FFFFFF',
        text: '#222222',
        subText: '#6B7280',
        border: '#E5E7EB',
        primary: '#339CFF',
        accent: '#00C2B2',
        error: '#FF4D4F',
        success: '#22C55E',
        warning: '#FACC15',
      },
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'Roboto', 'sans-serif'],
        code: ['Roboto Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      borderRadius: {
        lg: '10px',
      },
      boxShadow: {
        custom: '0 2px 8px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}; 