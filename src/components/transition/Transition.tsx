"use client"
import { motion, useScroll } from "framer-motion"
import { translate } from "./anim"
import { Navbar } from "../navbar/Navbar"
import { Footer } from "../footer/Footer"
import { Gap } from "../gap/Gap"

export default function Transition({
  children,
}: {
  children: React.ReactNode
}) {
  const { scrollY } = useScroll()
  return (
    <motion.div
      variants={translate}
      initial='initial'
      animate='enter'
      exit='exit'>
      <Navbar scrollY={scrollY} />
      {children}
      <Footer />
    </motion.div>
  )
}
