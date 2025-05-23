import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface CtaBtnProps {
  className?: string
  msg: string
}

export const CtaBtn: React.FC<CtaBtnProps> = ({ className, msg }) => {
  const [hovered, setHovered] = useState(false)

  const bgVariants = {
    initial: {
      y: "100%",
      x: -10,
      transition: { ease: "easeOut", duration: 0.2 },
    },
    animate: {
      y: 0,
      transition: { ease: "easeOut", duration: 0.2 },
    },
    exit: {
      y: "-100%",
      transition: { ease: "easeOut", duration: 0.2 },
    },
  }

  const textVariants = {
    initial: {
      color: "#000",
      transition: { duration: 0.2 },
    },
    animate: {
      color: "#fff",
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial='initial'
      animate={hovered ? "animate" : "initial"}
      className={cn(
        "relative text-black w-32 h-12 overflow-hidden",
        className
      )}>
      <motion.div className='flex z-10 w-full h-full overflow-hidden cursor-pointer items-center justify-center rounded-2xl bg-opacity-100 p-2 bg-slate-50 border-black border-[2px] backdrop-blur-[20px] relative'>
        <motion.span
          variants={textVariants}
          className='text-[1rem] z-20 relative'>
          {msg}
        </motion.span>

        <AnimatePresence>
          {hovered && (
            <motion.span
              key='bg'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={bgVariants}
              className='z-10 absolute w-36 h-14 bg-slate-500 top-0 left-0'
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
