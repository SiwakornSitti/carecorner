import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|input|ripple|spinner|modal).js",
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
          tan: "#FFF8E7",
          cream: "#fffadc",
          earth: "#FFE8B1",
          warning: "#df5d3f",
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
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            warning: "#df5d3f",
          },
        },
      },
    }),
  ],
};
export default config;
