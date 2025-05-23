import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { MenuCategories } from "./MenuCategories"
import { MenuContent } from "./MenuContent"

interface MenuProps {
  className?: string
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category) // Update parent state
  }

  return (
    <div className={cn("flex flex-row flex-1 w-full p-4 gap-8", className)}>
      <MenuCategories
        className='flex flex-col'
        handleCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
      />
      <MenuContent
        className='relative flex-1 flex flex-wrap gap-8'
        selectedCategory={selectedCategory}
      />
    </div>
  )
}
