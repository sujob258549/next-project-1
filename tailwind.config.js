/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require('daisyui')],
};


// // tailwind.config.js
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your folder structure
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
