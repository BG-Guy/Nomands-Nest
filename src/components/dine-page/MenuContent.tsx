import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { menuData } from "./data"
import { DishModal } from "./dish-modal"
import { DishItem } from "./DishItem"
import { DishItemCopy } from "./DishItem copy"
import { AnimatePresence, motion } from "framer-motion"

interface MenuContentProps {
  className?: string
  selectedCategory: string | null
}

export const MenuContent: React.FC<MenuContentProps> = ({
  className,
  selectedCategory,
}) => {
  const filteredItems = menuData.filter(
    (item) => item.category === selectedCategory
  )

  const [selectedDishId, setSelectedDishId] = useState("")

  const handleSelectedDish = (dishId: string) => {
    if (selectedDishId === dishId) setSelectedDishId("")
    else setSelectedDishId(dishId)
  }

  const dropVariants = {
    initial: { x: -20, rotate: 45 },
    hover: {
      x: 0,
      rotate: 45,
      transition: { type: "easeInOut" },
    },
  }

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1, // reverse order on exit
      },
    },
  }

  const itemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.2,
        stiffness: 100,
        dampness: 20,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        type: "easeOut",
        duration: 0.2,
      },
    },
  }

  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          className={cn("gap-4", className)}>
          {filteredItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <DishItemCopy
                dishId={item.id}
                handleSelectedDish={handleSelectedDish}
                selectedDishId={selectedDishId}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <DishModal
        selectedDishId={selectedDishId}
        setSelectedDishId={setSelectedDishId}
      />
    </>
  )
}
