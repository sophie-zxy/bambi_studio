/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // 在这里添加Poppins作为默认sans-serif字体
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: ["dark", "autumn"],
  },
};
