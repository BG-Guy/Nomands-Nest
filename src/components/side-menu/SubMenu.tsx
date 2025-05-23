import React from "react"
import { cn } from "@/lib/utils"
import { exploreCategories, stayCategories } from "./side-menu-data"

interface SubMenuProps {
  className?: string
}

export const SubMenu: React.FC<SubMenuProps> = ({ className }) => {
  return (
    <div className="mt-10 flex justify-evenly font-simple-3">
      <div className="flex flex-col gap-1">
        <span className="mb-4 text-xs opacity-40">STAY</span>
        {stayCategories.map(({ title }, index) => (
          <span key={index} className="cursor-pointer text-sm opacity-70">
            {title}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <span className="mb-4 text-xs opacity-40">EXPLORE</span>
        {exploreCategories.map(({ title }, index) => (
          <span key={index} className="cursor-pointer text-sm opacity-70">
            {title}
          </span>
        ))}
      </div>
    </div>
  )
}
