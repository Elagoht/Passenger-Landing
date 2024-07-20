import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-dark": "url('/assets/bg-dark.svg')",
        "hero-light": "url('/assets/bg-light.svg')"
      },
      maxWidth: {
        "screen-3xl": "1920px"
      },
      colors: {
        "tuatara": {
          "50": "#f7f7f7",
          "100": "#eaeaea",
          "200": "#c7c7c7",
          "300": "#b1b0af",
          "400": "#898887",
          "500": "#6e6d6c",
          "600": "#5e5d5c",
          "700": "#504f4e",
          "800": "#464644",
          "900": "#373736",
          "950": "#2B2A29",
          "1000": "#1F1E1D",
        },
        "leaf": {
          "50": "#f2f7f3",
          "100": "#e0ebe1",
          "200": "#b1cdb7",
          "300": "#99bca3",
          "400": "#6d9a7b",
          "500": "#4c7d5d",
          "600": "#396248",
          "700": "#2d4f3a",
          "800": "#263f30",
          "900": "#203428",
          "950": "#111d16",
        },
        "creamcan": {
          "50": "#fffaeb",
          "100": "#fdf1c8",
          "200": "#fce28b",
          "300": "#face54",
          "400": "#f8b827",
          "500": "#f2960e",
          "600": "#d67109",
          "700": "#b24e0b",
          "800": "#903c10",
          "900": "#773210",
          "950": "#441804",
        },
      }
    }
  },
  plugins: [typography],
}
export default config