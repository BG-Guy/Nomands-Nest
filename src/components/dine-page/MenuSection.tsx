import React from "react"
import { cn } from "@/lib/utils"
import { MenuTitle } from "./MenuTitle"
import { Menu } from "./Menu"

interface MenuSectionProps {
  className?: string
}

export const MenuSection: React.FC<MenuSectionProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "min-h-screen w-screen mt-[90vh] bg-warmLightOffWhite flex flex-col responsive-padding-layout",
        className
      )}>
      <MenuTitle className='text-center flex justify-center w-full mt-[14vh] mb-4 ' />
      <Menu className='' />
    </div>
  )
}
