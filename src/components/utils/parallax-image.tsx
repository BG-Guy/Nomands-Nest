import React from "react"
import { cn } from "@/lib/utils"
import { motion, MotionValue } from "framer-motion"

interface ParallaxImageProps {
  className?: string
  width: number
  aspectR: number
  parallaxY: MotionValue<number>
  srcUrl: string
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  className,
  width,
  aspectR,
  parallaxY,
  srcUrl,
}) => {
  const height = width / aspectR

  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{
        width,
        height,
      }}>
      <motion.div
        style={{
          y: parallaxY,
          backgroundImage: srcUrl,
          width: width,
          height: "140%", // allows image to move up/down without empty space
        }}
        className='absolute bg-cover bg-center bg-no-repeat'
      />
    </div>
  )
}
