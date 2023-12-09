import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#7CC0B8",
        secondary: "#6a85c5",
        title: "#508ca4",
        primaryText: "#000000",
        secondaryText: "#ffffff",
        active: "#4ade80",
        activeBorder: "#15803d",
        inactive: "#fb7185",
        inactiveBorder: "#be123c",
      },
      borderRadius: {
        container: "0.375rem",
        button: "1.5rem",
      },
      borderWidth: {
        borderWidth: "2px",
      },
    },
  },
  plugins: [],
};
export default config
