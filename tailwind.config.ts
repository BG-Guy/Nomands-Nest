import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        title: "clamp(5rem, 7.5vw, 9.5rem)",
        header: "clamp(1rem, 4vw, 1.5rem)",
        "sub-header": "clamp(0.5rem, 6vw, 3rem)",
        "nav-links": "clamp(0.5rem, 5vw, 1rem)",
        description: "clamp(0.8rem, 3vw, 1.5rem)",
      },

      fontFamily: {
        simple: "var(--font-inter)",
        "simple-2": "var(--font-open-sans)",
        "simple-3": "var(--font-avenir-book)",
        title: "var(--font-rubik-mono-one)",
        "title-3": "var(--font-gradl-regular)",
        "title-4": "var(--font-windfall-wide)",
        "title-5": "var(--font-ajensonpro-disp)",
        sub: "var(--font-josephine-sans)",
        "bg-text": "var(--font-bungee-outline)",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      colors: {
        warmOffWhite: "rgba(254, 249, 231, 0.8)",
        warmLightOffWhite: "rgba(254, 249, 231, 1)",
      },
      backgroundClip: {
        text: "text",
      },
      backgroundColor: {
        "dark-overlay": "rgba(0, 0, 0, 0.2)",
      },
    },
  },

  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".responsive-padding-layout": {
          paddingLeft: "1.5rem" /* 6px */,
          paddingRight: "1.5rem",
          "@screen md": {
            paddingLeft: "3.5rem" /* 14px */,
            paddingRight: "3.5rem",
          },
          "@screen lg": {
            paddingLeft: "5rem" /* 20px */,
            paddingRight: "5rem",
          },
        },
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      })
    },
  ],
}
export default config
