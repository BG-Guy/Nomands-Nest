import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CtaBtnProps {
  className?: string
}

export const CtaBtn: React.FC<CtaBtnProps> = ({ className }) => {
  const [IsHover, setIsHover] = useState<boolean>(false)

  return (
    <motion.div
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
      className={cn(
        "w-[150px] h-[150px] rounded-full text-black overflow-hidden cursor-pointer",
        className
      )}>
      <motion.div className='text-[20px] absolute flex items-center justify-center w-[150px] h-[150px] rounded-full text-black font-simple bg-warmOffWhite'>
        <motion.span className='z-50 text-black '>BOOK NOW</motion.span>
      </motion.div>
      <motion.div
        animate={{ y: IsHover ? -150 : 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        className=' bg-[#6B705C] rounded-full w-[150px] h-[150px] absolute top-full z-10'></motion.div>
    </motion.div>
  )
}
