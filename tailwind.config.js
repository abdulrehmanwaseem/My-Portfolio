/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        secondary: "#14213d",
        primary: "#fca311",
        accent: "#4895ef",
        success: "#4cc9f0",
        warning: "#f77f00",
        error: "#d62828",
        "text-primary": "#e5e5e5",
        "text-secondary": "#a8a8a8",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
