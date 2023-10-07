/** @type {import('tailwindcss').Config} */
export default {
  // src folder ke andar koi folder ho to uske andar bhi jana hai and src folder ke andar ki file bhi consider karni hai unme js,html,jsx,ts,tsx consider karna hai
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require("@tailwindcss/line-clamp")],
}
