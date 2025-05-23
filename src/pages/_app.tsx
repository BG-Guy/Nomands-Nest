import "@/styles/globals.css"
import "@/styles/index.scss"
import { AnimatePresence, motion, useScroll } from "framer-motion"
import type { AppProps } from "next/app"
import {
  BackLight,
  GradlRegular,
  WindfallWide,
  AJensonProDisp,
  AvenirBook,
} from "@/fonts/index"
import {
  BungeeOutline,
  JosephineSans,
  RubikMonoOne,
  inter,
  openSans,
} from "@/fonts"

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      className={` ${AJensonProDisp.variable} ${AvenirBook.variable} ${WindfallWide.variable} ${GradlRegular.variable} ${BackLight.variable} ${RubikMonoOne.variable} ${JosephineSans.variable} ${openSans.variable} ${inter.variable} ${BungeeOutline.variable}`}>
      <AnimatePresence mode='wait'>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </motion.div>
  )
}
