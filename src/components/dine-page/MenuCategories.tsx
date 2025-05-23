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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("gap-10", className)}>
      {categories.map((item, index) => {
        return (
          <motion.div
            className='WRAPPER relative '
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={index}
            onClick={() => handleCategoryClick(item)}>
            <motion.div
              animate={{
                x:
                  hoveredIndex === index || selectedCategory === item
                    ? "-100%"
                    : "0",
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
                x:
                  hoveredIndex === index || selectedCategory === item
                    ? "10%"
                    : "0",
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
