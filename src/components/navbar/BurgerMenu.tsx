import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { HoverCarouselWrapper } from "../utils/hover-carousel-effect"
import { motion, MotionValue } from "framer-motion"

interface BurgerMenuProps {
  className?: string
  handleMenuOpen: () => void
  color: any
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  className,
  handleMenuOpen,
  color,
}) => {
  const [BurgerColor, setBurgerColor] = useState("#ffffff")
  return (
    <HoverCarouselWrapper color={BurgerColor} direction='x' isLink={false}>
      <div
        onClick={() => handleMenuOpen()}
        className={cn("h-6 w-6", className)}>
        <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            {" "}
            <motion.path
              d='M4 18H10'
              stroke={color}
              stroke-width='2'
              stroke-linecap='round'></motion.path>{" "}
            <motion.path
              d='M4 12L16 12'
              stroke={color}
              stroke-width='2'
              stroke-linecap='round'></motion.path>{" "}
            <motion.path
              d='M4 6L20 6'
              stroke={color}
              stroke-width='2'
              stroke-linecap='round'></motion.path>{" "}
          </g>
        </svg>
      </div>
    </HoverCarouselWrapper>
  )
}
