import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CarouselIndicatorsProps {
  className?: string
  SelectedItem: number
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  className,
  SelectedItem,
}) => {
  const totalItems = 3
  const itemWidth = 40 // in pixels, adjust based on your design (w-10)

  return (
    <div className={cn("w-36 absolute bottom-4", className)}>
      <div className='relative flex gap-1'>
        {/* Moving background */}
        <motion.div
          className='absolute top-0 left-0 h-full bg-warmOffWhite rounded-full'
          style={{ width: itemWidth }}
          animate={{
            x: SelectedItem === 1 ? 0 : (SelectedItem - 1) * (itemWidth + 4),
          }} // 4 is gap-1
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 3.5,
          }}
        />

        {/* Indicators (masking windows) */}
        {Array.from({ length: totalItems }).map((_, index) => (
          <div
            key={index}
            className='w-10 h-2 border border-slate-500  relative rounded-full'>
            {/* Inner content (acts like a mask revealing the moving background) */}
            <div className='absolute inset-0 bg-transparent overflow-hidden rounded-full'></div>
          </div>
        ))}
      </div>
    </div>
  )
}
