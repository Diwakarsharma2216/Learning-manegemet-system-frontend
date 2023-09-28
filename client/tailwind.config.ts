import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        orbitron:[`var(--font-orbitron)`,"sans-serif"]
      },
      screens: {
        'xs': '340px',
        'sm': '640px', // Mobile (small)
        'md': '768px', // Tablet (medium)
        'lg': '1024px', // Laptop (large)
        'xl': '1280px', // Desktop (extra large)
      },
    },
  },
  plugins: [],
}
export default config
