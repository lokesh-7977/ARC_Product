import { Cinzel_Decorative, Poppins } from "next/font/google"
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
        background:"#F5F5DC",
        secondary_color:"#81A263",
        text_black:"#161515",
      },
      fontFamily:{
        Poppins:['Poppins', 'sans-serif'],
        Cinzel_Decorative:['Cinzel Decorative', 'serif'],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config