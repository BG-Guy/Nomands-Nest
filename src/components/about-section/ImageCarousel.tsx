import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { aboutSectionMenu } from "./data"
import { cn } from "@/lib/utils"

interface ImageCarouselProps {
  className?: string
  FocusedItem: any
  handleFocusedItem: (item: any) => void
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  className,
  FocusedItem,
  handleFocusedItem,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const handleCarouselAnimation = () => {
    const { height, width } = dimensions
    return {
      right: `${FocusedItem?.pos * width}px`,
      width: `${aboutSectionMenu.length * width}px`,
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const { width, height } = container.getBoundingClientRect()
      setDimensions({ width, height })
    }
  }, [])

  return (
    <div className={cn("row-start-2 col-start-2 overflow-hidden", className)}>
      <motion.div
        className='relative flex w-full h-full'
        ref={containerRef}
        animate={handleCarouselAnimation()}
        transition={{ ease: "easeOut", duration: 0.3 }}>
        {aboutSectionMenu.map((item, index) => {
          return (
            <motion.div
              className='z-10 border bg-cover w-full h-full'
              key={item.key}
              style={{ backgroundImage: item.backgroundImage }}>
              {index}
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
