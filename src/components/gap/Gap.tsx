import React from "react"
import { cn } from "@/lib/utils"

interface GapProps {
  className?: string
}

export const Gap: React.FC<GapProps> = ({ className }) => {
  return <div className={cn("h-[1px] flex ", className)}></div>
}
