const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              50: "#F4FCE3",
              100: "#E9F8B3",
              200: "#D1F28D",
              300: "#B9FF66",
              400: "#A0FF3D",
              500: "#88FF14",
              600: "#76E600",
              700: "#64B300",
              800: "#529F00",
              900: "#3F7C00",
              DEFAULT: "#B9FF66",
              foreground: "#FFFFFF",
            },
            focus: "#B9FF66",
            navbar: {
              background: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};
