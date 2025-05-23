import { Navbar } from "@/components/navbar/Navbar"
import Transition from "@/components/transition/Transition"
import { motion, useScroll } from "framer-motion"
import React from "react"

interface Party {
  className?: string
}

export default function party() {
  return (
    <Transition>
      <div>PAGEEE</div>
    </Transition>
  )
}
