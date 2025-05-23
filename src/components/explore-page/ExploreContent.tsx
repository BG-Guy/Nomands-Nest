import React from "react"
import { cn } from "@/lib/utils"
import { ExploreCarousel } from "./ExploreCarousel"

interface ExploreContentProps {
  className?: string
}

export const ExploreContent: React.FC<ExploreContentProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "min-h-screen w-screen mt-[90vh] bg-warmLightOffWhite flex ",
        className
      )}>
      <ExploreCarousel />
    </div>
  )
}
