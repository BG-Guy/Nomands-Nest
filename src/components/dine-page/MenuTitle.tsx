import React from "react"
import { cn } from "@/lib/utils"

interface MenuTitleProps {
  className?: string
}

export const MenuTitle: React.FC<MenuTitleProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <h1 className='font-title-3 text-title tracking-widest font-extralight'>
        MENU
      </h1>
    </div>
  )
}
