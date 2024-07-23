/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2C5C4F",

          secondary: "#262B4D",

          accent: "#2C5C37",

          neutral: "#F5E9E0",

          "base-100": "#ff00ff",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
