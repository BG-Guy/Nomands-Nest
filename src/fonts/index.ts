import localFont from "next/font/local"

import {
  Bungee_Outline,
  Inter,
  Josefin_Sans,
  Luckiest_Guy,
  Open_Sans,
  Playfair_Display,
  Rubik_Mono_One,
} from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-open-sans",
})

export const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-playfair-display",
})

export const RubikMonoOne = Rubik_Mono_One({
  weight: ["400"],
  variable: "--font-rubik-mono-one",
  subsets: ["latin"],
})

export const JosephineSans = Josefin_Sans({
  weight: ["700"],
  variable: "--font-josephine-sans",
  subsets: ["latin"],
})

export const LuckiestGuy = Luckiest_Guy({
  weight: ["400"],
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
  style: "normal",
})

export const BungeeOutline = Bungee_Outline({
  weight: ["400"],
  variable: "--font-bungee-outline",
  subsets: ["latin"],
  style: "normal",
})

export const BackLight = localFont({
  src: [{ path: "./BackLight.ttf" }],
  variable: "--font-back-light",
})

export const GradlRegular = localFont({
  src: [{ path: "./Gradl-Regular.ttf" }],
  variable: "--font-gradl-regular",
})

export const WindfallWide = localFont({
  src: [{ path: "./WindfallWide.otf" }],
  variable: "--font-windfall-wide",
})

export const AJensonProDisp = localFont({
  src: [{ path: "./AJensonPro-Disp.otf" }],
  variable: "--font-ajensonpro-disp",
})

export const AvenirBook = localFont({
  src: [{ path: "./Avenir-Book-01.ttf" }],
  variable: "--font-avenir-book",
})
