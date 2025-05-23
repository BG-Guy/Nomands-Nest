import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface MenuCategoriesProps {
  className?: string
  handleCategoryClick: (category: string) => void
  selectedCategory: string | null
}

export const MenuCategories: React.FC<MenuCategoriesProps> = ({
  className,
  handleCategoryClick,
  selectedCategory,
}) => {
  const categories = ["Breakfast", "Lunch", "Dinner"]
  return (
    <div className={cn("gap-10", className)}>
      {categories.map((item, index) => {
        const [IsHover, setIsHover] = useState<boolean>(false)
        return (
          <motion.div
            className='WRAPPER relative '
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            onClick={() => handleCategoryClick(item)}>
            <motion.div
              animate={{
                x: IsHover || selectedCategory === item ? "-100%" : "0",
                y: "-20%",
              }}
              transition={{
                type: "spring",
                duration: 0.3,
                stiffness: 100,
                damping: 10,
              }}
              className='absolute text-3xl'>
              •
            </motion.div>
            <motion.div
              animate={{
                x: IsHover || selectedCategory === item ? "10%" : "0",
              }}
              className='z-10 relative cursor-pointer bg-warmLightOffWhite font-simple-2'>
              {item}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
