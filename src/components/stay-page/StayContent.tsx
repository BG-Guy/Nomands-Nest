import React from "react"
import { cn } from "@/lib/utils"
import { StayCarousel } from "./StayCarousel"

interface StayContentProps {
  className?: string
}

export const StayContent: React.FC<StayContentProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "min-h-screen w-screen mt-[90vh] bg-warmLightOffWhite flex ",
        className
      )}>
      <StayCarousel />
    </div>
  )
}
