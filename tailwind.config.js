/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#18181a",
      },
      keyframes: {
        expand: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        toggle: "expand 0.5s ease-in",
      },
    },
  },
  plugins: [],
};
