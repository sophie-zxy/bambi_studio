/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],

        // 在tailwind.config.js的theme.extend部分
        fontSize: {
          24: "24px",
          14: "14px",
          // 由于TailwindCSS使用的是rem单位，你可能需要转换像素值
        },
        lineHeight: {
          // 同样地，添加自定义行高值
        },
        fontWeight: {
          // 根据需要添加自定义字体权重
        },
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: ["light", "white"],
  },
};
