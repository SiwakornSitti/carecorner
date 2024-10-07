import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|ripple|spinner|modal).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          mustard: "#ffb757",
          orange: "#f18369",
          cream: "#fffadc",
          earth: "#FFE8B1",
        },
        secondary: {
          yellow: "#ffcf6d",
          orange: "#df5d3f",
          brown: "#664a3c",
        },
        whiteblue: "#F1F1F1",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
