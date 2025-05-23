import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimate } from "framer-motion"

interface TeaserProps {
  className?: string
}

export const Teaser: React.FC<TeaserProps> = ({ className }) => {
  const [scope, animate] = useAnimate()

  return (
    <div
      className={cn(
        "flex h-screen w-screen flex-col items-center justify-center overflow-hidden text-[4rem]",
        className,
      )}
    ></div>
  )
}
