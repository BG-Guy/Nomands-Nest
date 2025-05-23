import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimate } from "framer-motion"

interface HoverCarouselWrapperProps {
  className?: string
  children: React.ReactNode
  direction: "y" | "x"
  isLink: boolean
  color: any
}

export const HoverCarouselWrapper: React.FC<HoverCarouselWrapperProps> = ({
  className,
  children,
  direction,
  isLink,
  color,
}) => {
  const [isHover, setIsHover] = useState(false)
  const [scope, animate] = useAnimate()

  const handleDirection = () => {
    if (direction === "y") return { y: isHover ? "-100%" : "0" }
    if (direction === "x") return { x: isHover ? "-100%" : "0" }
  }

  const getTransformStyle = () => {
    return direction === "y"
      ? { transform: "translateY(100%)" }
      : { transform: "translateX(100%)" }
  }

  const animateStart = async () => {
    await animate(
      scope.current,
      { opacity: 1, top: "120%" },
      { duration: 0.2, ease: "circInOut" }
    )
    await animate(
      scope.current,
      { width: "100%", height: 2, left: 0, borderRadius: 0 },
      { duration: 0.2, ease: "circInOut" }
    )
  }

  const animateOut = async () => {
    await animate(
      scope.current,
      {
        width: 4,
        height: 4,
        left: "50%",
        borderRadius: "100%",
      },
      { duration: 0.2, ease: "circInOut" }
    )
    await animate(
      scope.current,
      { opacity: 0, top: "180%" },
      { duration: 0.2, ease: "circInOut" }
    )
  }

  useEffect(() => {
    if (!isLink) return
    if (isHover) {
      animateStart()
    } else {
      // Reset animation if needed when hover is removed
      animateOut()
    }
  }, [isHover, animate, scope])

  return (
    <div className='relative'>
      <motion.div
        onPointerEnter={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
        className={cn(
          "relative flex h-full w-full cursor-pointer flex-col justify-start overflow-hidden", // Update here
          className
        )}>
        <motion.div
          style={handleDirection()}
          className={`flex h-full w-full items-center justify-center ${`transition-transform duration-500 ease-out`} `}>
          <div className='flex h-full w-full items-center justify-center'>
            {children}
          </div>
          <div
            style={getTransformStyle()}
            className={`absolute flex h-full w-full items-center justify-center`}>
            {children}
          </div>
        </motion.div>
      </motion.div>
      {isLink && (
        <motion.span
          ref={scope}
          style={{ backgroundColor: color }}
          className='absolute h-1'></motion.span>
      )}
    </div>
  )
}
