// tailwind.config.js

module.exports = {
  // Uncomment and provide the correct paths for the content property.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
