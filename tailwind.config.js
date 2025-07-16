module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    screens: {
      'xs': '375px',   // Small phones
      'sm': '640px',   // Standard small screens
      'md': '768px',   // Tablets
      'lg': '1024px',  // Small laptops
      'xl': '1280px',  // Large laptops
      '2xl': '1536px', // Desktop
      '3xl': '1920px', // Large desktop
      // Height-based breakpoints
      'short': { 'raw': '(max-height: 640px)' },
      'tall': { 'raw': '(min-height: 800px)' },
      // Device-specific
      'touch': { 'raw': '(hover: none) and (pointer: coarse)' },
      'mouse': { 'raw': '(hover: hover) and (pointer: fine)' },
    },
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#3B82F6',
        accent: '#FBBF24',
        dark: '#1F2937',
        light: '#F9FAFB',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 2vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
        'fluid-base': 'clamp(1rem, 3vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 5vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 6vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 7vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 8vw, 4rem)',
        'fluid-6xl': 'clamp(3.75rem, 10vw, 5rem)',
        'fluid-7xl': 'clamp(4.5rem, 12vw, 6rem)',
        'fluid-8xl': 'clamp(6rem, 15vw, 8rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        'fluid-xs': 'clamp(0.5rem, 2vw, 1rem)',
        'fluid-sm': 'clamp(1rem, 3vw, 1.5rem)',
        'fluid-md': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-lg': 'clamp(2rem, 5vw, 3rem)',
        'fluid-xl': 'clamp(3rem, 6vw, 4rem)',
        'fluid-2xl': 'clamp(4rem, 8vw, 6rem)',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        'screen-2xl': '1536px',
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(90deg, #FF0080, #FF8C00, #FFD700, #008000, #00BFFF, #8A2BE2)',
        'glass': 'rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}