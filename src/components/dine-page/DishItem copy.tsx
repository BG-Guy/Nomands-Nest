import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { menuData } from "./data"
import { modalVariants, descriptionVariants } from "./dish-modal-anim"

interface DishItemCopyProps {
  className?: string
  dishId: string
  selectedDishId: string
  handleSelectedDish: (dishId: string) => void
}

export const DishItemCopy: React.FC<DishItemCopyProps> = ({
  className,
  dishId,
  selectedDishId,
  handleSelectedDish,
}) => {
  const dish = menuData.find((dish) => dish.id === dishId)
  const containerControls = useAnimation()
  const infoControls = useAnimation()
  const imageControls = useAnimation()

  const handleAnimation = async () => {
    if (selectedDishId === dishId) {
      handleSelectedDish("")
    } else {
      handleSelectedDish(dishId)
    }
  }

  const isDishSelected = () => {
    return selectedDishId && selectedDishId !== dishId
  }

  return (
    dish && (
      <motion.div
        key={dish.id}
        layoutId={dishId}
        layout
        className=' w-[180px] h-[180px] TEST z-20 flex cursor-pointer relative items-center justify-center rounded-full'
        whileHover='hover'
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isDishSelected() ? 0 : 1,
          y: isDishSelected() ? -20 : 0,
        }}
        onClick={() => handleAnimation()}>
        <motion.div
          className='w-[150px] h-[150px] bg-cover bg-center z-30'
          style={{
            backgroundImage: dish.backgroundImage,
          }}></motion.div>
      </motion.div>
    )
  )
}
