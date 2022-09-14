/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "10px": "10px",
      },
    },
  },
  // add daisyUI plugin
  plugins: [ require("daisyui")],
};
